var gulp = require('gulp')
var gutil = require('gulp-util')
var cleanCSS = require('gulp-clean-css')

gulp.task('default', function() {
	return gutil.log('Gulp is running!')
})

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('minified'));
});

gulp.task('watch', function() {
  // watch scss files
  gulp.watch('./sass/*.scss', function() {
    gulp.run('sass');
  });
});
