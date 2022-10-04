import replace from "gulp-replace"; //search and replace
import plumber from "gulp-plumber";//error processing
import notify from "gulp-notify";//messege-hints

//export objects
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
};
