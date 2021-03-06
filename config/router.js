'use strict';
var fs = require('fs');

const mapApi = (routePath, app = null, currentLevel = 0, maxLevel = 1) => {
	if (currentLevel > maxLevel) {
		return;
	} else {
		fs.readdirSync(routePath).forEach((file) => {
			var filepath = routePath + '/' + file;
			var stat = fs.statSync(filepath);
			if (stat.isDirectory()) {
				mapApi(filepath, app, currentLevel + 1, maxLevel);
			} else {
				if (file == 'index.js') {
					routePath = '.' + routePath;
					app.use(routePath.substring(9), require(routePath));
				}
			}
		});
	}
};
const mapWeb = (routePath, app = null) => {
	fs.readdirSync(routePath).forEach((file) => {
		var filepath = routePath + '/' + file;
		var stat = fs.statSync(filepath);
		if (stat.isDirectory()) {
			mapWeb(filepath, app);
		} else {
			if (file == 'index.js') {
				routePath = '.' + routePath;
				app.use('/', require(routePath));
			}
		}
	});
};

module.exports = {
	mapApi,
	mapWeb
};
