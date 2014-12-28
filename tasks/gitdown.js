/*
 * grunt-gitdown
 * https://github.com/mediremi/grunt-gitdown
 *
 * Copyright (c) 2014 Médi-Rémi Hashim
 * Licensed under the GPL-3.0 license
 */

var fse = require("fs-extra")
var Gitdown = require("gitdown")

// We have to do some weird stuff because gitdown uses Objec.defineProperty
//  on gitdown.config to validate stuff
function setConfig(gitdown, options) {
	var config = gitdown.config

	for (var option in options) {
		config[option] = options[option]
	}

	gitdown.config = config
}

module.exports = function(grunt) {
	grunt.registerMultiTask("gitdown", "Run gitdown using grunt", function() {
		// Merge task-specific and/or target-specific options with these defaults
		var options = this.options({})

		// Iterate over all specified file groups
		this.files.forEach(function(f) {
			var filepath = f.src[0]
			var gitdown = Gitdown.read(filepath)

			gitdown.logger = {
				info: grunt.log.writeln,
				warn: grunt.log.warn
			}

			setConfig(gitdown, options)

			fse.ensureFileSync(f.dest)

			gitdown.write(f.dest).then(function() {
				// Success!
				grunt.log.writeln("File '" + f.dest + "' created.")
			}).catch(function(err) {
				grunt.log.warn(err)
			})
		})
	})
}
