/*
 * grunt-gitdown
 * https://github.com/mediremi/grunt-gitdown
 *
 * Copyright (c) 2014 Médi-Rémi Hashim
 * Licensed under the GPL-3.0 license.
 */

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				"Gruntfile.js",
				"tasks/*.js",
				"<%= nodeunit.tests %>"
			],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		// Before generating any new files, remove any previously-created files
		clean: {
			tests: ["tmp"]
		},
		// Configuration to be run (and then tested)
		gitdown: {
			default_options: {
				files: {
					"tmp/default_options": "test/fixtures/include.md"
				}
			}
		},
		// Unit tests
		nodeunit: {
			tests: ["test/*_test.js"]
		}
	})

	// Load this plugin's tasks
	grunt.loadTasks("tasks")

	grunt.loadNpmTasks("grunt-contrib-jshint")
	grunt.loadNpmTasks("grunt-contrib-clean")
	grunt.loadNpmTasks("grunt-contrib-nodeunit")

	grunt.registerTask("test", ["clean", "gitdown", "nodeunit"])
	grunt.registerTask("lint", ["jshint"])

	// By default, lint and run all tests.
	grunt.registerTask("default", ["jshint", "test"])
}
