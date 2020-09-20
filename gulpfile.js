// const gulp = require('gulp');
// const sass = require('gulp-sass'); // 載入 gulp-sass 套件
// const postcss = require('gulp-postcss'); // 載入 gulp-postcss 套件
// const autoprefixer = require('autoprefixer'); // 載入 autoprefixer 套件

// gulp.task('sass', () => {
//   return gulp
//     .src('./sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(postcss([autoprefixer()])) // 將編譯完成的 CSS 做 PostCSS 處理
//     .pipe(gulp.dest('./css/css'));
// });

const gulp = require('gulp');

gulp.task('sass', () => {
    const sass = require('gulp-sass'); // 載入 gulp-sass 套件
    const autoprefixer = require('gulp-autoprefixer');
    // const autoprefixer = require('autoprefixer');
    const sourcemaps = require('gulp-sourcemaps');
    const postcss = require('gulp-postcss');

    return gulp
        .src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        // .pipe(postcss([autoprefixer()]))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/css'));
});
