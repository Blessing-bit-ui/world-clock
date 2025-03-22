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
