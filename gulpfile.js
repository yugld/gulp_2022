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

//default script execution
gulp.task('default', copy)