var gulp = require('gulp');
var terser = require("gulp-terser");
var concat = require("gulp-concat");

gulp.task("scripts", function () {
    return gulp.src(['ils-analytics/google-analytics.js'])
        .pipe(terser())
        .pipe(concat("google-analytics.min.js"))
        .pipe(gulp.dest("ils-analytics/"));
});

gulp.task("ils-google-analytics", gulp.series("scripts"));