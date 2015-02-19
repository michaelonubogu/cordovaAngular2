
module.exports = function (grunt) {

    grunt.initConfig({
        traceur: {
            custom: {
                files: {
                    'build/': ['js/**/*.js']
                }
            },
        }
    });


    grunt.loadNpmTasks('grunt-traceur');
}