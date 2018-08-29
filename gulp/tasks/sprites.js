var gulp =  require('gulp'),
    sprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'); 

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



gulp.task('createSprite', function(error)
    {
        return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(sprite(config))    
        .pipe(gulp.dest('./app/temp'));
    });

gulp.task('copySpriteCSS', function(){
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});