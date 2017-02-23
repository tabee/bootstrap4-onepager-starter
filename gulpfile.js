// defining base pathes
var basePaths = {
    node: './node_modules/',
    dev: './src/',
    dist: './public/'
};

// saas options
var sassOptionsDefault = {
    errLogToConsole: true,
    outputStyle: 'nested' //:nested :compact :expanded :compressed
};
var sassOptionsProd = {
    errLogToConsole: true,
    outputStyle: 'compressed' //
};

// required
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var chug = require('gulp-chug');


gulp.task('animatecss-gulp-default', function () {
    gulp.src(basePaths.dev + '/sass/animate.css/gulpfile.js')
        .pipe(chug())
});


// compact css
gulp.task('sass', function () {
    return gulp
        .src(basePaths.dev + '/sass/theme.scss')
        .pipe(sass(sassOptionsDefault).on('error', sass.logError))
        //.pipe(gulp.dest(basePaths.dist + 'css'))
        .pipe(gulp.dest(basePaths.dev + 'assets/css'));
});

// compressed css
gulp.task('sass-prod', function () {
    return gulp
        .src(basePaths.dev + '/sass/theme.scss')
        //.pipe(rename({suffix: '.min'}))
        .pipe(sass(sassOptionsProd).on('error', sass.logError))
        .pipe(gulp.dest(basePaths.dist + 'assets/css'));
    //.pipe(gulp.dest(basePaths.dev + 'css'));

});

// uglifies and concat all JS files into one
gulp.task('scripts', function () {
    var scripts = [
        // include typed.js too
        basePaths.dev + 'assets/js/typed.js',
        // all custom scripts
        basePaths.dev + 'js/*.js'
    ];
    gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(basePaths.dev + 'assets/js'))
        .pipe(uglify())
        .pipe(gulp.dest(basePaths.dist + 'assets/js'));
});


gulp.task('watch', ['copy-assets'], function () {
    return gulp
        .watch(
            [basePaths.dev + 'js/**/*.js',
                basePaths.dev + 'sass/**/*.scss',
                basePaths.dev + 'data/*.*',
                basePaths.dev + '*.html'],

            ['dist']
        )
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

// copy assets, data
gulp.task('copy-assets', function () {
// Copy all Bootstrap JS files
    var stream = gulp.src(basePaths.node + 'bootstrap/dist/js/**/bootstrap.min.js')
        .pipe(gulp.dest(basePaths.dist + '/assets/js'))
        .pipe(gulp.dest(basePaths.dev + '/assets/js'));
// Copy jQuery
    gulp.src(basePaths.node + 'jquery/dist/jquery.min.js')
        .pipe(gulp.dest(basePaths.dist + '/assets/js'))
        .pipe(gulp.dest(basePaths.dev + '/assets/js'));
// Copy Tether JS files
    gulp.src(basePaths.node + 'tether/dist/js/tether.min.js')
        .pipe(gulp.dest(basePaths.dist + '/assets/js'))
        .pipe(gulp.dest(basePaths.dev + '/assets/js'));
    // Copy Typed JS file
    gulp.src(basePaths.node + 'typed.js/js/typed.js')
        .pipe(gulp.dest(basePaths.dev + 'assets/js'));
////////////////// End Bootstrap 4 Assets /////////////////////////

// Copy all Font Awesome Fonts
    gulp.src(basePaths.node + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest(basePaths.dist + '/assets/fonts'))
        .pipe(gulp.dest(basePaths.dev + '/assets/fonts'));
    return stream;
});

// dist
gulp.task('dist', ['scripts', 'sass', 'sass-prod'], function () {
// Copy HTML from src to dist
    gulp.src(basePaths.dev + '*.html')
        .pipe(gulp.dest(basePaths.dist + '/'));
    // Copy Data
    gulp.src(basePaths.dev + 'data/*.*')
        .pipe(gulp.dest(basePaths.dist + '/data'));
});


// clean
gulp.task('clean', function () {
// removes files and folders.
    return gulp.src([basePaths.dist, basePaths.dev + 'assets', basePaths.dev + 'sass/animate.css/animate.scss'], {read: false})
        .pipe(clean());
});


gulp.task('default', ['animatecss-gulp-default']);
