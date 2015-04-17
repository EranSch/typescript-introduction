var gulp = require('gulp');
var notify = require('gulp-notify');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var tsify = require('tsify');

var jsConfig = {
  publicPath : __dirname,
  source: {
    path: __dirname,
    main: 'app.ts',
    result: 'app.js'
  }
};

gulp.task('compile-js', function (){
  var bundler = browserify(
    {
      basedir: jsConfig.source.path,
      cache: {},
      packageCache: {}
    })
    .add(jsConfig.source.path + '/' + jsConfig.source.main)
    .plugin(tsify);

  bundler = watchify(bundler);

  var bundle = function(bundler){
    bundler.bundle()
      .pipe(source(jsConfig.source.result))
      .pipe(gulp.dest(jsConfig.publicPath))
      .pipe(notify('Bundle re-bundled.'));
  };

  bundler.on('update', function(){
    bundle(bundler);
  });

  bundle(bundler);
});
