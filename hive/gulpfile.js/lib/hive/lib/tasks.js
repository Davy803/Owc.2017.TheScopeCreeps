/*
 * HIVE
 * Copyright(c) 2016 - Horizontal Integration
 * MIT Licensed
 *
 */

'use strict';

/*
 * Module definition
 *
 */

var _ = require('lodash');

/*
 * Tasks prototype
 *
 */

var tasks = exports = module.exports = {};

/*
 * Task variables
 * @private
 *
 */

var parallelTasks = {
  assets: ['fonts', 'iconFont', 'svgSprite', 'images', 'static'],
  code:   ['html', 'javascript', 'css']
};

var filteredTasks;

/*
 * Get the enabled tasks
 * @public
 *
 */

tasks.getEnabledTasks = function() {
  var filteredTasks = this.getFilteredTasks();

  var sequentialTasks = {
    dev:   ['clean', filteredTasks.assets, filteredTasks.code, ['watch', 'browserSync']],
    int:   ['clean', filteredTasks.assets, filteredTasks.code],
    prod:  ['clean', filteredTasks.assets, filteredTasks.code, 'server', 'sizereport']
  };

  return sequentialTasks[this.app.config.env];
};

/*
 * Get the filtered tasks
 * @public
 *
 */

tasks.getFilteredTasks = function() {
  return _.mapValues(parallelTasks, function(tasks) {
    return _.compact(tasks.map(function(task) { 
      if (!exists(this.app.config.tasks[task])) return false;
      else return task;  
    }.bind(this)));    
  }.bind(this));
}

/*
 * Check if value is true || truthy
 * @private 
 *
 */

function exists(value) {
  return !!value;
}
