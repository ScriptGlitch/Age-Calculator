class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>SG | Age Calculator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> <link href="https://fonts.googleapis.com/css2?family=Satisfy&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
    <link rel="stylesheet" href="Assets/CSS/main.css">
    <link rel="stylesheet" href="Assets/CSS/scroll-top-bottom.css">
    <link rel="stylesheet" href="Assets/CSS/tool-basic.css">
    <link rel="stylesheet" href="Assets/CSS/Tools/Calculators/Age-Calculator.css">
</head>
<body>
    <header class="header">
        <div class="logo">
            <a href="index.html">Age <span class="h-t-n">Calculator</span></a>
        </div>
<button class="menu-toggle" id="menuToggle">
    <i class="fas fa-bell"></i>
</button>
<div class="off-canvas-menu" id="offCanvasMenu">
    <span class="close-menu" id="closeMenu">
        <i class="fas fa-times"></i>
    </span>
    <p class="Off-Menu-txt">Updates</p>
    <div class="main-content">
<div class="container">    
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Zodiac Sign Calculation
            </div>
            <div class="description">
                Users can now find out their zodiac sign based on their birth date, along with detailed zodiac characteristics.
            </div>
        </div>
        <div class="date">Dec 10, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag bug">Bug Fix</div>
            <div class="title">
                Fixed Date Input Error
            </div>
            <div class="description">
                Resolved an issue where the date input would not accept certain formats, ensuring a smoother user experience.
            </div>
        </div>
        <div class="date">Nov 28, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Next Birthday Countdown
            </div>
            <div class="description">
                A countdown feature has been added to track the time remaining until your next birthday, including days, hours, and minutes.
            </div>
        </div>
        <div class="date">Nov 27, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Age in Animal Years
            </div>
            <div class="description">
                Discover how old you would be in animal years, comparing your age to various species like dogs, cats, and more.
            </div>
        </div>
        <div class="date">Nov 20, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Age on Other Planets
            </div>
            <div class="description">
                Find out how old you would be on different planets, with calculations based on their orbital periods.
            </div>
        </div>
        <div class="date">Oct 18, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag bug">Bug Fix</div>
            <div class="title">
                Resolved Calculation Discrepancies
            </div>
            <div class="description">
                Fixed discrepancies in age calculations that occurred under specific date conditions, ensuring accurate results.
            </div>
        </div>
        <div class="date">Oct 15, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Life Expectancy Comparison
            </div>
            <div class="description">
                Compare your age with average life expectancy statistics for different countries and regions.
            </div>
        </div>
        <div class="date">Oct 09, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Total Heartbeats and Breaths Count
            </div>
            <div class="description">
                Calculate the estimated total number of heartbeats and breaths you've had since birth.
            </div>
        </div>
        <div class="date">Oct 05, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Milestones Tracker
            </div>
            <div class="description">
                Track significant milestones in your life, such as turning 500, 1000, or 10,000 days old.
            </div>
        </div>
        <div class="date">Oct 01, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag event">Feature Added</div>
            <div class="title">
                Fun Facts About Your Age
            </div>
            <div class="description">
                Get interesting facts about your age, including the number of birthdays celebrated and leap years experienced.
            </div>
        </div>
        <div class="date">Sec 27, 2024</div>
    </div>
    <div class="event">
        <div class="details">
            <div class="tag notice">Notice</div>
            <div class="title">
                Age Calculator Launched
            </div>
            <div class="description">
                We are thrilled to announce the launch of the Age Calculator, a comprehensive tool designed to calculate your age in various units and provide fascinating insights about your life!
            </div>
        </div>
        <div class="date">Sep 15, 2024</div>
    </div>
</div>
</div>
    <div class="sidebar-f">
        <div class="button-container">
            <a href="#" class="version-button">
                <div class="left">version</div>
                <div class="right">1.3.1</div>
            </a>
            <a href="#" class="update-button">
                <div class="left">Last Update</div>
                <div class="right">Dec 10, 2024</div>
            </a>
            <a href="#" class="license-button">
                <div class="left">License</div>
                <div class="right">MIT</div>
            </a>
        </div>
    </div>
</div>
</header>
    <div class="wrapper-X">
        <div class="scroll-container-X">
            <div class="scroll-content-X"></div>
        </div>
    </div>
</body>
</html>
`;
  }
}
customElements.define("header-x", MyHeader);
const radioInputs = document.querySelectorAll('input[type="radio"]');
const contentSections = document.querySelectorAll(".content-section");
radioInputs.forEach((input) => {
  input.addEventListener("change", function () {
    const selectedValue = this.value;
    contentSections.forEach((section) => {
      if (section.id === `${selectedValue}-content`) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var headTxt = document.querySelectorAll(".Head-txt");
  var tree = document.querySelectorAll(".tree");
  tree.forEach(function (item) {
    item.style.display = "none";
  });
  headTxt.forEach(function (txt) {
    txt.addEventListener("click", function () {
      var siblingTree = this.nextElementSibling;
      siblingTree.style.display =
        siblingTree.style.display === "none" ? "block" : "none";
    });
  });
  var toggles = document.querySelectorAll(".tree .toggle");
  toggles.forEach(function (toggle) {
    var nestedList = toggle.querySelector("ul");
    if (nestedList) {
      nestedList.style.display = "none";
      toggle.classList.remove("open");
    }
    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      nestedList = this.querySelector("ul");
      if (nestedList) {
        nestedList.style.display =
          nestedList.style.display === "none" ? "block" : "none";
        this.classList.toggle("open");
      }
    });
    toggle.addEventListener("mousedown", function (event) {
      event.preventDefault();
    });
  });
  document.querySelectorAll(".tree li:not(.toggle)").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event from affecting parent toggle
    });
  });
});
document
  .querySelector(".scroll-container-X")
  .addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      this.scrollLeft += 100;
    } else {
      this.scrollLeft -= 100;
    }
    event.preventDefault();
  });
const items = document.querySelectorAll(".item-X");
items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((item) => item.classList.remove("active-X"));
    this.classList.add("active-X");
  });
});
document.getElementById("menuToggle").addEventListener("click", function () {
  const offCanvasMenu = document.getElementById("offCanvasMenu");
  offCanvasMenu.classList.add("open");
  document.body.classList.add("no-scroll");
});
document.getElementById("closeMenu").addEventListener("click", function () {
  const offCanvasMenu = document.getElementById("offCanvasMenu");
  offCanvasMenu.classList.remove("open");
  document.body.classList.remove("no-scroll");
});
