// check if the js working 
console.log('Js working');




// first extract all the elements fromt the dom 



const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

// get the container
const contain = document.getElementById('contain');

// get year
const year = document.getElementById('year');

// get the image 
const loading = document.getElementById('loader');

// get the current time 
const curYear = new Date().getFullYear();
year.innerHTML = `${curYear + 1}`;
// get the new year time 
const newYearTime = new Date(`January 01 ${curYear+1} 00:00:00`);

// countdown function 
function getCountDown() {
    // get the curtime 
    const curTime = new Date();
    
    // get the different in miliseconds 
    const diff = newYearTime - curTime;
    
    // get the remaining days mins and hours and secons 
    const d = Math.floor(diff / 1000 / 60 / 60 / 24 );
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;
  
    // hardcoding the values
    days.innerHTML = d < 10 ? `0` + d: d;
    hours.innerHTML = h < 10 ? `0` + h: h;
    mins.innerHTML = m < 10 ? `0` + m: m;
    secs.innerHTML = s < 10 ? `0` + s: s;
  }

  // add spinner 
  setTimeout(() => {
     loading.remove();
     contain.style.display = `flex`;;
  }, 1000);

  // calling the function in every single second
setInterval(getCountDown,1000);