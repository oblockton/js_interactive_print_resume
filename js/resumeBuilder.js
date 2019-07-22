// Javascript object containing information necessary for building the header: Name, Contacts, Skills.
var apps = ["JavaScript","Plotly","Leaflet","Python",'Pandas','Matplot',"MySQL","SqlAlchemy","MongoDB",'Tableau',"HTML5","CSS","BeautifulSoup", 'MS Suite'];
var bio = {
  "name":"Omari Blockton",
  "role":"Powered By: Bay Area Native Ver 2.9",
  "welcomeMessage": "Experienced data analyst with a solid foundation in operations.",
  "biopic" :"Lorem Ipsum",
  "contacts": {"Mobile": "",
      "address": "Oakland,Ca 94619",
      "Email" : "oblockton@gmail.com",
      "Github" : "oblockton",
      "gitHubLink" : "https://github.com/oblockton"
  },
  "skills" : [
    "Adaptabilty",
     "Efficiency"]
   ,
   'devtools':["JavaScript","Plotly","Leaflet","Python",'Pandas','Matplot',"MySQL","SqlAlchemy","MongoDB",'Tableau',"HTML5","CSS","BeautifulSoup", 'MS Suite']

    // `Develepoment Applications: ${apps}`
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
  // $("#topContacts").prepend(formattedMobile); #removee mobile contact.-SPAM caution.
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
    $('#header').append('<div class="row" id ="skillrow"></div>');
    $("#skillrow").append(HTMLskillsStart);
    for (let i = 0; i < bio['skills'].length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    };
  };
  if(bio['devtools'].length > 0) {
    $('#skillrow').append(HTMLdevskillsStart);
    for (let i=0; i< bio['devtools'].length; i++) {
      var formattedDevskills = HTMLdevskills.replace('%data%', bio.devtools[i]);
      $('#devskills').append(formattedDevskills);
    }
  }
};

buildSkills();
//HEADER Build complete ---

// Javascript Object containg information to build the work row.
var work = {
  "jobs" : [
    {
      "employer" : "Farmstead - farmsteadapp.com",
      "title" : "Operations Manager",
      "location" : "San Francisco, Ca",
      "dates" : "December 2018- present",
      "description" : " Effectively manage the day-to-day operations of order processing hubs, acting as the primary point of contact and liaison between the operations team and upper management, customer \
      service, software engineering team, and external vendors. Manage the processing of customer orders, ensuring orders are delivered on-time and in full.\
      Create and/or implement new strategies or processes to meet company goals and address KPI’s. Work closely with and report directly to the CEO and Head of Operations.\
      Own, lead, and manage projects regarding; process workflow, software improvements, operational budgeting (labor, inventory, and supplies), merchandising & layout, and device procurement.\
      Manage inventory levels throughout the product lifecycle.",
      "accomplishments":['- Scaled hub operations capacity from a daily volume of 70 orders daily to 250 daily (~ 2.5x increase)',
      "- Increased process efficiency from an avg daily of 16 orders/hr to +25orders/hr(+50% increase)",
      '- Reduced operating labor on avg ~40%']
    },
    {
      "employer" : "Alfresco Heating",
      "title" : "Lead Service/Installation Technician",
      "location" : "Novato, Ca",
      "dates" : "September 2015- February 2017",
      "description" : "Lead the installation and service team. Successfully diagnose and repair issues related to gas and electric patio heater malfunctions, on site or in \
      shop. This includes the heater and any external associated components. Independently perform simple installations. Assist in complex installations, performing all functions related to \
      gas plumbing and electrical. Participate in city/county inspections. Write, organize, and file invoices, customer requests, measurements, photos, and/or any other data necessary \
      according to company SOP. Quote and foster sales of product units and installation projects. Build and maintain customer relationships. \
      Proactively generate new leads. Effectively manage a full weekly calendar of commercial and residential scheduled appointments, working \
      independently. Maintain company vehicle, and on-board inventory volume.",
      'accomplishments':['- Consistently met or exceeded sales goals.',' Exceeded 2nd biannual goal of first employment year,- Goal: $65,000 Sales Return: $100,297',
      "Noteworthy accounts: Peter Magowan estate (former SF Giants Managing Partner), The French Laundry (Yountville,Ca)"," \
      NEMA San Francisco, Momo’s (SF), Habit Burger (all Bay Area locations), Goose and Gander (St. Helena)"]
    },
    {
      "employer" : "Google Shopping Express",
      "title" : "Lead Store Operator",
      "location" : "Mountain View, Ca",
      "dates" : "September 2013 - September 2015",
      "description" : "Responsible for oversight and fulfillment of online orders at the store level. Identify areas of improvements and implement new strategies. \
      Manage the fulfillment process with a focus on problem prevention. Train new hires and effectively cultivate a productive and welcoming team atmosphere.\
      Ensure accuracy throughout the entire fulfillment process, striving for complete customer satisfaction.\
      Work with minimal supervision. Maintain and develop effective time management skills to ensure all order deadlines are met.\
      Continuously communicate with management, including but not limited to; escalations, status reports, supply requests, statistical data updates,\
      and customer service inquiries. Represent and maintain the Google brand image when interacting with the retail partners, and the public.",
      "accomplishments":['Participated in the successful launch of multiple new Google Shopping Express locations during the projects’ infancy.']
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
      $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription,HTMLaccompstart)
      if (work.jobs[job].accomplishments) {
        if (work.jobs[job].accomplishments.length > 0) {
          for (accomp in work.jobs[job].accomplishments){
            var formattedAccomplishment = HTMLaccomplishment.replace("%data%",work.jobs[job].accomplishments[accomp])
            $('.accomp-start:last').append(formattedAccomplishment)
          };//end for accomp
        };//end if accomp.lenghth
      };//end if accomplishment
    };
  };
};
displayWork();
// Work row build complete --

var projects = {
  "projectList" : [
    {
      "title" : "NASDASH",
      "dates" : "Ongoing",
      "description":"An interactive NASDAQ web dashboard & API service, providing a NASDAQ market and news overview and pipeline for consumable data. Built with Flask,Python,SQL,JS,and HTML",
      "modaldescript" : "  An interactive web dashbard built to provide NASDAQ price action and market news visualization. Users may select from any stock listed in the NASDAQ and see its recent or historical price action as far back as 10yrs. \
       Relevent news items pretaining to the selected NASDAQ ticker, market overview tables, and an economic events calendar are provided for exploration of market trends. News items are plotted on the timeseries plot of recent price action, \
       allowing users to determine if any recent news items may have affected recent price action. A user may then explore a table of the plotted news articles for further information. Additionally, all information used to build \
       the various tables and plots are available through API endpoints that provide clean data in JSON format. The  original data has been sourced from a combination of external API requests and html table scraping from various industry sources.",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link" : "https://nasdash.herokuapp.com/",
          "Linktxt" : "NASDASH - Deployed App"
        },
        {
          "Link" : "https://github.com/oblockton/NASDASH",
          "Linktxt" : "NASDASH - Repository"
        },
      ],
      "modalimage" : "images/fry.jpg",
      "modalID" : "modal-0",
      "modal_label" : "NASDASH"
    },
    ///////////////////////////////////////////////////////////////////////
    {
      "title" : "The Game of Thrones Effect",
      "dates" : "April 2019",
      "description":" Exploring the tanglible impact pop culture may have on human conventions.Has Game of Throne changed the baby name trends? ",
      "modaldescript" : "  Exploring the tanglible impact pop culture may have on human conventions. In this analysis we have used Social Security Administration, \
       and the equivalent UK agency to retreive our data(CSV). The hypothesis: Game of Thrones has made an observable change to the trend in name generation.\
       Through visualization of numerous relationships, and experimenting with Chi-Square, Fisher Exact, \
       and linear regression models- we did observe a statistically significant change in naming trend after the debut of GoT! Please view the presentation to explore our process and results. \
       Or view the project repository for an in depth view of the analysis.",
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
      "modalimage" : "images/growth.png",
      "modalID" : "modal-1",
      "modal_label" : "Game_of_Thrones"
    },
    ////////////////////////////////////////////////////////////////////////////////////////////
    {
      "title" : "Flask O' Plotly",
      "dates" : "June 2019",
      "description":"Using Flask, SqlAlchemy, Python, HTML, JS, and Plotly for ETL,analysis and web visualization of belly button biodiversity,with api service via Flask endpoints.",
      "modaldescript" : "Building an interactive dashboard to explore the Belly Button Biodiversity DataSet. Plotly.js is used to build interactive charts for the dashboard.\
       All plots should dynamically update based on user selection of test sample ID. Please view the repository ReadME for detailed information and product examples.",
      "images" : "images/bacteria_by_filterforgedotcom.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/oblockton/Flask_of_Plotly",
          "Linktxt" : "Flask O' Plotly - Repository"
        },
      ],
      "modalimage" : "images/bacteria_by_filterforgedotcom.jpg",
      "modalID" : "modal-2",
      "modal_label" : "flask_plotly"
    },
    /////////////////////////////////////////////////////////////////
    {
      "title" : "Weather Data Web Dashboard",
      "dates" : "Apr 2019",
      "description":"Does it really get warmer as we approach the equator? Dashbarding weather data analysis results, raw data, and Matplot vizualizations in a conveniently accessible web format.",
      "modaldescript" : "How can we provide end users and decision makers a convenient way to visualize and explore the results of an analysis? One way is through a web dashboard. Using the data and image outputs of an accompanied Jupyter notebook,\
      I build a web dashboard to visualize my analysis results using only HTML and Javascript. ",
      "images" : "images/weatherdatadash.jpg",
      "projectlink" : [
        {
          "Link" : "https://weatherdata-dash.herokuapp.com/index.html",
          "Linktxt" : "Weather Dashboard - Deployed Heroku App"
        },
        {
          "Link" : "https://github.com/oblockton/WeatherData_Dashboard",
          "Linktxt" : "Weather Dashboard - Github Repository"
        },
      ],
      "modalimage" : "images/weatherdatadash.jpg",
      "modalID" : "modal-3",
      "modal_label" : "weatherdashboard"
    },
    ///////////////////////////////////////////////////////////
    {
      "title" : "Surf's Up SqlAlchemy",
      "dates" : "May 2019",
      "description":"Using Flask, SqlAlchemy, Python, and Matplot for ETL, visualization, and api service via Flask endpoints.",
      "modaldescript" : "An excercise in serving data to end users via Flask url endpoints. In this project I have analyzed data on Hawaii weather such as weather, rainfall, average temp in an attempt to schedule a hypothetical \
      vacation during the best period for Hawaiian weather. Additionally I have been challenged to use Flask to build endpoints where users can consume that data used in the analysis. For fellow data science vacationers I have also provided \
      a Jupyter notebook containing in depth analysis, my processes, and helpful Matplot visualizations of the data.",
      "images" : "images/fry.jpg",
      "projectlink" : [
        {
          "Link" : "https://github.com/oblockton/Climate_Alchemist",
          "Linktxt" : "Surf's Up Repository"
        },
      ],
      "modalimage" : "images/fry.jpg",
      "modalID" : "modal-4",
      "modal_label" : "Climate_Alchemist"
    },
    /////////////////////////////////////////////////////////////////////////////////////
    {
      "title" : "Citibike's Tableau Story",
      "dates" : "July 2019",
      "description":"Using the publicly available dataset from Citibike, Tableau was used to provide a breifing on rider activity during January 2019.",
      "modaldescript": "In this briefing we explore CitiBike rider activity records for the month of January 2019, in an effort to uncover any trends or insights within the dataset. \
      We will start at the least granular level, observing overall sums and averages for key metrics of rider count, trip duration, and station activity.\
      Next we dive deeper, exploring various 'Top' charts and experimenting with class segmentation to extrapolate any trends existing withing certain groupings of records. ",
      "images" : "images/citibiketableau.jpg",
      "projectlink" : [
        {
          "Link" : "https://public.tableau.com/profile/omari.blockton#!/vizhome/UCB_CitiBike/Story1?publish=yes",
          "Linktxt" : "CitiBike Jan '19 Breif - Tableau Public Story"
        },
      ],
      "modalimage" : "images/citibiketableau.jpg",
      "modalID" : "modal-5",
      "modal_label" : "tableau"
    },




    //////////////////////////////////////////////////////////////////////////////////////////
    // {
    //   "title" : "Mongod of Mars",
    //   "dates" : "May 2019",
    //   "description":"Using BeautifulSoup,FLask,and MongoDB to scrapes various websites for data related to the Mission to Mars and display the information in a single HTML page.",
    //   "modaldescript": "Use MongoDB with Flask templating to create a new HTML page that displays all of the information that was scraped from the URLs above. ",
    //   "images" : "images/fry.jpg",
    //   "projectlink" : [
    //     {
    //       "Link" : "https://github.com/oblockton/Scraping-Mars-soup-for-Mongod",
    //       "Linktxt" : "Mars Scrape Repository"
    //     },
    //   ],
    //   "modalimage" : "images/fry.jpg",
    //   "modalID" : "modal-5",
    //   "modal_label" : "marsmongo"
    // },
    ///////////////////////////////////////////////////////////////////////////////////
    // {
    //   "title" : "Ride Share Data visualization with Matplot",
    //   "dates" : "May 2019",
    //   "description":"Analyze ride share data with Pandas and matplot",
    //   "modaldescript" : "placeholder",
    //   "images" : "images/fry.jpg",
    //   "projectlink" : [
    //     {
    //       "Link" : "https://github.com/oblockton/Rideshare_Insight_Visualization",
    //       "Linktxt" : "Matplot"
    //     },
    //   ],
    //   "modalimage" : "images/got_modal.jpg",
    //   "modalID" : "modal-6",
    //   "modal_label" : "rideshare"
    },
    ///////////////////////////////////////////////////////////////////////////////////
    // {
    //   "title" : "VBA Stock Performance",
    //   "dates" : "Current",
    //   "description":"VBA Scripting Work Out",
    //   "modaldescript" : "Using VBA scripting to manipulate, and visualize market data.",
    //   "images" : "images/stockmarket.jpg",
    //   "projectlink" : [
    //     {
    //       "Link" : "https://github.com/oblockton/Market_Metrics_VBA",
    //       "Linktxt" : "Scripting Stock Data with VBA"
    //     },
    //   ],
    //   "modalimage" : "images/stockmarket.jpg",
    //   "modalID" : "modal-7",
    //   "modal_label" : "VBAstocks"
    // },
    /////////////////////////////////////////////////////////////////////////////////////////////
    // {
    //   "title" : "Accounting with Python",
    //   "dates" : " Feb 2019",
    //   "description":"Create a python script to perform basic accounting functions for a theoretical bank and election.",
    //   "modaldescript" : "This scripting for the bank and election accounting should be pure python scipting\
    //    without incorporation of additional library functions. For each application the results should be output to a text file.",
    //   "images" : "images/pybank.jpg",
    //   "projectlink" : [
    //     {
    //       "Link" : "https://github.com/oblockton/Python_Accounting",
    //       "Linktxt" : "Accouting with Python"
    //     },
    //   ],
    //   "modalimage" : "images/pybank.jpg",
    //   "modalID" : "modal-8",
    //   "modal_label" : "Python_Accounting"
    // },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    // {
    //   "title" : "Interactive Resume",
    //   "dates" : "Ongoing",
    //   "description":"An interactive resume using Javascript,HTML,CSS, and bootstrap. Web app must retain the function of a resume hardcopy when printed.",
    //   "modaldescript" : "  An interactive and responsive web based resume/portfolio. These are the details for the web app your are currently vieweng. This web app should smoothly adjust its' display properties based on viewing device. \
    //    I designed this web application to be interactive when viewed in the browser. It's function as a printed resume must also be maintained if the web page were to be printed.\
    //    This dual purpose was achieved with a minimalistic approach to design. Limiting the extent of content hidden in link, buttons,etc. I integrated bootstrap to create the modals,\
    //    however the underlying framework is purpose built.",
    //   "images" : "images/fry.jpg",
    //   "projectlink" : [
    //     {
    //       "Link" : "https://github.com/oblockton/js_interactive_print_resume",
    //       "Linktxt" : "Interactive Resume"
    //     },
    //   ],
    //   "modalimage" : "images/got_modal.jpg",
    //   "modalID" : "modal-resume",
    //   "modal_label" : "Interactive_Resume"
    // },
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
      "name": "U.C Berkeley Extension, Data Science",
      "location": "Berkeley, Ca",
      "degreeDates": "August 2019",
      "degree" : "Certificate ",
      "majors" : ["Data Science"],
      "link" : "https://www.ucdavis.edu/"
    },
    {
      "name": "The University of California Davis",
      "location": "Davis, Ca",
      "degreeDates": "Class of 2010",
      "degree" : " ",
      "majors" : ["Managerial Economics"],
      "link" : "https://www.ucdavis.edu/"
    },
    {
      "name": "The College Preparatory School",
      "location": "6100 Broadway, Oakland, CA 94618",
      "degreeDates": "Class of 2006",
      "degree" : "High School Diploma",
      "majors" : ["General Education"],
      "link" : "https://www.college-prep.org/page"
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

// $("#mapDiv").append(googleMap);

// function formatFooterContacts() {
//   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
//   $("#footerContacts").prepend(formattedMobile);
//   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.address);
//   $("#footerContacts").prepend(formattedLocation);
//   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
//   $("#footerContacts").append(formattedEmail);
//   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
//   $("#footerContacts").append(formattedGithub);
//   //console.log(bio.contact.Mobile);
// };

 // formatFooterContacts();
