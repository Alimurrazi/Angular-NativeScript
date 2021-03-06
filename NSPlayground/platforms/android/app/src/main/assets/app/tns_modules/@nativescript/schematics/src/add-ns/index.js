"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const utils_1 = require("../utils");
const angular_project_parser_1 = require("../angular-project-parser");
let extensions;
let projectSettings;
function default_1(options) {
    extensions = {
        ns: (options.nsExtension.length > 0) ? '.' + options.nsExtension : '',
        web: (options.webExtension.length > 0) ? '.' + options.webExtension : ''
    };
    return schematics_1.chain([
        validateOptions(options),
        getProjectSettings(options.project),
        addNativeScriptSchematics,
        addNsFiles(options),
        options.sample ?
            addSampleFiles() :
            schematics_1.noop(),
        addAppResources(),
        mergeGitIgnore,
        addRunScriptsToPackageJson,
        addNativeScriptProjectId,
        excludeNsFilesFromTsconfig,
        options.skipAutoGeneratedComponent ?
            schematics_1.noop() :
            addSampleComponent(options.nsExtension, options.webExtension, options.project),
        addDependencies(),
        options.skipInstall ?
            schematics_1.noop() :
            (_tree, context) => {
                context.addTask(new tasks_1.NodePackageInstallTask());
            },
    ]);
}
exports.default = default_1;
/**
 * Make sure that nsExtension != webExtension
 */
const validateOptions = (options) => () => {
    if (options.nsExtension === options.webExtension) {
        throw new schematics_1.SchematicsException(`nsExtension "${options.nsExtension}" and webExtension "${options.webExtension}" should have different values`);
    }
};
const getProjectSettings = (projectName) => (tree, context) => {
    context.logger.info('Reading Project Settings');
    projectSettings = angular_project_parser_1.getAngularProjectSettings(tree, projectName);
    context.logger.info(`Project settings:
${JSON.stringify(projectSettings, null, 2)}`);
};
const addNativeScriptSchematics = (tree, context) => {
    context.logger.info('Adding @nativescript/schematics to angular.json');
    const angularJson = utils_1.getJsonFile(tree, 'angular.json');
    const defaultCollection = '@nativescript/schematics';
    if (angularJson.cli && angularJson.cli.defaultCollection !== defaultCollection) {
        context.logger.warn(`Changing default schematics collection
${JSON.stringify(angularJson.cli, null, 2)}
  to:
${JSON.stringify(angularJson.cli, null, 2)}`);
    }
    angularJson.cli = { 'defaultCollection': defaultCollection };
    tree.overwrite('angular.json', JSON.stringify(angularJson, null, 2));
};
const addNsFiles = (options) => (_tree, context) => {
    context.logger.info('Adding {N} files');
    const templateOptions = {
        sample: options.sample,
        skipAutoGeneratedComponent: options.skipAutoGeneratedComponent,
        theme: true,
        dasherize: strings_1.dasherize,
        nsext: extensions.ns,
        webext: extensions.web,
        sourceDir: projectSettings.sourceRoot,
        prefix: projectSettings.prefix,
        main: projectSettings.mainName,
        entryModuleClassName: projectSettings.entryModuleClassName,
        entryModuleName: projectSettings.entryModuleName,
        entryModuleImportPath: projectSettings.entryModuleImportPath,
        entryComponentClassName: projectSettings.entryComponentClassName,
        entryComponentName: projectSettings.entryComponentName,
        entryComponentImportPath: projectSettings.entryComponentImportPath,
        indexAppRootTag: projectSettings.indexAppRootTag
    };
    const templateSource = schematics_1.apply(schematics_1.url('./_ns-files'), [
        schematics_1.template(templateOptions)
    ]);
    return schematics_1.mergeWith(templateSource);
};
const addSampleFiles = () => (_tree, context) => {
    context.logger.info('Adding sample files');
    const templateOptions = {
        nsext: extensions.ns,
        webext: extensions.web,
        sourceDir: projectSettings.sourceRoot,
        indexAppRootTag: projectSettings.indexAppRootTag,
    };
    const path = path_1.join(projectSettings.sourceRoot, 'app');
    const templateSource = schematics_1.apply(schematics_1.url('./_sample-files'), [
        schematics_1.template(templateOptions),
        schematics_1.move(path),
    ]);
    return schematics_1.mergeWith(templateSource);
};
const addSampleComponent = (nsExtension, webExtension, project) => (_tree, context) => {
    context.logger.info('Adding Sample Shared Component');
    return schematics_1.schematic('component', {
        nsExtension: nsExtension,
        webExtension: webExtension,
        web: true,
        nativescript: true,
        name: 'auto-generated',
        module: 'app',
        prefix: projectSettings.prefix,
        spec: false,
        project,
    });
};
const addAppResources = () => (_tree, context) => {
    context.logger.info('Adding App_Resources');
    return schematics_1.schematic('app-resources', {
        path: ''
    });
};
/**
 * Adds NativeScript specific ignores to .gitignore
 */
const mergeGitIgnore = (tree, context) => {
    context.logger.info('Adding NativeScript specific exclusions to .gitignore');
    // Read existing .gitignore file
    const GITIGNORE = '.gitignore';
    if (!tree.exists(GITIGNORE)) {
        tree.create(GITIGNORE, '');
    }
    const gitignore = utils_1.getFileContents(tree, `/${GITIGNORE}`).split('\n');
    // Prepare {N} ignore items
    const nsGitignoreItems = [
        'node_modules/',
        'platforms/',
        'hooks/',
        `${projectSettings.sourceRoot}/**/*.js`,
    ].filter(line => !gitignore.includes(line));
    const nsGitignoreContent = `# NativeScript` +
        nsGitignoreItems.join('\n') +
        '\n';
    // Update .gitignore
    const recorder = tree.beginUpdate(GITIGNORE);
    recorder.insertLeft(0, nsGitignoreContent);
    tree.commitUpdate(recorder);
};
/**
 * Adds {N} npm run scripts to package.json
 * npm run ios => tns run ios --bundle
 * npm run android => tns run android --bundle
 */
const addRunScriptsToPackageJson = (tree, context) => {
    context.logger.info('Adding NativeScript run scripts to package.json');
    const packageJson = utils_1.getPackageJson(tree);
    const scriptsToAdd = {
        android: 'tns run android --bundle',
        ios: 'tns run ios --bundle',
        mobile: 'tns run --bundle',
        preview: 'tns preview --bundle'
    };
    packageJson.scripts = Object.assign({}, scriptsToAdd, packageJson.scripts);
    utils_1.overwritePackageJson(tree, packageJson);
};
const addNativeScriptProjectId = (tree, context) => {
    context.logger.info('Adding NativeScript Project ID to package.json');
    const packageJson = utils_1.getJsonFile(tree, 'package.json');
    packageJson.nativescript = packageJson.nativescript || {};
    packageJson.nativescript = Object.assign({
        id: 'org.nativescript.ngsample'
    }, packageJson.nativescript);
    tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));
};
/**
 * Adds {N}-specific extensions
 * to the list with excluded files
 * in the web TypeScript configuration
 */
const excludeNsFilesFromTsconfig = (tree, context) => {
    context.logger.info('Excluding NativeScript files from web tsconfig');
    const nsExtensions = [
        `**/*${extensions.ns}.ts`,
        '**/*.android.ts',
        '**/*.ios.ts',
    ];
    const tsConfigPath = projectSettings.tsConfig;
    const tsConfig = utils_1.getJsonFile(tree, tsConfigPath);
    tsConfig.exclude = tsConfig.exclude || [];
    tsConfig.exclude = [...tsConfig.exclude, ...nsExtensions];
    tree.overwrite(tsConfigPath, JSON.stringify(tsConfig, null, 2));
};
const addDependencies = () => (tree, context) => {
    context.logger.info('Adding npm dependencies');
    const packageJson = utils_1.getPackageJson(tree);
    // @UPGRADE: Update all versions whenever {N} version updates
    const depsToAdd = {
        'nativescript-angular': '~7.2.0',
        'nativescript-theme-core': '~1.0.4',
        'reflect-metadata': '~0.1.12',
        'tns-core-modules': '~5.2.0'
    };
    packageJson.dependencies = Object.assign({}, depsToAdd, packageJson.dependencies);
    const devDepsToAdd = {
        'nativescript-dev-webpack': '^0.20.0',
        '@nativescript/schematics': '~0.4.0',
    };
    packageJson.devDependencies = Object.assign({}, devDepsToAdd, packageJson.devDependencies);
    utils_1.overwritePackageJson(tree, packageJson);
};
//# sourceMappingURL=index.js.map