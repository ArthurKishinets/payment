var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync').create(),
	imagemin = require('gulp-imagemin')
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat');

// Scripts Task

gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('minjs/'))
		.pipe(browserSync.stream());
});

//Styles Task

gulp.task('styles', function() {
	return sass('scss/**/*.scss', {style : 'compressed'})
		.pipe(plumber())
		.pipe(prefix({
			browsers: ['last 2 versions'],
			cascade: true
		}))
		.pipe(concat('all.css'))
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.stream());
});

// Image Task
// Compress

gulp.task('image', function() {
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/'));
});


// Watch task

gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

// Browser-sync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['scripts', 'styles', 'watch', 'browser-sync', 'image']);
