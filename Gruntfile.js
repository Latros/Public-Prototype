module.exports = function (grunt) {

  // JS imports
  var JSSource = ['public/bootstrap/**/*.js', 'public/components/**/*.js', 'public/models/**/*.js', 'public/services/**/*.js', 'public/states/**/*.js'];
  var JSDependencies = ['public/dependencies/angular/angular.js', 'public/dependencies/angular-ui-router/release/angular-ui-router.js', 'public/dependencies/jquery/dist/jquery.js', 'public/dependencies/materialize/dist/js/materialize.js', 'public/dependencies/underscore/underscore-min.js', 'public/dependencies/masonry/dist/masonry.pkgd.min.js'];

  // CSS Imports
  var CSSSource = ['public/**/*.less', '!public/dependencies/**/*.less'];
  var CSSDependencies = ['public/dependencies/materialize/dist/css/materialize.css'];

  grunt.initConfig({

    watch: {
      less: {
        files: CSSSource,
        tasks: ['less']
      },
      js: {
        files: JSSource,
        tasks: ['concat:dist']
      }
    },

    less: {
      development: {
        files: {
          'public/concatenated/styles.css': ['public/css/styles.less']
        }
      }
    },

    concat: {
      options: {
        separator: '\n\n// --------- Next import... ---------\n\n',
      },
      dist: {
        src: JSSource,
        dest: 'public/concatenated/scripts.js'
      },
      jsDependencies: {
        src: JSDependencies,
        dest: 'public/concatenated/dependencies.js'
      },
      cssDependencies: {
        src: CSSDependencies,
        dest: 'public/concatenated/dependencies.css'
      }
    },


    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          livereload: false
        }
      }
    },

    copy: {
      roboto: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: 'public/dependencies/materialize/dist/font/roboto/**/*.*',
        dest: 'public/font/roboto/'
      },
      material: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: 'public/dependencies/materialize/dist/font/material-design-icons/**/*.*',
        dest: 'public/font/material-design-icons/'
      },
      underscoreMap: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: 'public/dependencies/underscore/underscore-min.map',
        dest: 'public/concatenated/'
      }
    },

    clean: ['public/font/**/*.*', 'public/concatenated/**/*.*']

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('go', ['clean', 'copy', 'less', 'concat', 'connect', 'watch']);
};