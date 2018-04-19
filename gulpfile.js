var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
gulp.task('watch', ['browserSync'], function() {
  gulp.watch(['**/*.html', '**/*.css', '**/*.js', '**/*.jpg', '**/*.png'], browserSync.reload);

})
function onError(err) {
  console.log(err);
  this.emit('end');
}
