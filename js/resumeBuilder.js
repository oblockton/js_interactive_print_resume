// Javascript object containing information necessary for building the header: Name, Contacts, Skills.
var apps = ["JavaScript", "Python","Pandas","MySQL","Matplot","SqlAlchemy", "HTML5", "CSS3"];
var bio = {
  "name":"Omari Blockton",
  "role":"Powered By: Bay Area Native Ver 2.9",
  "welcomeMessage": "Experienced data analyst, focused on innovation and efficiency",
  "biopic" :"Lorem Ipsum",
  "contacts": {"Mobile": "510-421-1379",
      "address": "3230 Storer Ave, Oakland,Ca 94619",
      "Email" : "oblockton@gmail.com",
      "Github" : "oblockton",
      "gitHubLink" : "https://github.com/oblockton"
  },
  "skills" : [
    "Adaptabilty",
     "Efficiency",
    `Develepoment Applications: ${apps}`
  ]
};
// Builds the hedaer using the objects above
function buildBio() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name)
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", "images/Omari_vineyard.jpg")
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(formattedBioPic)
};

buildBio();

function formatTopContacts() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
  $("#topContacts").prepend(formattedMobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.address);
  $("#topContacts").prepend(formattedLocation);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
  var formattedgitHubLink = formattedGithub.replace("#", bio.contacts.gitHubLink);
  $("#topContacts").append(formattedgitHubLink);
  //console.log(bio.contact.Mobile);
};

formatTopContacts();

function buildSkills() {
  if(bio['skills'].length > 0) {
    $("#header").append(HTMLskillsStart)
    for (let i = 0; i < bio['skills'].length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};

buildSkills();
//HEADER Build complete ---

// Javascript Object containg information to build the work row.
var work = {
  "jobs" : [
    {
      "employer" : "Google",
      "title" : "Engineer",
      "location" : "Mountain View, Ca",
      "dates" : "December 2018- present",
      "description" : "Engineer Googly things"
    },
    {
      "employer" : "Farmstead - farmsteadapp.com",
      "title" : "Operations Manager",
      "location" : "San Francisco, Ca",
      "dates" : "December 2018- present",
      "description" : "Manage daily operation of order processing hub."
    },
    {
      "employer" : "Alfresco Heating",
      "title" : "Lead Service/Installation Technician",
      "location" : "Novato, Ca",
      "dates" : "September 2015- February 2017",
      "description" : "Lead the installation and service team."
    },
    {
      "employer" : "Google Shopping Express",
      "title" : "Lead Store Operator",
      "location" : "Mountain View, Ca",
      "dates" : "September 2013 - September 2015",
      "description" : "Responsible for oversight and fulfillment of online orders at the store level. Identify areas of improvements and implement new strategies. \
      Manage the fulfillment process with a focus on problem prevention. Train new hires and effectively cultivate a productive and welcoming team atmosphere.\
      Ensure accuracy throughout the entire fulfillment process, and strive for complete customer satisfaction.\
      Work with minimal supervision.Maintain and develop effective time management skills to ensure all order deadlines are met.\
      Continuously communicate with management, including but not limited to; escalations, status reports, supply requests, statistical data updates, and customer service inquiries.Represent and maintain the Google brand image when interacting with the retail partners, and the public. "
    }
  ]

};
// Function to build the work row.
function displayWork() {
  if (work['jobs'].length > 0) {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart)
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
      var formattedEmployerTitle = formattedEmployer + formattedTitle
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
      $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription)
    }
  }
};
displayWork();
// Work row build complete --

var projects = {
  "projectList" : [
    {
      "title" : "Interactive Resume",
      "dates" : "Current",
      "description":"An interactive resume using Javascript,HTML,CSS, and bootstrap. Web app must retain the function of a resume hardcopy when printed.",
      "modaldescript" : "  An interactive and responsive web based resume/portfolio. These are the details for the web app your are currently vieweng. This web app should smoothly adjust its' display properties based on viewing device. \
       I designed this web application to be interactive when viewed in the browser. It's function as a printed resume must also be maintained if the web page were to be printed.\
       This dual purpose was achieved with a minimalistic approach to design. Limiting the extent of content hidden in link, buttons,etc. I integrated bootstrap to create the modals,\
       however the underlying framework is purpose built.",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link1" : "https://github.com/oblockton/js_interactive_print_resume",
          "Linktxt" : "Interactive Resume"
        },
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-1",
      "modal_label" : "Interactive Resume"
    },
    {
      "title" : "The Game of Thrones Effect",
      "dates" : "April 2019",
      "description":" Exploring the tanglible impact pop culture may have on human conventions.Has Game of Throne changed the baby name trends? ",
      "modaldescript" : "  Exploring the tanglible impact pop culture may have on human conventions.This was a group project created during my tenure in the UC Berkeley Extension Data Analytics course.\
       No restrictions were placed on topic choice. The few requirements being, use of external data sources,and incorporation of at minimum: Python, Jupyter,Pandas, and Matplot.\
       Projects were to also include an analysis presentation. In our analysis we used Social Security Administration, \
       and the equivalent UK agency to retreive our data(CSV). Our hypothesis: Game of Thrones has made an observable change to the trend in name generation.\
       Through visualization of numerous relationships, and experimenting with Chi-Square, Fisher Exact, \
       and linear regression models- we did observe a statistically significant change in naming trend after the debut of GoT!",
      "images" : "images/Game_Of_Thrones.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/nsetnik0703/nightwatch",
          "Linktxt" : "Game of Thrones Effect - Github Repository"
        },
        {
          "Link" : "https://prezi.com/view/M1T99BpHMzx3crXV7lWi/",
          "Linktxt" : "Analysis Presentation"
        }
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-2",
      "modal_label" : "Game of Thrones"
    },
    {
      "title" : "Build Personal Libraries",
      "dates" : "8/12/2017-ongoing",
      "description":"Build library of common functions for personal reference.Build library of common functions for personal reference.",
      "modaldescript" : "placeholder",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/oblockton/js_interactive_print_resume",
          "Linktxt" : "Libraries"
        },
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-3",
      "modal_label" : "Build Libraries"
    },
    {
      "title" : "Ride Share Data visualization with Matplot",
      "dates" : "Current",
      "description":"Analyze ride share data with Pandas and matplot",
      "modaldescript" : "placeholder",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/oblockton/",
          "Linktxt" : "Matplot"
        },
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-4",
      "modal_label" : "placeholder"
    },
    {
      "title" : "Surf's Up SqlAlchemy",
      "dates" : "Current",
      "description":"SqlAlchemy project goes here",
      "modaldescript" : "placeholder",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/oblockton/",
          "Linktxt" : "Surf's Up"
        },
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-5",
      "modal_label" : "placeholder"
    },
    {
      "title" : "Kickstart Excellence",
      "dates" : "Current",
      "description":"Analyze Kickstarter metrics with Excel",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/oblockton/",
          "Linktxt" : "Excel Kickstart"
        },
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-6",
      "modal_label" : "placeholder"
    },
    {
      "title" : "VBA Stock Performance",
      "dates" : "Current",
      "description":"VBA Scripting Work Out",
      "modaldescript" : "placeholder",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {

        },
      ],
      "modalimage" : "images/got_modal.jpg",
      "modalID" : "modal-7",
      "modal_label" : "placeholder"
    },
  ]
}
/*
projects.display = function() {
  for (project in projects.projectList){
    $("#projectsRow").append(HTMLprojectStart)
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title)
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates)
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectList[project].description)
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectList[project].images)
    $(".project-entry:last").append(formattedProjectTitle)
    $(".date-placeholder:last").append(formattedProjectDates, formattedProjectDescription, formattedProjectImage)
  }

};
projects.display();
*/
// Build Projects section and add modals to the DOM respectively
projects.display = function() {
  for (project in projects.projectList){
    var formattedProjectStart = HTMLprojectStart.replace("myModal", projects.projectList[project].modalID)
    $("#projectsRow").append(formattedProjectStart)
    var formattedModalStart = HTMLmodalStart.replace("myModal", projects.projectList[project].modalID)
    .replace("Project Title",projects.projectList[project].title)
    .replace("myModalLabel", projects.projectList[project].modal_label)
    .replace("images/coding-image-holder.jpg", projects.projectList[project].modalimage)
    .replace('Your Project description goes here.',projects.projectList[project].modaldescript)
    $("#modal-placeholder").append(formattedModalStart)
    if (projects.projectList[project].projectlink.length > 0) {
      for (link in projects.projectList[project].projectlink) {
        var formattedModalLink = HTMLmodal_proj_links.replace('#', projects.projectList[project].projectlink[link].Link)
        .replace('%data%',projects.projectList[project].projectlink[link].Linktxt)
        $(".modal-body:last").append(formattedModalLink)
      }
    }
    $("#modal-placeholder").append(HTMLmodalEnd)
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title)
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates)
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectList[project].description)
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectList[project].images)
    $(".project-entry:last").append(formattedProjectTitle)
    $(".date-placeholder:last").append(formattedProjectDates, formattedProjectDescription, formattedProjectImage)
  }

};
projects.display();

var education = {
  "Schools" : [
    {
      "name": "The College Preparatory School",
      "location": "6100 Broadway, Oakland, CA 94618",
      "degreeDates": "Class of 2006",
      "degree" : "High School Diploma",
      "majors" : ["General Education"],
      "link" : "https://www.college-prep.org/page"
    },
    {
      "name": "The University of California Davis",
      "location": "Davis, Ca",
      "degreeDates": "Class of 2010",
      "degree" : " ",
      "majors" : ["Managerial Economics", "Computer Science"],
      "link" : "https://www.ucdavis.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Python",
      "school": "Udacity",
      "dates": "2017",
      "url": "not applicable"
    },
    {
      "title": "Javascript",
      "school": "Udacity",
      "dates": "2017",
      "url": "not applicable"
    },
    {
      "title": "Full Stack Bootcamp",
      "school": "Flat Iron",
      "dates": "2017",
      "url": "not applicable"
    }
  ]
};

function buildEducation() {
  for (let i=0; i < education.Schools.length; i++) {
    $("#schools").append(HTMLschoolStart)
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.Schools[i].name)
    var linkedSchoolName = formattedSchoolName.replace("#", education.Schools[i].link)
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.Schools[i].location)
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.Schools[i].degreeDates)
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.Schools[i].majors)
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[i].degree)
    $(".education-entry:last").append(linkedSchoolName)
    if (education.Schools[i].degree.length > 0) {
      $(".education-entry:last").append(formattedSchoolDegree)
      $(".education-entry:last").append(formattedSchoolDates)
      $(".education-entry:last").append(formattedSchoolLocation)
      $(".education-entry:last").append(formattedSchoolMajor)
    } else {
      $(".education-entry:last").append(formattedSchoolDates)
      $(".education-entry:last").append(formattedSchoolLocation)
      $(".education-entry:last").append(formattedSchoolMajor)
    }

  }
};

buildEducation();

function buildOnlineCourses() {
  $("#online").append(HTMLonlineClasses)
  for (let i =0; i < education.onlineCourses.length; i++) {
        $("#online").append(HTMLonlineStart)
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title)
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school)
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates)
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)
        $(".online-entry:last").append(formattedOnlineTitle)
        $(".online-entry:last").append(formattedOnlineSchool)
        $(".online-entry:last").append(formattedOnlineDates)
        //$(".online-entry:last").append(formattedOnlineUrl)
  }
};

buildOnlineCourses();



//function of the internationalizeButton
function inName(name) {
  name = name.trim().split(" ")
  console.log(name);
  name[1] = name[1].toUpperCase()
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase()
  return name[0] + " "+ name[1]
}
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

function formatFooterContacts() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
  $("#footerContacts").prepend(formattedMobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.address);
  $("#footerContacts").prepend(formattedLocation);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
  $("#footerContacts").append(formattedGithub);
  //console.log(bio.contact.Mobile);
};

formatFooterContacts();
