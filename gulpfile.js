var gulp = require('gulp');
		uglify = require('gulp-uglify');
		minify = require('gulp-htmlmin');
		cleanify = require('gulp-clean-css');
		imagify = require('gulp-imagemin');

gulp.task('start', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));

	gulp.src('src/views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js'));

	gulp.src('src/*.html')
		.pipe(minify())
		.pipe(gulp.dest('dest'));

	gulp.src('src/views/*.html')
		.pipe(minify())
		.pipe(gulp.dest('dist/views'));

	gulp.src('src/css/*.css')
		.pipe(cleanify())
		.pipe(gulp.dest('dist/css'));

	gulp.src('src/views/css/*.css')
		.pipe(cleanify())
		.pipe(gulp.dest('dist/views/css'));

	gulp.src('src/views/images/*.+(jpg|png)')
		.pipe(imagify())
		.pipe(gulp.dest('dist/views/images'));

	gulp.src('src/img/*.jpg')	
		.pipe(imagify())
		.pipe(gulp.dest('dist/img'));

	gulp.src('src/views/images/*.jpg')
		.pipe(imagify())
		.pipe(gulp.dest('dist/views/images'));

	gulp.src('src/css/open-sans/*.ttf')
		.pipe(gulp.dest('dist/css/open-sans'))
});

gulp.task('default',['start']);
