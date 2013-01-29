module.exports = function(grunt) {
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! localPad - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://janhancic.github.com/localPad/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Jan Hančič; Licensed MIT */'
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: [ 'src/pads.js', 'src/main.js' ],
        dest: 'localpad.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'localpad.min.js'
      }
    },
    watch: {
      files: [ 'src/pads.js', 'src/main.js' ],
      tasks: 'qunit concat min'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'qunit concat min');
};