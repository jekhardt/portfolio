module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      hero: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2350,
            suffix: '_large_2x',
            quality: 30
          },{
            width: 1175,
            suffix: '_large_1x',
            quality: 60
          },{
            width: 1600,
            suffix: '_medium_2x',
            quality: 30
          },{
            width: 800,
            suffix: '_medium_1x',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['hero.{gif,jpg,png}'],
          cwd: 'images_src/hero/',
          dest: 'images/'
        }],
      },
      hero_small: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1100,
            suffix: '_2x',
            quality: 30
          },{
            width: 550,
            suffix: '_1x',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['hero-small.{gif,jpg,png}'],
          cwd: 'images_src/hero/',
          dest: 'images/'
        }],
      },
      featured: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1400,
            suffix: '_large_2x',
            quality: 30
          },{
            width: 700,
            suffix: '_large_1x',
            quality: 60
          },{
            width: 700,
            suffix: '_medium_2x',
            quality: 30
          },{
            width: 350,
            suffix: '_medium_1x',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/featured/',
          dest: 'images/'
        }],
      }
    },
    
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['images_src/fixed/*.{gif,jpg,png}'],
          dest: 'images/',
          flatten: true,
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
