chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
		show(request.message);
		
		//alert("here");
		console.log(sender.tab ?
					"from a content script:" + sender.tab.url :
					"from the extension");
		if (request.message == "hello")
		  sendResponse({farewell: "goodbye"});
		else
		  sendResponse({farewell: "goodbye2"}); // snub them.
  });

function show(message) {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  var title = hour + time[2] + ' ' + period;
  title = "风云通知消息："+title;
  new Notification(title, {
    icon: '48.png',
    body: message
  });
};