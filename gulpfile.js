'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(['./build/style/*.scss', './build/templates/*/*/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./build/style/*.scss', './build/templates/*/*/*.scss'], ['sass']);
});