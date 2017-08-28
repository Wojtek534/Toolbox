var gulp = require('gulp');
var minify = require('gulp-minify');
// task
// src
// dest
// watch
var distfolder = './dist/';

gulp.task('min', function () {
    gulp.src('./source/sample.js')
        .pipe(minify())
        .pipe(gulp.dest(distfolder));
})