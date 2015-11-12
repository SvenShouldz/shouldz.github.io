 
var bio = 
      {  
         "name":"Sven Schulz",
         "role":"Web Developer",
         "bioPic":"sven",
         "contacts":{  
            "mobile":"1234567890",
            "email":"sven.schulz@br.de",
            "github":"github.com/shouldz",
            "twitter":"twitter.com/shouldz_",
            "blog":"shouldz.com",
            "location":"gauting"
         },
         "welcomeMsg":"Hallo Hallöchen",
         "skills":[  
            "Photoshop",
            "Illustrator",
            "Graphic Design",
            "HTML 5",
            "CSS 3",
            "JS"
         ]
      };
var education =
      {  
         "schools":{  
            "name":"Berufliches Schulzentrum <br/> Alois Senefelder",
            "degree":"Mediengestalter Digital & Print",
            "majors":"Gestaltung & Technik",
            "location":"München, Prankhstraße",
            "dates":"2008 - 2011",
            "url":"http://www.senefelder.musin.de/"
         },
         "onlineCourses":{  
            "title":"Front-End Developer",
            "school":"Udacity",
            "dates":"2015 - 2016",
            "url":"http://www.udacity.com"
         }
      };
var work = 
      {  
         "jobs":{
            "employer":"Bayerischer Rundfunk",
            "title":"Mediengestalter Digital & Print",
            "dates":"2008-now",
            "location":"München, Rundfunkplatz",
            "description":"Working as Graphic Artist & Front-End Developer"
         }
      };
var projects = 
      {  
         "project":{
         	"images":"images/br24.jpg",
            "title":"BR24",
            "description":"We created a Newsapp for people who live in Bavaria to get more news from the local regions but there are also news about Germany and the World.",
            "dates":"2015"
         }
      };

bio.displaySkills = function(obj, item){
	html = "HTMLskills";
	select = "#skills";
	data = item[obj];
	buildHTML(data, html, select);
};

bio.displayContacts = function(obj, item){
	html = "HTML" + obj;
	select = "#topContacts";
	data = item[obj];
	buildHTML(data, html, select);
	buildHTML(data, html, '#footerContacts');
};

work.displayJobs = function(obj, item){
	html = "HTMLwork" + firstLetterCaps(obj);
	select = ".work-entry";
	data = item[obj];
	buildHTML(data, html, select);	
};

education.displaySchools = function(obj, item){
	html = "HTMLschool" + firstLetterCaps(obj);
	select = ".education-entry";
	data = item[obj];
	buildHTML(data, html, select);
};

education.displayOnline = function(obj, item){
	html = "HTMLonline" + firstLetterCaps(obj);
	select = ".education-entry";
	data = item[obj];
	buildHTML(data, html, select);
};

projects.displayProjects = function(obj, item){
	html = "HTMLproject" + firstLetterCaps(obj);
	select = ".project-entry";
	data = item[obj];
	buildHTML(data, html, select);
};

var firstLetterCaps = function(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
};

var buildHTML = function(json, html, selector){
	if(html.indexOf('display') == -1){
		var code = String(window[html]);
		var item = json;
		code = code.replace(/%data%/g, item);
		$(selector).append(code);
	}
};

var init = function(json, selector){
	var code, items, item, html, obj, arr;
	code = json;
	for(items in json){
		item = code[items];
		switch(items){
			case 'skills':
				$(selector).append(HTMLskillsStart);
				for(obj in item){
					bio.displaySkills(obj, item);
				}
				break;
			case 'contacts':
				for(obj in item){
					bio.displayContacts(obj, item);
				}
				break;
			case 'jobs':
				$(selector).append(HTMLworkStart);
				for(obj in item){
					work.displayJobs(obj, item);
				}
				break;
			case 'schools':
				$(selector).append(HTMLschoolStart);
				for(obj in item){
					education.displaySchools(obj, item);
				}
				break;
			case 'onlineCourses':
				$(select).append(HTMLonlineClasses);
				for(obj in item){
					education.displayOnline(obj, item);
				}
				break;
			case 'project':
				$(selector).append(HTMLprojectStart);
				for(obj in item){
					projects.displayProjects(obj, item);
				}
				break;
			default:
				html = "HTML" + items;
				buildHTML(item, html, selector);
				break;	
		}
	}
};

init(bio, '#header');
init(work, '#workExperience');
init(education, '#education');
init(projects, '#projects');

$('#mapDiv').append(googleMap);

$('#lets-connect').on('click',function(){
	if($(this).attr('data-click') == 1) {
		$(this).attr('data-click', 0);
		$('#lets-connect h2 span').css("left", "3vw");
		$('#footerContacts li').fadeOut();
	} else {
		$(this).attr('data-click', 1);
	 	$('#lets-connect h2 span').css("left", "45%");
		$('#footerContacts li').fadeIn(); 
	}
});
