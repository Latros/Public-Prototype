module.exports = function (grunt) {
  // Force verbosity!
  grunt.option('verbose', true),
    // Project configuration.
    grunt.initConfig({
      // Import project info from package.json to be DRY
      pkg: grunt.file.readJSON('package.json'),


      // Setting up the uglify task
      // --------------------------
      // Concatenates and minifies our JavaScript into one file
      // and dumps that file into the public directory...
      //
      // ---> (.tmp/assets/scripts/)
      uglify: {

        // Uglify options
        options: {
          banner: '/* Concatenated and minified from app/assets/\nLast date compiled: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },

        // JS target set
        js: {
          src: ['app/assets/scripts/**/*.js'],
          dest: '.tmp/assets/scripts/main.min.js'
        }
      },
      // <--- end uglify task --->


      // // Setting up the imagemin task
      // // ----------------------------
      // // Minifies our images and dumps them into the public
      // // directory
      // //
      // // ---> (.tmp/assets/images/)
      // imagemin: {
      //   // Image target set
      //   images: {
      //     options: {
      //       optimizationLevel: 3
      //     },
      //     files: [{
      //       expand: true,
      //       cwd: 'app/assets/images/',
      //       src: ['**/*.{png,jpg,gif}'],
      //       dest: '.tmp/assets/images/'
      //     }]
      //   }
      // },
      // // <--- end imagemin task --->


      // Setting up the less task
      // ------------------------
      // Compiles and minifies our LESS and dumps those files
      // into the public directory...
      //
      // ---> (.tmp/assets/styles/)
      less: {
        development: {
          options: {
            cleancss: true,
            report: 'gzip',
            ieCompat: true
          },
          files: {
            ".tmp/assets/styles/styles.css": "app/assets/styles/styles.less"
          }
        }
      },
      // <--- end less task --->


      // Setting up the first watch task
      // --------------------------
      // Declare which files to watch, and declare what tasks
      // to run when those files are detected to have changed.
      watch: {
        options: {
          livereload: true
        },
        less: {
          files: ['app/assets/styles/*'],
          tasks: ['less'],
          options: {
            spawn: false
          }
        },
        // js: {
        //   files: ['app/assets/scripts/*'],
        //   tasks: ['uglify'],
        //   options: {
        //     spawn: false
        //   }
        // },
        // html: {
        //   files: ['app/index.html'],
        //   tasks: ['htmlmin'],
        //   options: {
        //     spawn: false
        //   }
        // }
      },
      // <--- end firstwatch task --->

      // Setting up the connect task
      // ---------------------------
      // Declare site info and base directory info for when
      // the webapp launches. Running grunt connect launches
      // an http server at the base directory defined (and
      // at the port / protocol defined, etc).
      connect: {
        server: {
          options: {
            port: 9001,
            protocol: 'http',
            base: '.tmp',
            debug: true,
            open: {
              target: 'http://localhost:9001',
            }
          }
        }
      },
      // <--- end connect task --->


      // // Setting up the HTML Minification task
      // // -------------------------------------
      // // Minifies our HTML and dumps that/those file(s) into
      // // the public directory...
      // //
      // // ---> (.tmp/)
      // htmlmin: {
      //   views: {
      //     options: {
      //       removeComments: true,
      //       collapseWhitespace: true,
      //       removeCommentsFromCDATA: true,
      //       removeCDATASectionsFromCDATA: true,
      //       removeEmptyAttributes: true
      //     },
      //     files: {
      //       ".tmp/index.html": "app/index.html"
      //     }
      //   }
      // },
      // // <--- end htmlmin task --->


      // // Setting up the copy task
      // // -------------------------------------
      // // Copies library files from the bower components directory
      // // into their appropriate location in the public directory
      // //
      // // ---> (.tmp/assets/lib/)
      // copy: {
      //   js_libs: {
      //     expand: true,
      //     flatten: true,
      //     src: ['bower_components/**/jquery.min.js',
      //       // 'bower_components/**/bootstrap.min.js',
      //       'bower_components/**/modernizr.js'
      //     ],
      //     dest: '.tmp/assets/scripts/lib/'
      //   },
      //   css_libs: {
      //     expand: true,
      //     flatten: true,
      //     src: ['bower_components/**/bootstrap.min.css'],
      //     dest: '.tmp/assets/styles/lib/'
      //   },
      // },
      // // <--- end copy task --->

      // clean: {
      //   build: {
      //     src: [".tmp/"]
      //   }
      // }


    });

  // For all tasks above, load the plugin that provides those tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register task aliases to run multiple tasks in one command
  grunt.registerTask('build', ['clean', 'htmlmin', 'less', 'imagemin', 'uglify', 'copy']);
  grunt.registerTask('go', ['build', 'connect', 'watch']);
};