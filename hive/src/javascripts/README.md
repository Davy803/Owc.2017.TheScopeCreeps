# JavaScript Assets

- When running the **HIVE** `development` task, JavaScript assets will be bundled into files named with the corresponding object key found in `hive.config.json`. 
 
- When running the **HIVE** `integration` task, JavaScript assets will be copied to the destination folder specified in `hive.config.json`. All files will be copied to a folder named with the corresponding object key found in `hive.config.json`. At the root of the `javascript` folder, a `manifest.json` will be genereted indicating the order of assets.
 
- When running the **HIVE** `production` task, JavaScript assets will be bundled into files named with the corresponding object key found in `hive.config.json`.  JavaScript files will be minified and uglified accordingly.    

### Tasks and Files
```
gulpfile.js/tasks/browserSync
gulpfile.js/tasks/javascript
```

###Not using JavaScript?

Don't be silly, JavaScript is not optional.