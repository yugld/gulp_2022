// Base mode
import gulp from 'gulp';
//import paths
import { path } from "./gulp/config/path.js";
//import general plugins
import { plugins } from "./gulp/config/plugins.js";

//passing values ​​to global variable
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
};

//import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

//Watcher for changing in files
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
};

const mainTasks = gulp.parallel(copy, html);

//building a task execution script
const dev = gulp.series(reset, mainTasks, watcher);

//default script execution
gulp.task('default', dev);