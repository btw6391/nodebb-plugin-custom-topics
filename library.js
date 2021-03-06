"use strict";

var user = module.parent.require('./user'),
    db = module.parent.require('./database'),
    plugin = {};

plugin.init = function(params, callback) {
	var app = params.router,
		middleware = params.middleware,
		controllers = params.controllers;
		
	app.get('/admin/custom-topics', middleware.admin.buildHeader, renderAdmin);
	app.get('/api/admin/custom-topics', renderAdmin);

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/custom-topics',
		icon: 'fa-tint',
		name: 'Custom Topics'
	});

	callback(null, header);
};

plugin.onTopicCreate = function(data, callback) {
    // data.topic, this is the topic that will be saved to the database
    // data.data, this is the data that is submitted from the client side
    // Now all you have to do is validate `data.myCustomField` and set it in data.topic.

    if (data.data.formData) {
        data.topic.formData = data.data.formData;
    }

    var imageIndex = data.data.content.search(/!\[/);

    if (imageIndex != -1) {
        data.data.content = data.data.content.insert(imageIndex, `
`);
    }

    if (data.data.message) {
        data.data.content = data.data.message + data.data.content;
    }

    callback(null, data);
};

String.prototype.insert = function (index, string) {
	if (index > 0) {
		return this.substring(0, index) + string + this.substring(index, this.length);
	}
  	else {
    	return string + this;
  	}
};

function renderAdmin(req, res, next) {
	res.render('admin/custom-topics', {});
}

module.exports = plugin;
