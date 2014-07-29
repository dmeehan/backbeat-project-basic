var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('TASKNAME', function() {
    return gulp.src(mainBowerFiles(/* options */))
        .pipe(gulp.dest('libs'))
});