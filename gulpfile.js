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
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
/*import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js'*/

//Watcher for changing in files
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
};

export { svgSprive };

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

//Main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))


//building a task execution script
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//default script execution
gulp.task('default', dev);