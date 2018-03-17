var gulp = require("gulp");
var fileinclude = require("gulp-file-include");
var rename = require("gulp-rename");
var minify = require("gulp-minify");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task("compilescss", function() {
	return gulp
		.src(["./src/style.scss"])
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("./temporary/"), {overwrite: true});
});

gulp.task("minifyhtml", function() {
	return gulp
		.src(["./src/template.html"])
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename("template.min.html"))
		.pipe(gulp.dest("./temporary/"), {overwrite: true});
})

gulp.task("build", ["compilescss", "minifyhtml"], function() {
	return gulp
		.src(["./src/main.js"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file"
			})
		)
		.pipe(rename("gh-widget-bar.js"))
		.pipe(gulp.dest("./build/"), {overwrite: true})
		.pipe(
			minify({
				ext: {
					src: ".js",
					min: ".min.js"
				}
			})
		)
		.pipe(gulp.dest("./build/"), {overwrite: true});
});
