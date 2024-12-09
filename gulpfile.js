// npm i gulp -g
// npm init
// npm i gulp --save-dev
// gulpfile.js + app>
// npm i gulp-sass --save-dev
// npm i gulp-rename --save-dev
// npm i browser-sync --save-dev
// npm i gulp-autoprefixer --save-dev
// npm i gulp-concat gulp-uglify gulp-cssmin --save-dev

// npm i slick-carousel normalize.css magnific-popup --save-dev

// npm i    /* старт нового проекта */

let gulp = require('gulp'),
   sass = require('gulp-sass'),
   rename = require('gulp-rename'),
   browserSync = require('browser-sync'),
   autoprefixer = require('gulp-autoprefixer'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
   cssmin = require('gulp-cssmin');


gulp.task('sass', function () {
   return gulp.src('app/scss/style.scss')
      // .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 8 versions'],
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({ stream: true }));
});
// gulp sass

gulp.task('style', function () {
   return gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/slick-carousel/slick/slick-theme.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/animate.css/animate.css'
   ])
      .pipe(concat('libs.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('app/css'))
});
// gulp style

gulp.task('script', function () {
   return gulp.src([
      'node_modules/slick-carousel/slick/slick.js',
   ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'))
});
// gulp script

gulp.task('html', function () {
   return gulp.src('app/*.html')
      .pipe(browserSync.reload({ stream: true }));
});
// gulp html

gulp.task('js', function () {
   return gulp.src('app/js/*.js')
      .pipe(browserSync.reload({ stream: true }));
});
// gulp js


gulp.task('browser-sync', function () {
   browserSync.init({
      server: {
         baseDir: "app/"
      }
   });
});

gulp.task('watch', function () {
   gulp.watch('app/scss/style.scss', gulp.parallel('sass'))
   gulp.watch('app/*.html', gulp.parallel('html'))
   gulp.watch('app/js/*.js', gulp.parallel('js'))
});
// gulp watch

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'));
// gulp
