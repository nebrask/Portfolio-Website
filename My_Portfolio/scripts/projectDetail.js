//Array that contains the project data
const projectsData = [
  {
    name: "EventMe",
    technology: ["React", "JavaScipt", "HTML", "CSS", "Python", "TomTom", "SerpApi", "Heroku"],
  },
  {
    name: "MediCount",
    technology: ["Android Studio", "Java", "SQLite", "XML", "Firebase"],
  },
  {
    name: "MGT Marketplace",
    technology: ["Next.js", "TypeScript", "Firebase", "Python", "Vercel"],
  },
];

// Read the input value from the search bar
function inputValue() {
  return document.getElementById('searchbar').value.toLowerCase();
}

// Interpret the project data and check for any matches
function interpretData(project, input) {
  const projectName = project.name.toLowerCase();
  const projectTechnology = project.technology.map(tech => tech.toLowerCase());
  return projectName.includes(input) || projectTechnology.includes(input);
}

// Remove previous search results
function removeResults() {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';
}

// Display the search results to the inteneded format
function displayResults(projects) {
  const searchResults = document.getElementById('search-results');

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const listItem = document.createElement('li');
    listItem.textContent = project.name + ': ' + project.technology.join(', ');
    searchResults.appendChild(listItem);
  }
}

// Perform the associated project search that will be based on the users input
function searchProjects() {
  const input = inputValue();
  const match = projectsData.filter(project => interpretData(project, input));

  removeResults();
  displayResults(match);
}

// Toggle the flip card animation to display the project detail of the associated project 
function toggleFlipCard(projectTrigger) {
  const flipCard = projectTrigger.closest('.project').querySelector('.flip-card');
  flipCard.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {

  //Gather all project trigger elements
  const projectTriggers = document.querySelectorAll('.project-trigger');

  //Click event listener to trigger project
  for (let i = 0; i < projectTriggers.length; i++) {
    const trigger = projectTriggers[i];
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      toggleFlipCard(trigger);
    });
  }

  // Key event listner for real time search of the search bar
  document.getElementById('searchbar').addEventListener('keyup', searchProjects);
});

/*
Resources:
- https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
- https://www.w3schools.com/howto/howto_css_flip_card.asp
- https://www.w3schools.com/howto/howto_js_filter_lists.asp
- https://dev.to/am20dipi/how-to-build-a-simple-search-bar-in-javascript-4onf
*/