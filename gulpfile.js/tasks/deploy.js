var config = require('../config')
var gulp = require('gulp')
var path = require('path')
var rsync = require('gulp-rsync')

var paths = {
  src: path.join(config.root.src),
  dest: path.join(config.root.dest)
}
var deployTask = function() {
  gulp.task('deploy', function() {

    // Dirs and Files to sync
    rsyncPaths = [paths.dest];

    // Default options for rsync
    rsyncConf = {
      progress: true,
      incremental: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.git*','node_modules'],
    };
    
    rsyncConf.root = 'public/';
    rsyncConf.hostname = '104.131.160.160'; // hostname
    rsyncConf.username = 'root'; // ssh username
    rsyncConf.destination = '/var/www/html/dontsaycursewords.com/'; // path where uploaded files go

    // Use gulp-rsync to sync the files 
    return gulp.src(rsyncPaths)
      .pipe(rsync(rsyncConf));

  });
}

gulp.task('deploy', ['production'], deployTask)
module.exports = deployTask