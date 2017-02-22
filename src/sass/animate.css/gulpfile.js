// Utilities
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var fs = require('fs');

// Gulp
var gulp = require('gulp');

// Gulp plugins
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var header = require('gulp-header');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

// Misc/global vars
var pkg = JSON.parse(fs.readFileSync('../../../node_modules/animate.css/package.json'));
var activatedAnimations = activateAnimations();

// Task options
var opts = {
  destPath: './',
  concatName: 'animate.css',

  autoprefixer: {
    browsers: ['last 2 versions'],
    cascade: false
  },

  minRename: {
    suffix: '.min'
  },

  banner: [
    '@charset "UTF-8";\n',
    '/*!',
    ' * <%= name %> -<%= homepage %>',
    ' * Version - <%= version %>',
    ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
    ' *',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= author.name %>',
    ' */\n\n'
  ].join('\n')
};

// ----------------------------
// Gulp task definitions
// ----------------------------

gulp.task('default', function() {
  runSequence('createCSS', 'addHeader', 'rename', 'remove');
});

gulp.task('createCSS', function() {
  return gulp.src(activatedAnimations)
    .pipe(concat(opts.concatName))
    .pipe(postcss([
      autoprefixer(opts.autoprefixer)
    ]))
    .pipe(gulp.dest(opts.destPath))
    .pipe(postcss([
      cssnano({reduceIdents: {keyframes: false}})
    ]))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest(opts.destPath));
});

gulp.task('addHeader', function() {
  return gulp.src('*.css')
    .pipe(header(opts.banner, pkg))
    .pipe(gulp.dest(opts.destPath));
});

gulp.task('rename', function() {
  // rename via string
  gulp.src("animate.css")
      .pipe(rename("animate.scss"))
      .pipe(gulp.dest("./")); // ./dist/main/text/ciao/goodbye.md
});
gulp.task('remove', function() {

  return gulp.src(['animate.css','animate.min.css'], {read: false})
      .pipe(clean());
});

// ----------------------------
// Helpers/functions
// ----------------------------

// Read the config file and return an array of the animations to be activated
function activateAnimations() {
  var categories = JSON.parse(fs.readFileSync('animate-config.json')),
    category, files, file,
    target = [ '../../../node_modules/animate.css/source/_base.css' ],
    count = 0;

  for (category in categories) {
    if (categories.hasOwnProperty(category)) {
      files = categories[category];

      for (var i = 0; i < files.length; ++i) {
        target.push('../../../node_modules/animate.css/source/' + category + '/' + files[i] + '.css');
        count += 1;
      }
    }
  }

  if (!count) {
    gutil.log('No animations activated.');
  } else {
    gutil.log(count + (count > 1 ? ' animations' : ' animation') + ' activated.');
  }

  return target;
}