#!/usr/bin/env node

var packagePlugins = require('../package.json').cordovaPlugins;
require('shelljs/global');

packagePlugins.filter(function(plugin) {
  return typeof plugin === 'string';
}).forEach(function(plugin) {
  exec('cordova plugin add ' + plugin);
});
