var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested');
    cssImport = require('postcss-import'),
    browserSynch = require('browser-sync').create();

gulp.task('default', function(done){
    console.log("You are using gulp");
});



gulp.task('html', function(done){
    browserSynch.reload();
    done();
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport ,cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

    browserSynch.init({
        notify: false,
        server:{
            baseDir: "app"
        }
    });

    gulp.watch('./app/index.html', gulp.series('html'));
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
});


gulp.task('cssInject', gulp.series('styles', function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSynch.stream());
})); 