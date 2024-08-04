function updateSatelliteData(tleLine1, tleLine2,x,y) {
    const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
    const now = new Date();

    // Propagate satellite position
    const positionAndVelocity = satellite.propagate(satrec, now);
    const positionEci = positionAndVelocity.position;

    // Check if propagation was successful
    if (!positionEci) {
        console.error('Failed to propagate satellite position.');
        return;
    }

    // Set observer's position (latitude, longitude, altitude in kilometers)
    const observerGd = {
        longitude: satellite.degreesToRadians(72.77349), // San Francisco, CA
        latitude: satellite.degreesToRadians(21.13638),
        height: 0.013 
    };

    // Calculate GMST
    const gmst = satellite.gstime(now);

    // Calculate satellite's position in geodetic coordinates
    const positionGd = satellite.eciToGeodetic(positionEci, gmst);

    // Calculate look angles
    const positionEcf = satellite.eciToEcf(positionEci, gmst);
    const lookAngles = satellite.ecfToLookAngles(observerGd, positionEcf);

    // Convert height to kilometers and display the results
    document.getElementById(x).textContent = (positionGd.height / 1000).toFixed(2); // Altitude in kilometers
  
    document.getElementById(y).textContent = (lookAngles.rangeSat / 1000).toFixed(2); // Distance in kilometers
}

// Update satellite data on page load
window.addEventListener('load', updateSatelliteData( "1 20580U 90037B   24189.23967556  .00004651  00000+0  21320-3 0  9997",
     "2 20580  28.4668 210.7544 0002314 247.6974 112.3374 15.18001036680340","a1","d1"));
     window.addEventListener('load',updateSatelliteData("1 27424U 02022A   24189.19743312  .00001288  00000+0  28159-3 0  9995","2 27424  98.3311 138.6442 0002179  70.7419  42.0996 14.59447358179637","a2","d2"));
     window.addEventListener('load',updateSatelliteData("1 28376U 04026A   24188.85196267  .00001261  00000+0  28031-3 0  9991","2 28376  98.2514 133.5530 0002101  55.4676 304.6721 14.58680532 62546","a3","d3"));
     window.addEventListener('load',updateSatelliteData("1 28485U 04047A   24188.93759428  .00012159  00000+0  52815-3 0  9993","2 28485  20.5573  39.7464 0007755 171.8780 188.1783 15.19671649 77188","a4","d4"));
     window.addEventListener('load',updateSatelliteData("1 25994U 99068A   24189.17541264  .00000656  00000+0  14649-3 0  9998","2 25994  98.0473 252.0758 0000951 342.5640 101.7880 14.59847743306084","a5","d5"));
     window.addEventListener('load',updateSatelliteData("1 42915U 17047A   24188.90361934 -.00000100  00000+0  00000+0 0  9998","2 42915   3.6243 345.0674 0017493 118.0066 136.1272  1.00272167 25225","a6","d6"));
    var sub=document.getElementById("sub");
    var clr=document.getElementById("clr");
   var t1=document.getElementsByName("tle1")[0];
   var t2=document.getElementsByName("tle2")[0];
  
   sub.addEventListener('click', function() {
    updateSatelliteData(t1.value, t2.value, 'a', 'd');
});
    function clearValue(){
        t1.value="";
        t2.value="";
        const a=document.getElementById("a");
        const d=document.getElementById("d");
        a.value="";
        d.value="";
    }
    clr.addEventListener("click",clearValue);

   

    document.addEventListener("DOMContentLoaded", function() {
        const box = document.querySelector('#classification');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    box.classList.add('visible');
                    observer.unobserve(box); // Optional: Stop observing after animation
                }
            });
        });
    
        observer.observe(box);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const big = document.getElementById('big_orbit');
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animeorbit');
              observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
          });
        }, {
          threshold: 0.5 // Trigger animation when 50% of the element is in view
        });
      
        observer.observe(big);
      });

      document.addEventListener("DOMContentLoaded", function() {
        const use = document.getElementById('big_use');
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animeuse');
              observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
          });
        }, {
          threshold: 0.5 // Trigger animation when 50% of the element is in view
        });
      
        observer.observe(use);
      });
    
    
