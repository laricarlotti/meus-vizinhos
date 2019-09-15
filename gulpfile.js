// Load plugins
const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const minifyCSS = require('gulp-csso');

// CSS task
function css() {
  return gulp
    .src("./site/scss/**/*.scss")
    .pipe(concat('styles.css'))
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(minifyCSS())
    .pipe(gulp.dest("./site/css"))
}


// Watch files
function watchFiles() {
  gulp.watch("./site/scss/**/*.scss", css);
  
}

// define complex tasks
const watch = gulp.parallel(watchFiles);


// export tasks
exports.css = css;
exports.watch = watch;
exports.default = watch;