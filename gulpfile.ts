"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const sass = require('gulp-sass');

gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

gulp.task('tslint', () => {
    return gulp.src("ui/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("ui/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

gulp.task('sass', function () {
  gulp.src(['ui/**/*.scss', '!node_modules/**/*.*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function(file) {
            return file.base;
    }));
});

gulp.task("resources", () => {
    return gulp.src(["ui/**/*", "!**/*.ts", "!**/*.scss"])
        .pipe(gulp.dest("build"));
});

gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"})
        .pipe(gulp.dest("build/lib"));
});

gulp.task('watch', function () {
    gulp.watch(["ui/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["ui/**/*.js", "ui/**/*.html", "ui/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch('ui/**/*.scss', ['sass', 'resources'], function(e){
        console.log('Sass file ' + e.path + ' has been changed. Updating.');
    });
});

gulp.task("build", ['compile', 'sass', 'libs', 'resources'], () => {
    console.log("Building the project ...");
});