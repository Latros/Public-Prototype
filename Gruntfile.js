module.exports = function (grunt) {

  grunt.initConfig({

    watch: {
      less: {
        files: ['public/css/**/*.less'],
        tasks: ['less']
      },
      js: {
        files: ['public/js/prototype/**/*.js'],
        tasks: ['concat']
      }
    },

    less: {
      development: {
        files: {
          "public/css/styles.css": "public/css/**/*.less"
        }
      }
    },

    concat: {
      options: {
        separator: '\n\n// --------- Next import... ---------\n\n',
      },
      dist: {
        src: ['public/js/prototype/**/*.js'],
        dest: 'public/js/scripts.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('go', ['watch']);
};