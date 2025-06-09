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
    outcomeImage.src = "path/to/your/image1.jpg"; // Replace with your actual image path
    outcomeText.textContent = "Your data is highly protected.";
  } else if (sliderValue == 25) {
    outcomeImage.src = "path/to/your/image2.jpg"; // Replace with your actual image path
    outcomeText.textContent = "Mostly private, but some data is shared.";
  } else if (sliderValue == 50) {
    outcomeImage.src = "path/to/your/image3.jpg"; // Replace with your actual image path
    outcomeText.textContent = "Balanced privacy and data sharing.";
  } else if (sliderValue == 75) {
    outcomeImage.src = "path/to/your/image4.jpg"; // Replace with your actual image path
    outcomeText.textContent = "Little privacy, most of your data is sold.";
  } else if (sliderValue == 100) {
    outcomeImage.src = "path/to/your/image5.jpg"; // Replace with your actual image path
    outcomeText.textContent = "No privacy left, your data is fully monetized.";
  }
}

// Initial call to update the outcome based on the starting value of the slider
updateOutcome();

// Add an event listener to detect slider changes
slider.addEventListener('input', updateOutcome); // 'input' fires immediately as slider moves

