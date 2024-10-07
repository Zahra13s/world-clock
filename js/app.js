function ChangeCity(event){
    cityDisplay.style.display = "flex"
    event.preventDefault()
    if(event.target.value.length > 0){
        let cityTimeZone = event.target.value
        let cityName = event.target.value.split("/")[1]
        let city = event.target.value.replace("_", " ").split("/")[1];
        let time = moment().tz(cityTimeZone).format("hh : mm : ss [<small>]A[</small>]")
        let date = moment().format("Do(ddd) MMMM, YYYY")
        cityDisplay.innerHTML = 
        `
        <div class="paris city">
            <h1 class="name">${city}</h1>
            <hr />
            <img src="./images/${cityName}.png" alt="" class="monument" />
            <h2 class="clock" id="parisTime">${time}</h2>
            <h4 class="date" id="parisDate">${date}</h4>
          </div>
        `
        cities_display.style.display = "none"
    }
    
}

function ChangeTime(){
    let date = moment().format("Do(ddd) MMMM, YYYY")
    paris_date.innerHTML = date;
    yangon_date.innerHTML = date;
    tokyo_date.innerHTML = date;
    london_date.innerHTML = date;

    let time_paris = moment().tz('Europe/Paris').format("hh : mm : ss [<small>]A[</small>]")
    paris_time.innerHTML = time_paris;

    let time_yangon = moment().tz('Asia/Rangoon').format("hh : mm : ss [<small>]A[</small>]")
    yangon_time.innerHTML = time_yangon;

    let time_tokyo = moment().tz('Asia/Tokyo').format("hh : mm : ss [<small>]A[</small>]")
    tokyo_time.innerHTML = time_tokyo;

    let time_london = moment().tz('Etc/GMT-1').format("hh : mm : ss [<small>]A[</small>]")
    london_time.innerHTML = time_london;
}

let cities_display = document.querySelector("#cities_display");

let paris_time = document.querySelector("#parisTime")
let paris_date = document.querySelector("#parisDate")

let yangon_time = document.querySelector("#yangonTime")
let yangon_date = document.querySelector("#yangonDate")

let tokyo_time = document.querySelector("#tokyoTime")
let tokyo_date = document.querySelector("#tokyoDate")

let london_time = document.querySelector("#londonTime")
let london_date = document.querySelector("#londonDate")

let selectCities = document.querySelector("#cities")
let cityDisplay = document.querySelector("#city_display")

setInterval(ChangeTime, 1000)
selectCities.addEventListener("change", ChangeCity)


