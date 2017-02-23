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
        basePaths.dev + 'js/*.js' // Must be loaded before BS4
    ];
    gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(basePaths.dev + 'assets/js'))
        .pipe(uglify())
        .pipe(gulp.dest(basePaths.dist + 'assets/js'));

    //   gulp.src(scripts)
    //    .pipe(concat('theme.js'))
    //   .pipe(gulp.dest(basePaths.dist + 'js/'));
});

gulp.task('watch-sass', function () {
    return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
        .watch(basePaths.dev + '**/*.scss', ['sass-prod', 'sass'])
        // When there is a change,
        // log a message in the console
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('watch-scripts', function () {
    return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
        .watch(basePaths.dev + '**/*.js', ['scripts'])
        // When there is a change,
        // log a message in the console
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
// Copy Data
    gulp.src(basePaths.dev + 'data/*.json')
        .pipe(gulp.dest(basePaths.dist + '/data'));

////////////////// End Bootstrap 4 Assets /////////////////////////

// Copy all Font Awesome Fonts
    gulp.src(basePaths.node + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest(basePaths.dist + '/assets/fonts'))
        .pipe(gulp.dest(basePaths.dev + '/assets/fonts'));
    return stream;
});

// dist
gulp.task('dist', ['sass-prod', 'scripts', 'copy-assets'], function () {
// Copy HTML from src to dist
    gulp.src(basePaths.dev + '*.html')
        .pipe(gulp.dest(basePaths.dist + '/'));
});


gulp.task('default', ['dist', 'sass' /*, possible other tasks... */]);