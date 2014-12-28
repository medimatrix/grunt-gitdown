# grunt-gitdown

> Run gitdown using grunt

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-gitdown --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gitdown');
```

## The "gitdown" task

### Overview
In your project's Gruntfile, add a section named `gitdown` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gitdown: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

See [gitdown's documentation](https://github.com/gajus/gitdown#usage-parser-configuration).

### Usage Example

```js
grunt.initConfig({
  gitdown: {
    files: {
      'README.md': '.gitdown/README.md'
    }
  }
})
```

## Contributing
Follow the [style guide](style-guide.md).

Add unit tests for any new or changed functionality.

Submit a pull request.
