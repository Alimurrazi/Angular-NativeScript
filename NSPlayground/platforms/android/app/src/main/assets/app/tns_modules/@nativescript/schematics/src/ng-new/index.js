"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
function default_1(options) {
    return schematics_1.chain([
        () => {
            if (options.shared) {
                const sharedOptions = parseToSharedOptions(options);
                return schematics_1.schematic('shared', sharedOptions);
            }
            else {
                const applicationOptions = parseToApplicationOptions(options);
                return schematics_1.schematic('application', applicationOptions);
            }
        },
        (_tree, context) => {
            const packageTask = context.addTask(new tasks_1.NodePackageInstallTask(options.name));
            const dependencies = [packageTask];
            context.addTask(new tasks_1.RepositoryInitializerTask(options.name, {}), dependencies);
        },
    ]);
}
exports.default = default_1;
const parseToSharedOptions = (options) => {
    return {
        name: options.name,
        sourceDir: options.sourceDir || 'src',
        prefix: options.prefix,
        style: options.style,
        theme: options.theme,
        sample: options.sample,
        skipAutoGeneratedComponent: options.skipAutoGeneratedComponent
    };
};
const parseToApplicationOptions = (options) => {
    return {
        name: options.name,
        prefix: options.prefix,
        sourceDir: options.sourceDir || 'app',
        style: options.style,
        theme: options.theme,
        webpack: options.webpack,
    };
};
//# sourceMappingURL=index.js.map