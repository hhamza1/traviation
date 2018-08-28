var gulp =  require('gulp'),
    sprite = require('gulp-svg-sprite'); 

var config = {
    mode: {
        css:{
            render: {
                css:{
                    template:'./gulp/templates/sprite.css'
                }
            }
        }
    }
}



gulp.task('createSprite', function(done){
    gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(sprite(config))    
    .pipe(gulp.dest('./app/temp'));
    done();
});