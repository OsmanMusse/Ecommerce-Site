'use strict';

const gulp = require('gulp'),
concat  = require('gulp-concat'),
uglify  = require('gulp-uglify'),
rename  = require('gulp-rename'),
sass    = require('gulp-sass'),
maps    = require('gulp-sourcemaps'),
del     = require('del'),
connect = require('gulp-connect');


gulp.task("concatScripts", function(){
   return gulp.src([
     'app/js/jquery.js',
     'app/js/main.js'
   ])
     .pipe(maps.init())
     .pipe(concat('app.js'))
     .pipe(maps.write('./'))
     .pipe(gulp.dest("app/js"))
});


gulp.task('minifyscripts',['concatScripts'] , function(){
  return gulp.src("app/js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('build/js'))
});


gulp.task('compileSass', function(){
   return gulp.src("app/scss/application.scss")
   .pipe(maps.init())
   .pipe(sass())
   .pipe(maps.write('./'))
   .pipe(gulp.dest('build/css'))
});

gulp.task('watchFiles', function(){
  gulp.watch('app/scss/**/*.scss', ['compileSass']);
  gulp.watch('app/js/main.js' , ['concatScripts']);
});

gulp.task('pushHtml', function(){
  gulp.src('app/index.html')
  .pipe(gulp.dest('build'))
});

gulp.task('pushImg', function(){
  gulp.src('app/img/**')
  .pipe(gulp.dest('build/img'))
});

gulp.task('pushFonts', function(){
  gulp.src('app/fonts/**')
  .pipe(gulp.dest('build/fonts'))
});



gulp.task('clean', function(){
  return del(['build']);
});



gulp.task('server', ['watchFiles'], function(){
  connect.server({port : 3000});
})


gulp.task('build', ['minifyscripts', 'compileSass', 'pushHtml', 'pushImg', 'pushFonts' ]);


gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
