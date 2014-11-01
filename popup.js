// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
*用于调试
*/
function getObjToString(obj)
{
	if(typeof(obj) == "string")
	{
		return obj;
	}
	var returnStr = "";
	for(var key in obj)
	{
		returnStr+=key+":"+(obj[key])+"," ;
	}
	return returnStr;
}
/**
*来自网页的消息
*/
function onRecMessageFromWeb(message)
{
	alert("网页发送了个消息："+message);
}

function click(e) {
  /*chrome.tabs.executeScript(null,
      {code:"window.open('http://fengyun.yy.com')"});*/
	var targetId = event.target.parentNode.id;	
	switch(targetId)
	{
		case "openGame":
			window.open('http://fengyun.yy.com');
			break;
		case "openSetting":
			window.open("setting.html");
			break;
		case "openHelp":
			chrome.tabs.executeScript(null,
				{code:"javascript:showMessage('德玛西亚')"});
			break;
		default:
			onRecMessageFromWeb("内部测试");
			break;
	}	
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	$(function() {

		$( "input[type=submit], a, button" ).button({ icons:{ primary: "ui-icon-gear"}}).click(function( event ) {

			event.preventDefault();
			click(event);
		  });

	});


/*  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }*/
});
