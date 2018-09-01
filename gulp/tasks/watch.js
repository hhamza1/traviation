var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSynch = require('browser-sync').create();

gulp.task('html', function(done){
    browserSynch.reload();
    done();
});

gulp.task('watch', function(){

    browserSynch.init({
        notify: false,
        server:{
            baseDir: "app"
        }
    });

    gulp.watch('./app/index.html', gulp.series('html'));
    gulp.watch('./app/assets/scripts/**/*js', gulp.series('scripts', 'scriptsRefresh'));
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
});


gulp.task('cssInject', gulp.series('styles', function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSynch.stream());
})); 

gulp.task('scriptsRefresh', function(){
    browserSynch.reload();
})