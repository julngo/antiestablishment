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
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.png', browserSync.reload);
  gulp.watch('*.jpg', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
  gulp.watch('*.css', browserSync.reload);

})
function onError(err) {
  console.log(err);
  this.emit('end');
}
