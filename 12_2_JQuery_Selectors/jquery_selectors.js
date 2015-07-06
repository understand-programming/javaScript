$(document).ready(function(){



// IMPORTANT NOTE
// uncomment each // commented code and execute this file in browser,
// then comment it back and uncomment the next line and so on  


	 /* Apply CSS by ID */
	$("#p1").addClass('mystyle');

	/* Apply CSS same type of elements / tags */
	//$("p").addClass('mystyle');

	/* Apply CSS on class type whcih is declared in HTML*/
	//$(".selection").addClass('mystyle');

	/* Apply CSS on multiple tags	*/
	// $("#p2, #title").addClass('mystyle');

	/* Apply CSS on specific tag which contains text of your choice	*/
	//$("p:contains('a Paragraph')").addClass('mystyle');	

	/* Apply CSS on next or previous tag, the tag which contains text of your choice	*/
	//$("p:contains('Paragraph 2')").prev().addClass('mystyle');
	//$("p:contains('Paragraph 2')").next().addClass('mystyle');
	/* you can also select siblings or parent as well */
	
	/* Apply CSS on element by attributes/by name 	*/
	//$('p[name="paragraph2"]').addClass('mystyle');	

	/* Apply CSS on specific list item (1,2 or 3)	*/
	//$("li:nth-child(1)").addClass('mystyle');	

	/* Apply CSS on next element	*/
	//$("li:nth-child(1)").next().addClass('mystyle');

	/* Apply CSS on witout name elements 	*/
	//$('li').not('[name]').addClass('mystyle');


});

