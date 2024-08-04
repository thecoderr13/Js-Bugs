const p2=document.getElementById("p2");
const mercury=document.getElementById("mercury");
p2.addEventListener('mouseover',()=>{mercury.classList.add('transformed1');});
p2.addEventListener('mouseout',()=>{mercury.classList.remove('transformed1');});

const p3=document.getElementById("p3");
const venus=document.getElementById("venus");
p3.addEventListener('mouseover',()=>{venus.classList.add('transformed2');});
p3.addEventListener('mouseout',()=>{venus.classList.remove('transformed2');});

const p4=document.getElementById("p4");
const earth=document.getElementById("earth");
p4.addEventListener("mouseover",()=>{earth.classList.add("transformed3");});
p4.addEventListener("mouseout",()=>{earth.classList.remove("transformed3")});

const p5=document.getElementById("p5");
const mars=document.getElementById("mars");
p5.addEventListener("mouseover",()=>{mars.classList.add("transformed4");});
p5.addEventListener("mouseout",()=>{mars.classList.remove("transformed4");});

const p6=document.getElementById("p6");
const jupiter=document.getElementById("jupiter");
p6.addEventListener("mouseover",()=>{jupiter.classList.add("transformed5");});
p6.addEventListener("mouseout",()=>{jupiter.classList.remove("transformed5");});

const p7=document.getElementById("p7");
const saturn=document.getElementById("saturn");
p7.addEventListener("mouseover",()=>{saturn.classList.add("transformed6");});
p7.addEventListener("mouseout",()=>{saturn.classList.remove("transformed6");});

const p8=document.getElementById("p8");
const uranus=document.getElementById("uranus");
p8.addEventListener("mouseover",()=>{uranus.classList.add("transformed7");});
p8.addEventListener("mouseout",()=>{uranus.classList.remove("transformed7");});

const p9=document.getElementById("p9");
const neptune=document.getElementById("neptune");
p9.addEventListener("mouseover",()=>{neptune.classList.add("transformed8");});
p9.addEventListener("mouseout",()=>{neptune.classList.remove("transformed8");});

document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('inner');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, {
      threshold: 0.5 // Trigger animation when 50% of the element is in view
    });
  
    observer.observe(image);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const image2 = document.getElementById('outer');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible1');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, {
      threshold: 0.5 // Trigger animation when 50% of the element is in view
    });
  
    observer.observe(image2);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const swiper = document.getElementById('main_title');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('swipe');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, {
      threshold: 0.5 // Trigger animation when 50% of the element is in view
    });
  
    observer.observe(swiper);
  });
  