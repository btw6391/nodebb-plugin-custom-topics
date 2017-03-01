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

plugin.buildComposer = function(data, callback) {
    console.log("Composer built.");
    console.dir(data);

    callback(null, data);
}

plugin.newTopic = function(data) {
    console.log("New topic.");
    console.dir(data);
}

function renderAdmin(req, res, next) {
	res.render('admin/custom-topics');
}

module.exports = plugin;
