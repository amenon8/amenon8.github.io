// ===== Activity 5: Dynamic project content =====

// 1. Project data stored in a JavaScript array.
//    Each project is an object with the same set of properties.
const projects = [
  {
    title: "Speak&Sync",
    description: "An AI tool that summarizes real-time customer service conversations. Built at New Hacks 2024.",
    image: "/assets/img/speaksync.png",
    imageAlt: "Speak&Sync screenshot",
    tools: "Python, spaCy, React, JavaScript, HTML",
    highlights: [
      "Built the frontend in React to display live conversation summaries.",
      "Used spaCy NLP to generate concise, actionable summaries, speeding up information retrieval for support agents."
    ],
    github: "https://github.com/amenon8/newHacks2024"
  },
  {
    title: "Tech-Friendly Student Spaces",
    description: "A redesign of three university study rooms to better support students at Chestnut Residence.",
    image: "/assets/img/study-spaces.jpg",
    imageAlt: "Student spaces redesign",
    tools: "CAD, Spatial Design",
    highlights: [
      "Led the redesign of three study rooms, translating real-world spatial constraints into structured design requirements and layouts.",
      "Modeled and iterated room layouts with a focus on precision, scale, and usability.",
      "January 2024 - April 2024 | Academic Design Project, Toronto, ON"
    ],
    github: ""
  },
    {
    title: "Multi-City Transit Map",
    description: "A mapping application for navigating multiple cities, built in C++ with a team of three.",
    image: "/assets/img/transit-map.png",
    imageAlt: "Transit mapping application screenshot",
    tools: "C++",
    highlights: [
      "Collaborated with a team of three to design and build an interactive multi-city map.",
      "Implemented features for exploring and navigating city map data."
    ],
    github: ""
  },
  {
    title: "Art Image Classifier",
    description: "A deep learning model that classifies artwork images, trained on a large art dataset.",
    image: "/assets/img/art-classifier.png",
    imageAlt: "Art image classifier results",
    tools: "Python, PyTorch",
    highlights: [
      "Trained a deep learning image classifier on a large dataset of artwork.",
      "Evaluated model performance and iterated on the architecture to improve accuracy."
    ],
    github: ""
  },
];

const INITIAL_COUNT = 2; // how many projects to show when the page loads
let shownCount = 0;      // how many projects are currently on the page

// 2. Builds the HTML for one project card, using the same Materialize
//    card structure as the original static cards.
function createProjectCard(project) {
  // Turn the highlights array into <li> items
    let highlightItems = "";
  for (let i = 0; i < project.highlights.length; i++) {
    highlightItems += "<li>" + project.highlights[i] + "</li>";
  }

  // Only add the GitHub button if the project has a link
  const githubButton = project.github
    ? `<div class="card-action">
         <a aria-label="Visit the GitHub repo for ${project.title}" href="${project.github}"
           target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
           <i class="fa fa-github"></i></a>
       </div>`
    : "";

  return `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.imageAlt}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i
              class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i
              class="mdi-navigation-close right"></i></span>
          <ul>
            <li><b>Tools:</b> ${project.tools}</li>
            ${highlightItems}
          </ul>
          ${githubButton}
        </div>
      </div>
    </div>`;
}

// 3. Reads the next `count` projects from the array and inserts them
//    into the #projects-container div.
function renderProjects(count) {
  const container = document.getElementById("projects-container");
  const nextProjects = projects.slice(shownCount, shownCount + count);

  nextProjects.forEach(function (project) {
    container.insertAdjacentHTML("beforeend", createProjectCard(project));
  });

  shownCount += nextProjects.length;
  updateLoadMoreButton();
}

// 4. Hides the Load More button once every project is displayed.
function updateLoadMoreButton() {
  const button = document.getElementById("load-more-btn");
  if (shownCount >= projects.length) {
    button.style.display = "none";
  }
}

// 5. Load More shows all remaining projects. No page reload happens
//    because we only change the DOM; we never navigate anywhere.
document.getElementById("load-more-btn").addEventListener("click", function () {
  renderProjects(projects.length - shownCount);
});

// Show the first two projects when the page loads
renderProjects(INITIAL_COUNT);