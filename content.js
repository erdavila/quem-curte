chrome.runtime.onMessage.addListener(function(message, _sender, _sendResponse) {
	var likeButton = document.querySelector(message.selector);
	var profileId = likeButton.getAttribute(message.profileIdAttribute);
	window.location = "/browse/friended_fans_of/?page_id=" + profileId;
});
