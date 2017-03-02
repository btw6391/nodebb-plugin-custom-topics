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
    console.log("Topic created!");

    // data.topic, this is the topic that will be saved to the database
    // data.data, this is the data that is submitted from the client side
    // Now all you have to do is validate `data.myCustomField` and set it in data.topic.

    if (isValid(data.data.age)) {
        data.topic.age = data.data.age;
    }

    console.dir(data);

    callback(null, data);
};

function renderAdmin(req, res, next) {
	res.render('admin/custom-topics', {});
}

module.exports = plugin;
