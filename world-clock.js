function updateCurrentDate() {
  let losAngelesDateElement = document.querySelector("#los-angeles");
  let losAngelesDate = moment.tz("America/Los_Angeles").format("LL");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  let losAngelesTime = moment().tz("America/Los_Angeles").format("h:mm:ss");
  losAngelesDateElement.innerHTML = losAngelesDate;
  losAngelesTimeElement.innerHTML = losAngelesTime;

  let parisDateElement = document.querySelector("#paris");
  let parisDate = moment.tz("Europe/Paris").format("LL");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisTime = moment().tz("Europe/Paris").format("h:mm:ss");
  parisDateElement.innerHTML = parisDate;
  parisTimeElement.innerHTML = parisTime;
}
updateCurrentDate();
setInterval(updateCurrentDate, 1000);

 function updateCities(event) {
   let city = event.target.value;
   if (city == "current") {
     city = moment.tz.guess();
   }
   let currentUpdate = document.querySelector("#details");
   let timeElement = moment.tz(city).format("h:mm:ss");
   let dateElement = moment.tz(city).format("LL");

   currentUpdate.innerHTML = `<div class="details">
        <div class="cityNameDate">
        <div class="city-name">${city.replace("_", " -").split("/")[1]}</div>
        <div class="city-date">${city}</div>
        </div>
        <div class="city-time"id=>${timeElement}</div> 
       </div>`;
 }
 let selectCitiesElement = document.querySelector("#selectedCities");
 selectedCities.addEventListener("change", updateCities);
