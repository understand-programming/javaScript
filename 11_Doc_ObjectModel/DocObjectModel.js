window.onload = function() {

	document.getElementById('mybutton').onclick = runThisFunction;

}


// IMPORTANT NOTE
// uncomment each /* block */ and execute this file in browser,
// then comment it back and uncomment the next block and so on  



// Check the type of "main" node in your HTML
function runThisFunction(){
	
	var elementname = document.getElementById('main');
	alert(elementname.nodeName+ " Type");
}


/*
// Get the content paragraph "p1" node in your HTML
function runThisFunction(){
	
	var elementname = document.getElementById('p1');
	alert(elementname.innerHTML);
}
*/

/*
// Set the content paragraph "p1" node in your HTML
function runThisFunction(){
	
	document.getElementById('p1').innerHTML = 'Hurryy..... i have changed the text';
}
*/

/*
// Get the contents by tag name (p,div,center etc) in your HTML
function runThisFunction(){

	var listofpgs = document.getElementsByTagName('center');
	
	if(listofpgs.length>0){

		var firstElementinList = listofpgs[0];

		alert(firstElementinList.innerHTML);

	}else{

		alert("No element found");
	
	}
}
*/


/*
// Get the parent of "p1 or main etc" node in your HTML
function runThisFunction(){
	
	var elementname = document.getElementById('main');
	alert(elementname.parentNode.nodeName);
}
*/



/*

// Get and Set the value of "website" node in your HTML
function runThisFunction(){
	
	var elementname = document.getElementById('website');
	
	var webaddress = elementname.href;
	alert(webaddress);

	/// click link on website and it should transfer you to google web page
	elementname.href = "http://www.google.com";

}
*/




































