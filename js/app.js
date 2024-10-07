let paris_time = document.querySelector("#parisTime")
let paris_date = document.querySelector("#parisDate")

let yangon_time = document.querySelector("#yangonTime")
let yangon_date = document.querySelector("#yangonDate")

let tokyo_time = document.querySelector("#tokyoTime")
let tokyo_date = document.querySelector("#tokyoDate")

let london_time = document.querySelector("#londonTime")
let london_date = document.querySelector("#londonDate")

function ChangeTime(){
    let date_paris = moment().tz('Europe/Paris').format("Do(ddd) MMMM, YYYY")
    paris_date.innerHTML = date_paris;

    let time_paris = moment().tz('Europe/Paris').format("hh : mm : ss [<small>]A[</small>]")

    paris_time.innerHTML = time_paris;
}

setInterval(ChangeTime, 1000)