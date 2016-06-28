/*
 * grunt-gitdown
 * https://github.com/mediremi/grunt-gitdown
 *
 * Copyright (c) 2016 Médi-Rémi Hashim
 * Licensed under the GPL-3.0 license
 */

var path = require("path")
var fse = require("fs-extra")
var Gitdown = require("gitdown")

module.exports = function(grunt) {
	grunt.registerMultiTask("gitdown", "Run gitdown using grunt", function() {
		var done = this.async()
		var options = this.options()

		// Iterate over all specified file groups
		this.files.forEach(function(f) {
			var filepath = path.join(process.cwd(), f.src[0])
			var gitdown = Gitdown.readFile(filepath)

			gitdown.logger = {
				info: grunt.log.writeln,
				warn: grunt.log.warn
			}

			gitdown.setConfig(options)

			fse.ensureFileSync(f.dest)

			gitdown.writeFile(f.dest).then(function() {
				grunt.log.writeln(`File ${f.dest} created.`)
				done()
			}).catch(function(err) {
				grunt.log.warn(err)
				done(false)
			})
		})
	})
}
