
/**
https://www.reddit.com/r/youtube/comments/2jfdzf/how_to_remove_all_videos_from_watch_later/
*/


const RemoveAllVideos = function () {
	console.log("Removing all videos")
	var el = document.getElementsByClassName('pl-video-edit-remove');
	for (var i=0;i<el.length; i++) {
		el[i].click();

	}
}
browser.runtime.onMessage.addListener(handleMessage)
function handleMessage(request, sender, sendResponse){
	if(request.deleteAllVideos)
		RemoveAllVideos();
}

