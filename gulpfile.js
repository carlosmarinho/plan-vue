'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sassFiles = 'src/assets/sass/*.s*ss';

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sourcemaps.init())
    //.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sass.sync({outputStyle: ''}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch(sassFiles, gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));
