window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("find-me").addEventListener("click", geoFindMe);
    document.getElementById("shareBtn").addEventListener("click", share);
    
    var googleURL="";
    var titletoshare="";
    const status = document.querySelector('#status');
})
function geoFindMe() {

  const mapLink = document.querySelector('#map-link');
  const iframe= document.querySelector('#iframe');
  status.textContent="";
  mapLink.href = '';
  mapLink.textContent = '';
  iframe.href = '';


  function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        status.textContent = '';
        mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        iframe.src = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`
        iframe.classList.remove("d-none")
        googleURL = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`;
        titletoshare= 'Latitude: ${latitude} °, Longitude: ${longitude}'
      }


  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
ame.classList.remove("d-none")
}

  function share(){
      const sharedata= {
      title:'my geo location',
      text: 'titletoshare',
      url: googleURL
        }
        const btn = document.querySelector('#shareBtn'); 
        btn.addEventListener('click', async () => {
          try {
          await navigator.share(sharedata);
          status.textContent = 'מיקום שותף בהצלחה';
          } catch (err) {
          }

        })
      }
