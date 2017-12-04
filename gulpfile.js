var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


gulp.task('html', function() {
  gulp.src(['./dev/src/**/*.html', '!./dev/src/**/_*.html'])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browser.reload({
    stream: true
  }))
});



gulp.task("sass", function() {
  gulp.src("./dev/src/style/**/*.scss")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/style"))
    .pipe(browser.reload({
      stream: true
    }))
});

gulp.task("img", function() {
  gulp.src("./dev/src/img/**/*.pmg", "./dev/src/img/**/*.jpg")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/img"))
    .pipe(browser.reload({
      stream: true
    }))
});

// gulp.task("default", function() {
//   gulp.watch(["./"], ["js"]);
//   gulp.watch("./dev/src/style/**/*scss", ["sass"]);
// });



gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./dist"
    }
  });
});
gulp.task("js", function() {
  gulp.src(["./dev/src/js/**/*js", "!js/min/**/*.js"])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
    // .pipe(uglify())
    .pipe(gulp.dest("./dev/js"))
    .pipe(gulp.dest("./dist/js"))
    .pipe(browser.reload({
      stream: true
    }))
});



gulp.task("default", ['server'], function() {
  gulp.watch(["./dev/src/js/**/*.js"], ["js"]);
  gulp.watch("./dev/src/style/**/*.scss", ["sass"]);
  gulp.watch("./dev/src/**/*.html", ["html"]);
  gulp.watch("./dev/src/img/**/*.jpg", ["img"]);
  gulp.watch("./dev/src/img/**/*.png", ["img"]);
});