var awesomeThoughts = "I am Sunita and I am awesome!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace('awesome','fun');
console.log(funThoughts);
$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace('%data%','Sunita');
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace('%data%','Frontend Developer');
$("#header").append(formattedRole);

var bio = {
	"name" : "Sunita",
	"role" : "Frontend Developer",
	"contacts":{
		"phone" : "123-456-7890",
		"email" : "john@example.com"
	},
	
	"pictureURL" : "images/fry.jpg",
	"welcomeMsg" : "Hello",
	"skills" : ["awesomeness","programming"]
}

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMsg);
$("#main").append(bio.skills);

var work = {
	"currentJob" : "Instructional Designer",
	"employer" : "AT&T",
	"yearsWorked" : 6
}
work.city = "Atlanta";

var education = {
	"schoolName" : "Bloomsburg University of PA",
	"yearsAttended" : "2006-2008"
}

education["schoolCity"] = "Bloomsburg";

$("#main").append(work.currentJob);
$("#main").append(education.schoolName);


var education = {
	"schools" : [
	{
		"name" : "Apex College",
		"city" : "Kathmandu",
		"major" : "Computer Information Systems",
		"graduationYear" : 2005
	},
	{
		"name" : "Bloomsburg University of PA",
		"city" : "Bloomsburg",
		"major" : "Instructional Technology",
		"graduationYear" : 2008
	}
]
}
