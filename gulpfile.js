var gulp = require('gulp')
  , plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
  plugins.connect.server({
    root: "dist",
    port: 9000,
    livereload: true,
  });
});

gulp.task('views', function () {
  return gulp.src('source/*.jade')
    .pipe(plugins.jade({ pretty: true}))
    .on('error', plugins.notify.onError(function (err) { console.log(err.message); return "error jade"; }))
    .pipe(gulp.dest('dist'))
    .pipe(plugins.connect.reload());
});

gulp.task('stylus', function () {
  gulp.src('source/stylus/*.styl')
    .pipe(plugins.stylus())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('css', function () {
  gulp.src('./dist/styles/*.css')
    .pipe(plugins.connect.reload());
});


gulp.task('js', function () {
  gulp.src('source/javascript/main.js')
    .pipe(gulp.dest('dist/scripts'))
    .pipe(plugins.connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./source/**/*.jade'], ['views']);
  gulp.watch(['./source/stylus/**/*.styl'], ['stylus']);
  gulp.watch(['./source/javascript/**/*.js'], ['js']);
  gulp.watch(['./dist/styles/**/*.css'], ['css']);
});

gulp.task("serve", ["connect", "views", "stylus", "js", "watch"]);
gulp.task("default", ["connect", "views", "stylus", "js", "watch"]);
