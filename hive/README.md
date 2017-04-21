#![HIVE: Horizontal Integration View Environment](gulpfile.js/lib/helper/hive-logo.jpg)

The Horizontal Integration View Environment is a developer platform that encourages a consistent approach to front-end development. The **HIVE** ecosystem includes a blend of popular frontend technologies along with a [Gulp](http://gulpjs.com/) build workflow for generating your projects.

---

## Global Dependencies 
**HIVE** is a powerful tool that is built on top of other powerful tools.  In order for **HIVE** to work, you will need the following global dependencies:

1. **Node:** We recommend using [NVM](https://github.com/creationix/nvm) to manage your node versions. HIVE has been tested on Node `0.12.x` - `5.9.0`.  
> **Note:** As of this writing, HIVE is not currently supported on Node `6.x.x`

2. **Sass:** [Sass](http://sass-lang.com/) is an extension of CSS that adds variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.
3. **Gulp:** [Gulp](http://gulpjs.com/) is a task/build runner for development teams intended to automate and enhance your workflow.

## Installation
#### Clone the HIVE repository:

```bash
git clone https://[USERNAME]@bitbucket.org/hi-fed/hive.git MyApp
cd MyApp
rm -rf .git
```
> The **HIVE** repository is stored on the Horizontal Integration BitBucket [account](https://bitbucket.org/horizontal/hive).  You will need to replace [USERNAME] with your own username and then enter your password credentials.

#### Install your project dependencies:
```bash
npm install
```
### Alternate Installation: HIVE Launcher
**HIVE** Launcher is an easily installable bash script that is intended to automate the **HIVE** installation process and to further enhance your productivity.  Please click [here](https://bitbucket.org/horizontal/hive-launcher) for more details.

## Usage
#### Build Development
This runs the default gulp task passing the <code>--env dev</code> argument, which will compile site assets uncompressed with source maps. [BrowserSync](http://www.browsersync.io/) will serve up files to `localhost:3000` and will stream live changes to the code and assets to all connected browsers. 

```bash
npm run development
```
Alternately, you can call the Gulp task directly:

```
gulp --env dev
```

#### Build Integration
This runs the default gulp task passing the <code>--env int</code> argument, which passes all uncompiled project assets to a package folder. The intent of this task is to pass backend teams fully un-compiled / pre-transpiled project asssets for integration with sitecore.

```bash
npm run integration
```
Alternately, you can call the Gulp task directly:

```
gulp --env int
```

#### Build Production
This runs the default gulp task passing the <code>--env prod</code> argument, which compiles all of your assets into production quality code. An Express production server will serve up files to `localhost:8000`.

```bash
npm run production
```
Alternately, you can call the Gulp task directly:

```
gulp --env prod
```

#### Help
This runs the gulp help task providing information for building your project.

```bash
npm run production
```
Alternately, you can call the Gulp task directly:

```
gulp help
```

### Why npm scripts? 
NPM scripts add ./node_modules/bin to the path when run, using the packages version installed with this project, rather than a globally installed ones. Never `npm install -g` and get into mis-matched version issues again. These scripts are defined in the `scripts` property of `package.json`.

## Installed Technologies
The following technoloiges are downloaded directly from NPM when you install the **HIVE** dependencies:

1. **[Bootstrap Sass](https://github.com/twbs/bootstrap-sass):** Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

2. **[Font Awesome](http://fontawesome.io/):** Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.
3. **[HTML5shiv](https://github.com/aFarkas/html5shiv):** The defacto way to enable use of HTML5 elements in legacy browsers.
4. **[jQuery](https://jquery.com/):** jQuery makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers,
5. **[jQuery Validate](https://jqueryvalidation.org/):** Make client-side form validation easy. 
6. **[jQuery Validate Unobtrusive](https://github.com/aspnet/jquery-validation-unobtrusive):** Add-on to jQuery Validation to enable unobtrusive validation options in data-* attributes.
7. **[Nunjucks Templating](https://mozilla.github.io/nunjucks/):** A powerful templating language with block inheritance, auto-escaping, macros, asynchronous control, and more.
8. **[Picturefill](https://github.com/scottjehl/picturefill):** A responsive image polyfill for `picture`, `srcset`, `sizes`, and more.
9. **[Slick Carousel](http://kenwheeler.github.io/slick/)** The last carousel you'll ever need.
    
> **Note:** The folder `src/stylesheets/overrides` has been included to allow developers to override default package styling.  Currently, there are overrides for `Bootstrap Sass` and `Slick Carousel`.  This allows you to make updates to NPM dependencies without editing NPM packages directly. 

## Configuration
Directory and top level settings are convienently exposed in `./hive.config.json`. Use this file to update paths to match the directory structure of your project, and to adjust task options.

All task configuration objects have `src` and `dest` directories specfied. These are relative to `root.src` and `root.dest` respectively. Each configuration also has an extensions array. This is used for file watching, and file deleting/replacing.

**If there is a feature you do not wish to use on your project, simply delete the configuration, and the task will be skipped.**

## Asset Task Details
A `README.md` with details about each asset task are available in their respective folders in the `src` directory:

- [JavaScript](src/javascripts)
- [Stylesheets](src/stylesheets)
- [HTML](src/html)
- [Fonts](src/fonts)
- [Images](src/images)
- [Icon Font](src/icons#iconfont-task)
- [SVG Sprite](src/icons#svg-sprite-task)
- [Static Files (favicons, app icons, etc.)](src/static)

## Features Wishlist
The following features have been added to the **Hive** roadmap for consideration:

- Full Feature Style Guide (see [Huge Styleguide](https://hugeinc.github.io/styleguide/) as an example)
- [TypeScript](http://www.typescriptlang.org/) Support 
- [ES6 JavaScript](http://es6-features.org/) / [Babel](https://babeljs.io/) Transpilation Support
- [Karma](http://karma-runner.github.io/0.12/index.html) JavaScript Testing

## Special Thanks
Special thanks to [gulp-starter](https://github.com/vigetlabs/gulp-starter) as the inspiration for **HIVE**.

Original Blog Post: https://www.viget.com/articles/gulp-browserify-starter-faq

***
