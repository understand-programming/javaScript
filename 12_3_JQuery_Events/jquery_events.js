$(document).ready(function(){



// IMPORTANT NOTE
// uncomment each /* commented */ code and execute this file in browser,
// then comment it back and uncomment the next line and so on  



/*
	// on Click count in implemented on main logo
	var score = 0;
	$('#message').hide();


	$('#logo').click( function(){

		score++;
		$('#score').text(score);
		$('#message').show('slow').fadeOut(1000);
	
	});
*/


/*
	// Hover event is implemented on "JQuery Events" Text in HTML 
	$('#heading').addClass('hoverout');
	$('#heading').hover(function(){

		$('#heading').addClass('hoverover').removeClass('hoverout');

	},function(){

			$('#heading').removeClass('hoverover').addClass('hoverout');

	});
*/


/*
	//Foucs Out event is implemented on textbox
	var focus = 0;
	$("#focus").focusout(function(){
			focus++;
		$("#focuscount").text("focus out " + focus);
	});
*/




	// Apply CSS by ID
	//$("#p1").addClass('mystyle');

	// Apply CSS same type of elements / tags
	//$("p").addClass('mystyle');

	// Apply CSS on class type whcih is declared in HTML
	//$(".selection").addClass('mystyle');

	// Apply CSS on multiple tags	
	// $("#p2, .selection").addClass('mystyle');

	// Apply CSS on specific tag which conatins text of your choice	
	//$("p:contains('a Paragraph')").addClass('mystyle');	

	// Apply CSS on next or previous tag, the tag which conatins text of your choice	
	//$("p:contains('Paragraph 2')").prev().addClass('mystyle');
	//$("p:contains('Paragraph 2')").next().addClass('mystyle');
	// you can also select siblings or parent as well
	
	// Apply CSS on element by attributes/by name 	
	//$('p[name="paragraph2"]').addClass('mystyle');	

	// Apply CSS on specific list item (1,2 or 3)	
	//$("li:nth-child(1)").addClass('mystyle');	

	// Apply CSS on next element	
	//$("li:nth-child(1)").next().addClass('mystyle');

	// Apply CSS on witout name elements 	
	//$('li').not('[name]').addClass('mystyle');


});

