browser.browserAction.onClicked.addListener(() => {
	browser.tabs.query({
		currentWindow: true,
		active: true
	  }).then(tabs => {
			browser.tabs.sendMessage(tabs[0].id, {deleteAllVideos: true})
	  });
})