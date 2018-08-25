var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested');
    cssImport = require('postcss-import');

gulp.task('default', function(done){
    console.log("You are using gulp");
    done();
});

gulp.task('html', function(){
    console.log('This is the html gulp task');
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport ,cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(done){
    gulp.watch('./app/index.html', gulp.series('html'));
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
    done();
});