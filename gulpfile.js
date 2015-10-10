var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var lessPath = './resources/assets/less/**/*.less';
var jsPath = 'resources/assets/js/**/*.js';
var viewsPath = 'resources/assets/js/views/*.html';
var output = './public/build';
var bowerDir = './public/vendor/';

gulp.task('less', function () {
    gulp.src('./resources/assets/less/app.less')
        .pipe(less({
            paths: [ bowerDir + "bootstrap/less", bowerDir + "font-awesome/less" ]
        }))
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulp.dest(output));
});

gulp.task('vendorCSS', function () {
    gulp.src([ 'public/vendor/animate.css/animate.min.css',
            'public/vendor/font-awesome/css/font-awesome.min.css',
            'public/vendor/ui-select/dist/select.min.css',
            'public/vendor/angular-toastr/dist/angular-toastr.min.css'],
            {base: 'public/vendor/'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(output));
});

gulp.task('vendorJS', function () {
    gulp.src([ 'public/vendor/angular/angular.min.js',
            'public/vendor/angular-bootstrap/ui-bootstrap.min.js',
            'public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'public/vendor/angular-ui-router/release/angular-ui-router.min.js',
            'public/vendor/ngstorage/ngStorage.min.js',
            'public/vendor/lodash/lodash.min.js',
            'public/vendor/ngAnimateCss/angular-animate-css.min.js',
            'public/vendor/satellizer/satellizer.min.js',
            'public/vendor/ng-messages/angular-messages.min.js',
            'public/vendor/angular-toastr/dist/angular-toastr.min.js',
            'public/vendor/angular-toastr/dist/angular-toastr.tpls.js'],
            {base: 'public/vendor/'})
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(output));
});

gulp.task('fonts', function () {
    gulp.src('public/vendor/font-awesome/fonts/*.*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('appJS', function () {
    gulp.src(jsPath)
        .pipe(concat('app.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('public/build'));
});

gulp.task('appViews', function () {
    gulp.src(viewsPath)
        .pipe(gulp.dest('public/views', {overwrite: true}));
});

gulp.task('watch', function() {
    gulp.watch(lessPath, ['less']);
    gulp.watch(jsPath, ['appJS']);
    gulp.watch(viewsPath, ['appViews']);
});

gulp.task('default', ['vendorCSS', 'vendorJS', 'fonts', 'less', 'watch']);