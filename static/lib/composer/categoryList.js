
'use strict';

/*globals define, socket, app*/

define('composer/categoryList', ['categorySelector'], function(categorySelector) {
	var categoryList = {};

	categoryList.init = function(postContainer, postData) {
		var listContainer = postContainer.find('.category-list-container');
		if (!listContainer.length) {
			return;
		}

		postContainer.on('action:composer.resize', function () {
			toggleDropDirection(postContainer);
		});

		socket.emit('categories.getCategoriesByPrivilege', 'topics:create', function(err, categories) {
			if (err) {
				return app.alertError(err.message);
			}
			var categoriesData = [];

			categories = categories.filter(function(category) {
				return category && !category.link;
			});

			var categoryMap = {};
			categories.forEach(function(category) {
				category.children = [];
				categoryMap[category.cid] = category;
			});

			categories.forEach(function(category) {
				if (category.parent) {
					var cid = category.parent.cid;
					if (!categoryMap[cid]) {
						categoryMap[cid] = category.parent;
						categoryMap[cid].disabledClass = true;
					}
					categoryMap[cid].children = categoryMap[cid].children || [];
					categoryMap[cid].children.push(category);
				}
			});

			var rootCategories = [];
			Object.keys(categoryMap).forEach(function(key) {
				if (!categoryMap[key].parent) {
					rootCategories.push(categoryMap[key]);
				}
			});
			rootCategories = rootCategories.sort(function(a, b) {
				return a.order - b.order;
			});

			rootCategories.forEach(function (category) {
				recursive(category, categoriesData, '', postData.cid);
			});

			app.parseAndTranslate('partials/category-selector', {
				categories: categoriesData,
				pullRight: true
			}, function (html) {
				listContainer.append(html);

				var found = listContainer.find('[component="category-selector"]');
				
				categorySelector.init(found, function (selectedCategory) {
					if (postData.hasOwnProperty('cid')) {
						console.log("Has CID property!");
						changeCategory(postContainer, postData, selectedCategory.cid);
					}

					$('[tabindex=' + (parseInt($(this).attr('tabindex'), 10) + 1) + ']').trigger('focus');

					console.log("Working!");
				});

				if (postData.cid) {
					categorySelector.selectCategory(postData.cid);
				}

				var selectedCategory = categorySelector.getSelectedCategory();

				$('.category-name').translateText(selectedCategory ? selectedCategory.name : '[[modules:composer.select_category]]');
				$('.category-selector').find('li[data-cid="' + postData.cid + '"]').addClass('active');

				toggleDropDirection(postContainer);
			});
		});


		$('.category-selector').on('click', 'li', function() {
			$('.category-name').text($(this).text());
			$('.category-selector').removeClass('open');
			$('.category-selector li').removeClass('active');
			$(this).addClass('active');
			var selectedCid = $(this).attr('data-cid');
			categorySelector.selectCategory(selectedCid);
			if (postData.hasOwnProperty('cid')) {
				changeCategory(postContainer, postData, selectedCid);
			}
		});
	};

	function toggleDropDirection(postContainer) {
		postContainer.find('.category-list-container [component="category-selector"]').toggleClass('dropup', postContainer.outerHeight() < $(window).height() / 2);
	}

	categoryList.getSelectedCid = function () {
		var selectedCategory = categorySelector.getSelectedCategory();
		return selectedCategory ? selectedCategory.cid : 0;
	};

	function changeCategory(postContainer, postData, cid) {
		console.log(cid);

		postData.cid = cid;
		require(['composer/tags'], function (tags) {
			tags.onChangeCategory(postContainer, postData, cid);
		});

		console.log("Category changed.");
	}

	function recursive(category, categoriesData, level, cid) {
		if (category.link) {
			return;
		}

		var bullet = level ? '&bull; ' : '';

		if (cid >= 19 && cid <= 30) {
			if (category.cid >= 19 && category.cid <= 30) {
				category.value = category.cid;
				category.level = level;
				category.text = level + bullet + category.name;
				categoriesData.push(category);
			}
		}

		else if ((cid >= 33 && cid <= 36) || cid == 31) {
			if ((category.cid >= 33 && category.cid <= 36) || category.cid == 31) {
				category.value = category.cid;
				category.level = level;
				category.text = level + bullet + category.name;
				categoriesData.push(category);
			}
		}

		else {
			if (!(category.cid >= 19 && category.cid <= 31) && !(category.cid >= 33 && category.cid <= 36)) {
				category.value = category.cid;
				category.level = level;
				category.text = level + bullet + category.name;
				categoriesData.push(category);
			}
		}

		category.children.forEach(function (child) {
			recursive(child, categoriesData, '&nbsp;&nbsp;&nbsp;&nbsp;' + level, cid);
		});
	}

	return categoryList;
});

define('categorySelector', function () {
	var categorySelector = {};
	var selectedCategory;
	var el;
	categorySelector.init = function (_el, callback) {
		console.log("Initializing selector...");

		callback = callback || function () {};
		el = _el;
		selectedCategory = null;
		el.on('click', '[data-cid]', function () {
			var categoryEl = $(this);
			categorySelector.selectCategory(categoryEl.attr('data-cid'));
			callback(selectedCategory);
		});

		console.log("Intialized selector.");
	};

	categorySelector.getSelectedCategory = function () {
		return selectedCategory;
	};

	categorySelector.selectCategory = function (cid) {
		var categoryEl = el.find('[data-cid="' + cid + '"]');
		selectedCategory = {
			cid: cid,
			name: categoryEl.attr('data-name'),
		};
		el.find('[component="category-selector-selected"]').html(categoryEl.find('[component="category-markup"]').html());
	};

	return categorySelector;
});
