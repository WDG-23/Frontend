// Select the h1 element inside the .hero-content div and log it to the console
const heading = document.querySelector(".hero-content h1");
console.log(heading);

// Select all a elements inside the .nav-list and log them to the console
const navList = document.querySelectorAll(".nav-list a");
console.log(navList);

// Select the .btn element and log it to the console
const btn = document.querySelector(".btn");
console.log(btn);

// Change the background color of the .header element to #b5651d
const header = document.querySelector(".header");
header.style.backgroundColor = "#b5651d";

// Change the font size of the h1 element inside the .hero-content div to 3rem
heading.style.fontSize = "3rem";

// Change the text color of all a elements inside the .nav-list to #faf0e6
for (const link of navList) {
  link.style.color = "#faf0e6";
}

// Alternative
// navList.forEach((link) => (link.style.color = "#faf0e6"));

// Select the .hero-content div and add a new p element with the text "Open daily from 7 AM to 9 PM." inside it
const heroContent = document.querySelector(".hero-content");
const newPara = document.createElement("p");

newPara.textContent = "Open daily from 7 AM to 9 PM.";

heroContent.appendChild(newPara);
