var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('Less', function() {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
gulp.task('default', ['Less']);