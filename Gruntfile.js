module.exports = function (grunt) {

  grunt.initConfig({

    watch: {
      less: {
        files: ['public/css/**/*.less'],
        tasks: ['less']
      },
      js: {
        files: ['public/js/**/*.js'],
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
        src: ['public/js/init.js', 'public/js/**/*.js'],
        dest: 'public/concatenated/scripts.js'
      },
      jsDependencies: {
        src: ['public/dependencies/angular/angular.js',
          'public/dependencies/angular-ui-router/release/angular-ui-router.js',
          'public/dependencies/jquery/dist/jquery.js',
          'public/dependencies/materialize/dist/js/materialize.js',
          'public/dependencies/underscore/underscore-min.js',
          'public/dependencies/masonry/dist/masonry.pkgd.min.js'
        ],
        dest: 'public/concatenated/dependencies.js'
      },
      cssDependencies: {
        src: ['public/dependencies/materialize/dist/css/materialize.css'],
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

    clean: ['public/js/scripts.js', 'public/css/styles.css', 'public/font/**/*.*', 'public/concatenated/**/*.*']

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('go', ['clean', 'copy', 'less', 'concat', 'connect', 'watch']);
};