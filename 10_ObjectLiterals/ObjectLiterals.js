// Object name is person
var person = {
	
	// it has one property
	health: "OK",

	// and it has one anonymas function
	PartyTime: function() {
		document.write("Let have a party....");
	}
}


// IMPORTANT NOTE
// uncomment each /* block */ and execute this file in browser,
// then comment it back and uncomment the next block and so on  



// call this function by using verifying person's health
if(person.health === "OK") {
	person.PartyTime();
}



/*
// add more properties in your exising object
person.name = "Khan";
document.write("person name is " + person.name + " and person's health is " + person.health);
*/


var country = {

	// property of this country
	name : "Sweden",
	continent : "Europe", 
	code : 46,

	// object literal "info" which is property of country
	info : {
		
		environment: "Green",
		topUniversities: 10,
		
		printinfo: function() {
			document.write("Nice place to live");
		} 
	}, // dont forget to put "," after every property if it is not last one 

	cities: [

		{ location: "South", name: "Stockholm" },
		{ location: "North", name: "Dalarna"}
	
	]
}

/*
// print country object 
document.write("Continent " + country.continent);
document.write("<br/>");

document.write("Country Name " + country.name);
document.write("<br/>");

document.write("Country Code " + country.code);
document.write("<br/>");
*/

/*
// print info object which is member of country object
document.write("Environment " + country.info.environment);
document.write("<br/>");

document.write("Number of top Universities " + country.info.topUniversities);
document.write("<br/>");

country.info.printinfo();
document.write("<br/>");
*/

/*
// print objects of array cities, this array is member of country object   
document.write("City name " + country.cities[0].name + " Location " + country.cities[0].location);
document.write("<br/>");

document.write("City name " + country.cities[1].name + " Location " + country.cities[1].location);
document.write("<br/>");
*/

/*
// you can change the value of any member.
document.write("name before changes" + country.name);
country.name = "USA";
document.write("<br/>");
document.write("name after changes" + country.name);
*/


/*
// Create another object and pass the previous object "person" as a parameter
var printObjectDetail = {
	// create a function to print object's memeber
	printAll: function(targetObject){
		for(i in targetObject)
			document.write(" " + targetObject[i] + " ");
	}
}

// call function printAll with parameter person
printObjectDetail.printAll(person);
*/
