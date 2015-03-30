module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      less: {
        files: ['<%= jshint.files %>'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('go', ['watch']);
};