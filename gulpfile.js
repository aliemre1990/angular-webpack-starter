const gulp = require('gulp');
const child_process = require('child_process');

var serverProcess;
var clientProcess;

function spawnServerProcess() {
    serverProcess = child_process.exec('nodemon main.js');
    serverProcess.stdout.on('data', (data) => {
        console.log('server process: ', data);
    });
    serverProcess.stderr.on('data', (data) => {
        console.log('server process - error: ', data);
    });
}

function spawnClientProcess() {
    clientProcess = child_process.exec('webpack --config webpack/webpack.config.js --ngEnvironment dev');
    clientProcess.stdout.on('data', (data) => {
        console.log('client process: ', data);
    });
    clientProcess.stderr.on('data', (data) => {
        console.log('client process - error: ', data);
    });
}

module.exports.watch = function (cb) {
    console.log(`'watch' task is running...`);

    spawnServerProcess();
    spawnClientProcess();

    var clientWatcher = gulp.watch(['client/**/*', 'public/index.html', '!client/environments/environment.ts']);
    clientWatcher.on('change', (changedFP) => {
        console.log('Client file is changed: ', changedFP);
        clientProcess.kill();
        spawnClientProcess();
    });

    cb();
} 
