var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src([
    "styles/materialz/material-elements.css",
    "styles/materialz/material-widgets.css",
    "styles/materialz/material-depth.css",
    "styles/layout.css",
    "styles/dialogs.css",
    "styles/color_picker.css"
  ])
    .pipe(concat('bundle3.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets'));
});

gulp.task('minify', function() {
  return gulp.src('template/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
    .pipe(gulp.dest('template_minify'));
});

gulp.task('uglify-js', function() {
  return gulp.src([
    "scripts/lib/material-touch.js",
    "scripts/lib/colorpicker.min.js",
    "scripts/lib/pep.min.js",
    "scripts/utils.js",
    "scripts/keyboard.js",
    "scripts/undo.js",
    "scripts/zoom.js",
    "scripts/tools/tool.js",
    "scripts/tools/drawing.js",
    "scripts/tools/shape.js",
    "scripts/tools/pencil.js",
    "scripts/tools/doodle.js",
    "scripts/tools/line.js",
    "scripts/tools/curve.js",
    "scripts/tools/rectangle.js",
    "scripts/tools/oval.js",
    "scripts/tools/eraser.js",
    "scripts/tools/floodfill.js",
    "scripts/tools/eyedropper.js",
    "scripts/tools/selection.js",
    "scripts/tools/text.js",
    "scripts/tools/pan.js",
    "scripts/pacman.js",
    "scripts/app.js"
  ])
    .pipe(concat('bundle3.min.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('assets'));
});

gulp.task('default', ['minify','uglify-js','minify-css']);
