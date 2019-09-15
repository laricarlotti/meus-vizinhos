// Load plugins
const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const minifyCSS = require('gulp-csso');

// CSS task
function css() {
  return gulp
    .src("./app/scss/**/*.scss")
    .pipe(concat('styles.css'))
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(minifyCSS())
    .pipe(gulp.dest("./app/css"))
}


// Watch files
function watchFiles() {
  gulp.watch("./app/scss/**/*.scss", css);
  
}

// define complex tasks
const watch = gulp.parallel(watchFiles);


// export tasks
exports.css = css;
exports.watch = watch;
exports.default = watch;