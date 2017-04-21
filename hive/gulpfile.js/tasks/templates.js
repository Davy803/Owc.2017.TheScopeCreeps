/*
 * HIVE
 * Copyright(c) 2016 - Horizontal Integration
 * MIT Licensed
 *
 *
 * templates.js
 * ============
 * The template.js task can be enabled by adding the following 
 * json snippet to the hive.config.json file.
 *
 * "templates": {
 *   "src": "html/templates",
 *   "dest": "templates",
 *   "watch" : "html/templates",
 *   "extensions": ["njx"]
 * }, 
 *
 */

'use strict';

/*
 * HIVE Definition
 *
 */

var hive       = require('../lib/hive');
var taskConfig = hive.config.tasks.templates;

if (!taskConfig) return;

/*
 * Module Definition
 *
 */

var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var path        = require('path');
var browserSync = require('browser-sync');

/*
 * Templates prototype
 *
 */

exports = module.exports = templatesTask;

/*
 * Templates variables
 * @private
 *
 */

var paths = {
  src: hive.getSrc(taskConfig.src, taskConfig.extensions),
  dest: hive.getDest(taskConfig.dest)
};

/*
 * Templates task
 * @public
 *
 */

function templatesTask() {
  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(config.settings.browsersync, browserSync.stream()));
};

/*
 * gulp interface
 * @special
 *
 */

gulp.task('templates', templatesTask);
