alert("You are a young adult that has just graduated college. As you begin job searching and caring about your online presence, you become curious about how much of your data is out there for the world to see. You start browsing websites on current privacy laws and come across this site that explores a possible future with unusual privacy protections. Read through this website and see what information you can learn through your experience. Scroll to continue reading.");

gsap.registerPlugin(ScrollTrigger);
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// first paragraph phrase

//set opacities
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

//fade second phase in
.to(".phrase-2", { opacity: 1, x: 0, duration: 1 }, "+=0.1")
//fade entire sentence out
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
  const tl = gsap.timeline
  ({
    scrollTrigger: {
      trigger: el,
      start: "30% center",
      end: "+=800", 
      scrub: true,
      pin: true,
      pinSpacing: false
    }
  });

  tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1 });  
});

// slider
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

