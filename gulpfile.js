var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var path = require('path');

gulp.task('build_app', function(){
	return browserify({
		standalone: 'app'
	})
	.add('./app/app.jsx')
	.exclude('react')
	.transform(reactify, {'es6': true, global: true})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./bin'));
});

gulp.task('build_client', function(){
	return browserify()
	.add('./app/client.jsx')
	.transform(reactify, {'es6': true, global: true})
	.bundle()
	.pipe(source('client.js'))
	.pipe(gulp.dest('./bin'));
});

gulp.task('style', function(){
	return gulp.src('./app/style/main.less')
	.pipe(less({
		paths: [path.join(__dirname, 'less', 'includes')]
	}))
	.pipe(gulp.dest('./public/style'));
});

gulp.task('server', function(){
	nodemon({
		script: './server.js',
		watch: ['./public'],
		delay: '500ms'
	});
});

gulp.task('rebuild', ['build_app', 'build_client']);

gulp.task('watch', function(){
	gulp.watch(['./app/**/*.js', './app/**/*.jsx'], ['rebuild']);
	gulp.watch(['./app/**/*.less'], ['style'])
})

gulp.task('default', ['watch', 'style', 'rebuild', 'server']);