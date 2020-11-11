'use strict'; // jshint ignore:line
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

const minify = function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('.'));
};

gulp.task('minify', minify);

gulp.task('default', function () {
  return minify();
});
