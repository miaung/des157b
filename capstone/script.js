gsap.registerPlugin(ScrollTrigger);
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// first paragraph phrase

// set opacities
gsap.set(".phrase-1", { opacity: 1 });
gsap.set(".phrase-2", { opacity: 0 });
 
gsap.timeline({
  scrollTrigger: {
    trigger: ".fade-combo",
    start: "top center",
    end: "+=800",
    scrub: true,
    pin: true
  }
})

// fade second phase in
.to(".phrase-2", { opacity: 1, x: 0, duration: 1 }, "+=0.1")
// fade entire sentence out
.to(".fade-combo", { opacity: 0, duration: 1 }, "+=0.3");

// other paragraphs
document.querySelectorAll('.fade-text').forEach(el => {
const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "+=800", 
      scrub: true,
      pin: true
    }
  });

  tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1 })
    .to(el, { opacity: 0, duration: 1 }, "+=0.3"); 
});

// slider fade in
document.querySelectorAll('.fade-slider').forEach(el => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "30% center",
      end: "+=300", 
      scrub: true,
      pin: true,
      pinSpacing: false
    }
  });

  tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1 });  
});

// Capture the slider element
var slider = document.getElementById("myRange");

// Function to update the outcome content based on the slider value
function updateOutcome() {
  var outcomeImage = document.querySelector('.outcome img');
  var outcomeText = document.querySelector('.outcome p');
  var sliderValue = slider.value; // Get the current slider value

  // Change image and text based on the slider value
  if (sliderValue == 0) {
    outcomeImage.src = "images/outcome0.jpg"; 
    outcomeText.textContent = "Your data is protected and secure with total control and privacy, but at the cost of missing out on personalized experiences and benefits.";
  } else if (sliderValue == 25) {
    outcomeImage.src = "images/outcome25.jpg"; 
    outcomeText.textContent = "You selectively share data for personalized experiences and some benefits, while still maintaining control over most of your personal data.";
  } else if (sliderValue == 50) {
    outcomeImage.src = "images/outcome50.jpg"; 
    outcomeText.textContent = "You balance privacy with sharing some data for personalized services and benefits, but are in some control over your information.";
  } else if (sliderValue == 75) {
    outcomeImage.src = "images/outcome75.jpg"; 
    outcomeText.textContent = "You trade most of your privacy for financial bonuses and personalized services, but with limited control over your data and risk of misuse.";
  } else if (sliderValue == 100) {
    outcomeImage.src = "images/outcome100.jpg"; 
    outcomeText.textContent = "You fully monetize your data, receiving a competitive salary and housing, but at the cost of having every action and movement exploited.";
  }
}

// Initial call to update the outcome based on the starting value of the slider
updateOutcome();

// Add an event listener to detect slider changes
slider.addEventListener('input', updateOutcome); // 'input' fires immediately as slider moves

