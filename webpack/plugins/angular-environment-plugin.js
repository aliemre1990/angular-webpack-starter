const yargs = require('yargs');
const fs = require('fs');
const path = require('path').posix;

const pluginName = 'angularEnvironmentPlugin';
const ngEnvironmentParamName = 'ngEnvironment';
const environmentFolder = 'client/environments';

class AngularEnvironmentPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, (params, callback) => {
            if (fs.existsSync(path.join(environmentFolder, 'environment.ts')))
                fs.unlinkSync(path.join(environmentFolder, 'environment.ts'));
            var paramValue = yargs.argv[ngEnvironmentParamName];
            if (paramValue) {
                var content = fs.readFileSync(path.join(environmentFolder, `environment.${paramValue}.ts`));
                fs.writeFileSync(path.join(environmentFolder, 'environment.ts'), content);
            } else {
                var content = fs.readFileSync(path.join(environmentFolder, `environment.dev.ts`));
                fs.writeFileSync(path.join(environmentFolder, 'environment.ts'), content);
            }
        });

        compiler.hooks.done.tap(pluginName, (params, callback) => {
            if (fs.existsSync(path.join(environmentFolder, 'environment.ts')))
                fs.unlinkSync(path.join(environmentFolder, 'environment.ts'));
        });

    }
}

module.exports = AngularEnvironmentPlugin;

