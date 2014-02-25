var gulp = require("gulp");

var rjs = require('gulp-requirejs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: "source/javascripts/*",
  images: "source/images/*"
};

gulp.task("scripts", function(){
  return gulp.src(paths.scripts)
             .pipe(uglify())
             .pipe(concat("application.min.js"))
             .pipe(gulp.dest("source/javascripts/"));
});

gulp.task("rjs", function(){
  rjs({
    name: "application",
    baseUrl: "source/javascripts/",
    out: "application.min.js",
    paths: {
      'jquery': 'bower_components/jquery/jquery',
      'underscore': 'bower_components/underscore/underscore',
      'backbone': 'bower_components/backbone/backbone',
      'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr'
    }
  })
  .pipe(gulp.dest("source/javascripts/"));


});