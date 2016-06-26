/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-webui-popover' ,

  included: function(app) {
    this._super.included(app);

    app.import('vendor/jquery.webui-popover.js');

    app.import('vendor/jquery.webui-popover.css');
  }
};
