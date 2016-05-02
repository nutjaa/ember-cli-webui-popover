/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-webui-popover' ,

  included: function(app) {
    this._super.included(app);

    // Use config to determine whether Font Awesome is imported into consuming app
   	app.import(app.bowerDirectory +  '/webui-popover/dist/jquery.webui-popover.min.js');

    app.import(app.bowerDirectory + '/webui-popover/dist/jquery.webui-popover.min.css');
  }
};
