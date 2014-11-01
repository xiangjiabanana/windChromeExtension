


//var port = chrome.extension.connect();

//document.getElementById('extentionMessagerDiv').innerText = "脚本注入";
 
document.getElementById('extentionMessagerDiv').addEventListener('myCustomEvent', function() {

  var eventData = document.getElementById('extentionMessagerDiv').innerText;
 // alert(eventData);
  //port.postMessage({message: "myCustomEvent", values: eventData});
  chrome.runtime.sendMessage({message: eventData}, function(response) {		
		//alert("收到回复，来自扩展！"+response.farewell);
		console.log("收到回复，来自扩展！");
	});  
});