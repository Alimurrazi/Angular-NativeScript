"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const utils_1 = require("../utils");
const ast_utils_1 = require("./ast-utils");
const find_module_1 = require("./find-module");
class ComponentInfo {
    constructor() { }
}
let extensions;
function default_1(options) {
    let platformUse;
    let componentInfo;
    return schematics_1.chain([
        (tree) => {
            platformUse = utils_1.getPlatformUse(tree, options);
            if (platformUse.nsOnly && options.spec !== true) {
                options.spec = false;
            }
            utils_1.validateGenerateOptions(platformUse, options);
            validateGenerateComponentOptions(platformUse, options);
            return tree;
        },
        () => schematics_1.externalSchematic('@schematics/angular', 'component', utils_1.removeNsSchemaOptions(Object.assign({}, options, { skipImport: true }))),
        (tree) => {
            extensions = utils_1.getExtensions(tree, options);
            componentInfo = parseComponentInfo(tree, options);
        },
        (tree) => {
            if (options.skipImport) {
                return tree;
            }
            // this is to ensure that we use the right name for ng module imports
            options.name = componentInfo.name;
            const componentPath = componentInfo.classPath.replace(/\.ts$/, '');
            const componentDir = path_1.dirname(componentPath);
            if (platformUse.useWeb) {
                const webModule = find_module_1.findModule(tree, options, componentDir, extensions.web);
                ast_utils_1.addDeclarationToNgModule(tree, options, componentPath, webModule);
            }
            if (platformUse.useNs) {
                const nsModule = find_module_1.findModule(tree, options, componentDir, extensions.ns);
                ast_utils_1.addDeclarationToNgModule(tree, options, componentPath, nsModule);
            }
            return tree;
        },
        (tree) => {
            if (platformUse.nsOnly) {
                ast_utils_1.insertModuleId(tree, componentInfo.classPath);
            }
        },
        (tree, context) => {
            if (platformUse.useWeb) {
                return addWebExtension(tree, componentInfo.templatePath);
            }
            else {
                return removeFile(tree, componentInfo.templatePath);
            }
        },
        (tree, context) => {
            if (platformUse.useWeb) {
                return addWebExtension(tree, componentInfo.stylesheetPath);
            }
            else {
                return removeFile(tree, componentInfo.stylesheetPath);
            }
        },
        (tree, context) => {
            if (platformUse.useNs) {
                return addNativeScriptFiles(componentInfo)(tree, context);
            }
        }
    ]);
}
exports.default = default_1;
;
const validateGenerateComponentOptions = (platformUse, options) => {
    if (platformUse.webReady && options.inlineTemplate) {
        throw new schematics_1.SchematicsException('You cannot use the --inlineTemplate option for web+ns component!');
    }
};
const parseComponentInfo = (tree, options) => {
    const component = new ComponentInfo();
    const parsedPath = parse_name_1.parseName(options.path || '', options.name);
    component.name = strings_1.dasherize(parsedPath.name);
    const getGeneratedFilePath = (searchPath) => {
        const action = tree.actions.find(({ path }) => path.endsWith(searchPath));
        if (!action) {
            throw new schematics_1.SchematicsException(`Failed to find generated component file ${searchPath}. ` +
                `Please contact the @nativescript/schematics author.`);
        }
        return action.path;
    };
    const className = `/${component.name}.component.ts`;
    component.classPath = getGeneratedFilePath(className);
    const templateName = `/${component.name}.component.html`;
    component.templatePath = getGeneratedFilePath(templateName);
    const stylesheetName = `/${component.name}.component.${options.styleext}`;
    component.stylesheetPath = getGeneratedFilePath(stylesheetName);
    return component;
};
const addWebExtension = (tree, filePath) => {
    if (extensions.web) {
        const webName = insertExtension(filePath, extensions.web);
        tree.rename(filePath, webName);
    }
    return tree;
};
const removeFile = (tree, filePath) => {
    tree.delete(filePath);
    return tree;
};
const addNativeScriptFiles = (component) => {
    const parsedTemplate = parse_name_1.parseName('', component.templatePath);
    const nsTemplateName = insertExtension(parsedTemplate.name, extensions.ns);
    const { name: stylesheetName } = parse_name_1.parseName('', component.stylesheetPath);
    const nsStylesheetName = insertExtension(stylesheetName, extensions.ns);
    const templateSource = schematics_1.apply(schematics_1.url('./_files'), [
        schematics_1.template({
            name: component.name,
            path: parsedTemplate.path,
            templateName: nsTemplateName,
            stylesheetName: nsStylesheetName,
        }),
    ]);
    return schematics_1.mergeWith(templateSource);
};
const insertExtension = (fileName, extension) => {
    const extensionStart = fileName.lastIndexOf('.');
    const newFilename = fileName.substr(0, extensionStart) +
        extension +
        fileName.substr(extensionStart);
    return newFilename;
};
//# sourceMappingURL=index.js.map