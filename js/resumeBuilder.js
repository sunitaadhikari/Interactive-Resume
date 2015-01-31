var bio = {
	"name" : "Sunita Adhikari",
	"role" : "Frontend Web Developer",
	"contacts":{
		"mobile" : "404-276-2638",
		"email" : "sunita.adhikari@gmail.com",
		"github" : "sunitaadhikari",
		"twitter" : "sunitaadhikari", 
		"location" : "Atlanta, GA"
	},	
	"pictureURL" : "images/sunita.jpg",
	"welcomeMessage" : "Summary: Improve efficiency, translate vague requirements into concrete products, and produce high quality user friendly products.",
	"skills" : ["User Interface Design", "Front-end Web Development","Responsive Design", "Twitter Bootstrap","HTML5","CSS3","JavaScript","JSON"],

	display: function(){
    	var formattedName = HTMLheaderName.replace('%data%',bio.name);     
    	var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
		var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
    	var formattedPic = HTMLbioPic.replace('%data%',bio.pictureURL);
    	$("#header").prepend(formattedPic);
    	$("#header").prepend(formattedRole);       
    	$("#header").prepend(formattedName);      
    	$("#topContacts").append(formattedMobile);
    	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
    	$("#topContacts").append(formattedEmail);
    	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
    	$("#topContacts").append(formattedGithub);
    	var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
    	$("#topContacts").append(formattedTwitter);
    	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
    	$("#topContacts").append(formattedLocation);
    	var formattedMessage = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
    	$("#header").append(formattedMessage);

    	if (bio.skills.length > 0) {
    		$("#header").append(HTMLskillsStart);
    		var i = 0;
    		for(i=0; i<bio.skills.length; i++){
    			var formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
    			$("#skills").append(formattedSkill);
     		}
		}
		var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
		$("#footerContacts").append(formattedLocation);
	}
}
bio.display();

var work = {
	"jobs":[
		{
			"employer" : "AT&T",
			"title" : "Instructional Designer",
			"location" : "Atlanta GA",
			"dates" : "2008 - present",
			"description" : "Design and develop Web-based courses for Digital Life Support and Monitoring using different authoring tools.Internal web-based tools to support training staff. Developed the training portal website for the Digital Life Central Operations to make Instructor Guides, Student Guides, and other related training materials available to vendors."
		},
		{
			"employer" : "Aerotek",
			"title" : "Instructional Designer",
			"location" : "Atlanta, GA",
			"dates" : "12/2013 - 02/2014",
			"description" : "Redesigned and converted three courses from Articulate Storyline to Trivantis Lectora. Resolved access issue for audiences without Flash by creating a HTML version of the courses. Provided an outstanding learning experience by using variables to store and retrieve values, creating actions with conditions, customizing feedback boxes in question slides to match that of Articulate Storyline to reinforce knowledge, creating a lesson bookmark to allow the user to come back to the page where they left off, and creating menu options that is enabled to show the progress as learners complete certain section(s) in the course."
		},
		{
			"employer" : "Institute of Interactive Technologies",
			"title" : "Instructional Designer",
			"location" : "Bloomsburg PA",
			"dates" : "2006 - 2007",
			"description" : "Designed and developed e-learning courses and user manuals for Kellogg’s Line 1 Packaging Machine Operators (PMO). Developed a CD based Soft Skills training program for Geisinger Medical Center."

		}
	],
	display: function(){
		for(job in work.jobs){
      		$("#workExperience").append(HTMLworkStart);
      		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
      		var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
      		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      		$(".work-entry:last").append(formattedEmployerTitle);
     		var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
     		$(".work-entry:last").append(formattedWorkLocation);
      		var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
      		$(".work-entry:last").append(formattedWorkDates);
      		var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
      		$(".work-entry:last").append(formattedWorkDescription);
    	}
	}
}
work.display();


var education = {
	"schools" : [
		{
			"name" : "Apex College",
			"degree" : "Bachelors",
			"location" : "Kathmandu, Nepal",
			"majors" : ["Computer Information Systems"],
			"dates" : "2001 - 2005", 
			"url" : "http://www.apexcollege.edu.np"
		},
		{
			"name" : "Bloomsburg University of PA",
			"degree" : "Masters",
			"location" : "Bloomsburg, PA",
			"majors" : ["Instructional Technology"],
			"dates" : "2006 - 2008",
			"url" : "http://www.bloomu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Frontend Web Development",
			"school" : "Udacity",
			"dates" : "2014 - present",
			"url" : "http://www.udacity.com"
		}
	],
	display: function(){
    	for(school in education.schools){
      		$("#education").append(HTMLschoolStart);
      		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
      		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      		$(".education-entry:last").append(formattedSchoolName);
      		$(".education-entry:last").append(formattedSchoolDegree);
      		$(".education-entry:last").append(formattedSchoolDates);
      		$(".education-entry:last").append(formattedSchoolLocation);
      		for(major in education.schools[school].majors){
      			var formattedSchoolMajor= HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedSchoolMajor);
      		}
      	
    	}

    	if(education.onlineCourses.length > 0){
      		$(".education-entry:last").append(HTMLonlineClasses);
      		for(onlineCourse in education.onlineCourses){
	      		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
	      		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
	      		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
	      		var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
	      		$(".education-entry:last").append(formattedOnlineTitle);
	      		$(".education-entry:last").append(formattedOnlineSchool);
	      		$(".education-entry:last").append(formattedOnlineDates);
	      		$(".education-entry:last").append(formattedURL);
      		}
  		}
  	}

}

education.display();

var projects = {
		"projects" : [
			{
				"title" : "HTML and CSS",
				"dates" : "2014",
				"description" : "Replicated a given design mockup using HTML and CSS.",
				"images" : ["images/HTML_and_CSS.png"]
			},
			{
				"title" : "Interactive Resume",
				"dates" : "2015",
				"description" : "Created an interactive resume using JSON, JQUERY, and JavaScript.",
				"images" : ["images/interactive_resume.png"]
			}			
		],
		display: function(){
			for(project in projects.projects){
				var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projects.projects[project].title);
				var formattedProjectDates = HTMLprojectDates.replace('%data%',projects.projects[project].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace('%data%',projects.projects[project].description);

				$("#projects").append(HTMLprojectStart);

				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				for(image in projects.projects[project].images){
					var formattedImages = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}

			}

		}	
};

projects.display();

function locationizer(work_obj){
	var locationArray = [];
	for(job in work_obj.jobs){
		var location = work_obj.jobs[job].location;
		locationArray.push(location);
	}
	return locationArray;
}

locationizer(work);

$("#main").append(internationalizeButton);

function inName(name){
	var newName = bio.name.toUpperCase();
	var splittedNameArray = newName.split(" ");
	var firstNameLC = splittedNameArray[0].toLowerCase();
	var firstLetterUC = firstNameLC.charAt(0).toUpperCase();
	var finalFirstName = firstLetterUC + firstNameLC.slice(1, firstNameLC.length);
	var finalName = finalFirstName + " " +splittedNameArray[1];
	return finalName;
}
$("#mapDiv").append(googleMap);









