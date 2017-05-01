var gulp = require('gulp'),
    util = require('gulp-util'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    Fontmin = require('fontmin');

gulp.task('fonts', function() {
    var fontmin = new Fontmin();
    return fontmin
        .src('./fonts/*.ttf')
        .use(Fontmin.ttf2woff({
            deflate: true
        }))
        .use(Fontmin.ttf2eot())
        .use(Fontmin.ttf2svg())
        .dest('./dist/fonts')
        .run(function (err, files) {

        });

    return gulp
        .src('./fonts/**/*.ttf')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    return gulp
        .src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp
        .src('./images/**/*.png')
        .pipe(gulp.dest('./dist/images/'))
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    return gulp
        .src('./js/**/*.js')
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(connect.reload());
});

gulp.task('templates', function() {
    return gulp.src('./templates/**/*.jade')
        .pipe(jade({
            local: {},
            pretty: true,
        }).on('error', util.log))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('watchScripts', function() {
    gulp.watch('./js/**/*.js', ['scripts']);
});

gulp.task('watchStyles', function() {
    gulp.watch('./scss/**/*.scss', ['styles']);
});

gulp.task('watchTemplates', function() {
    gulp.watch('./templates/**/*.jade', ['templates']);
});

gulp.task('connect', function() {
    connect.server({
        root: './dist/',
        port: 8081,
        livereload: true,
    });
});

gulp.task('build', ['fonts', 'images', 'scripts', 'styles', 'templates']);

gulp.task('default', ['build', 'watchStyles', 'watchScripts', 'watchTemplates', 'connect']);
