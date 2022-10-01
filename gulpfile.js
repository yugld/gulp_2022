// Base mode
import gulp from 'gulp';
//import paths
import { path } from "./gulp/config/path.js";

//passing values ​​to global variable
global.app = {
    path: path,
    gulp: gulp
}

//import tasks
import { copy } from "./gulp/tasks/copy.js";

//Watcher for changing in files
function watcher() {
    gulp.watch(path.watch.files, copy)
};

//building a task execution script
const dev = gulp.series(copy, watcher);

//default script execution
gulp.task('default', dev);