"use strict";

var gulp = require('gulp');

var cssMin = require('gulp-cssmin');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify');

var htmlMain = require('gulp-htmlmin');

function css() {
  return gulp.src('./css/**').pipe(cssMin()).pipe(gulp.dest('./dist/css/dist'));
}

function js() {
  return gulp.src('./js/**').pipe(babel({
    presets: ["env"]
  })).pipe(uglify()).pipe(gulp.dest('./dist/js'));
}

function html() {
  return gulp.src('./html/**').pipe(htmlMain({
    collapseWhitespace: true,
    // 表示去除空格
    removeEmptyAttributes: true,
    // 移出空的属性
    minifyCSS: true,
    // 压缩 style 标签
    minifyJS: true // 压缩 script 标签

  })).pipe(gulp.dest('./dist/html'));
}

exports.css = css;
exports.js = js;
exports.html = html;