var CONSTANTS = {};
CONSTANTS.profileIdAttribute = 'data-profileid';
CONSTANTS.selector = "button[" + CONSTANTS.profileIdAttribute + "]";

chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		var condition = new chrome.declarativeContent.PageStateMatcher({
			pageUrl: {
				hostSuffix: '.facebook.com',
				originAndPathMatches: '^[^:]+://[^/]*/[^/]+/?$'
			},
			css: [CONSTANTS.selector]
		});
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [condition],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});


chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({ file: 'content.js' }, function() {
		chrome.tabs.sendMessage(tab.id, CONSTANTS);
	});
});
