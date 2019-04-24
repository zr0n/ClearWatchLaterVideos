
/**
https://www.reddit.com/r/youtube/comments/2jfdzf/how_to_remove_all_videos_from_watch_later/
*/
const RemoveVideo = function(interval){
	var list = document.getElementsByClassName('pl-video-edit-remove');
	if(list.length)
		list[0].click();
	if(list.length > 1)
		setTimeout(() => {RemoveVideo(interval)}, interval)
}

const RemoveAllVideos = function () {
	console.log("Removing all videos")
	
	RemoveVideo(500);
}

browser.runtime.onMessage.addListener(handleMessage)
function handleMessage(request, sender, sendResponse){
	if(request.deleteAllVideos && confirm("Do you want to delete all videos from your playlist?"))
		RemoveAllVideos();
}

