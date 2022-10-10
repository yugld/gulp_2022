import replace from "gulp-replace"; //search and replace
import plumber from "gulp-plumber";//error processing
import notify from "gulp-notify";//messege-hints
import browserSync from "browser-sync" ;//local server
import newer from 'gulp-newer'; // Проверка обновления
import ifPlugin from 'gulp-if'; // Условное ветление

//export objects
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync.create(),
    newer: newer,
    if: ifPlugin
};
