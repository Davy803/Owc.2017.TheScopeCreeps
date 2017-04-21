/*
 * HIVE
 * Copyright(c) 2016 - Horizontal Integration
 * MIT Licensed
 *
 */

'use strict';

/*
 * HIVE Definition
 *
 */

var hive         = require('../lib/hive');
var config       = hive.config;
var taskConfig   = config.tasks.javascript;
var manifest     = hive.manifest;
var staticTypes  = hive.staticTypes;

if (!taskConfig) return;

/*
 * Module Definition
 *
 */

var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var flatten     = require('gulp-flatten');
var path        = require('path');
var browserSync = require('browser-sync');
var merge       = require('merge2');
var _           = require('lodash');

/*
 * Javascript prototype
 *
 */

exports = module.exports = jsTask;

/*
 * Javascript variables
 * @private
 *
 */

var manifest = new hive.manifest({ 
  filePath: path.join(hive.config.root.dest, taskConfig.dest, taskConfig.manifest)
});

/*
 * Javascript task
 * @public
 *
 */

function jsTask() {
  return merge.apply(merge, streams.call(taskConfig))
    .on('finish', function() {
      if (!config.settings.concat) manifest.writeFile.call(manifest);
    });
};

/*
 * Parse through src packages and create streams
 * @return {object} gulp streams
 * @private
 *
 */

var streams = function() {
  var streams = [];

  _.forEach(this.src, function(){
    streams.push(stream.apply(this, Array.prototype.slice.call(arguments)));
  }.bind(this));

  return streams;
};

/*
 * Instantiate a JavaScript stream 
 * @param {object} stream src paths
 * @param {object} stream name
 * @return {object} gulp stream
 * @private
 *
 */

var stream = function(src, name) {
  var paths = {
    src: hive.getSrc(this.src[name], this.extensions),
    dest: (!config.settings.concat) ? hive.getDest(path.join(this.dest, name)) : hive.getDest(this.dest)
  };

  var destFile = name + '.' + this.extensions[0]; 

  return gulp.src(paths.src, { base: './' })
    .pipe(gulpif(!config.settings.concat, manifest.add(name)))
    .pipe(gulpif(config.settings.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(config.settings.concat, concat(destFile)))
    .pipe(gulpif(config.settings.sourcemaps, sourcemaps.write('.')))
    .pipe(gulpif(config.settings.flatten, flatten()))
    .pipe(gulpif(config.settings.uglify, uglify()))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(config.settings.browsersync, browserSync.stream()));
};

/*
 * Gulp interface
 * @special
 *
 */

gulp.task('javascript', jsTask);
