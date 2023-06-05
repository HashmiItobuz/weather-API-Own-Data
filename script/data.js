const inputValue = document.getElementById("inputBox");
const placeName = document.getElementById("PlaceName");
const locationTemp = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const weatherImg = document.getElementById("weatherImage");
const weatherDescription = document.querySelector(".weather-description");
let value = "";
const currWidth = weatherImg.clientWidth;
weatherDescription.classList.add("hidden");

inputValue.addEventListener("keyup", (e) => {
    value = inputValue.value;
    if (e.key === "Enter" && inputValue.value !== "") {
        getData();
    }
});

async function getData() {
    try {
        let res = await fetch(`http://localhost:7000/weather`).then((res) => res.json());

        weatherImg.classList.add("weather-img");
        weatherDescription.classList.remove("hidden");
        locationTemp.classList.remove("error-font-size");
        weatherImg.classList.remove("error-img");

        for (let i = 0; i <= res.location.length; i++) {
            if (value === res.location[i].name) {
                placeName.innerHTML = res.location[i].name;
                locationTemp.innerHTML = res.location[i].temp_c + "<sup>o</sup>";
                feelsLike.innerHTML = "Feels " + res.location[i].feelslike_f + "<sup>o</sup>";

                if (res.location[i].temp_c >= 40) {
                    weatherImg.src = "images/sunny.png";
                }
                else if (res.location[i].temp_c > 20) {
                    weatherImg.src = "images/sun_behind.png";
                }
                else {
                    weatherImg.src = "images/rain.png";
                }
                inputValue.value = "";
                break;
            }
            else {
                continue;
            }
        }
    } catch {
        placeName.innerHTML = "";
        weatherImg.src = "images/cloud.png";
        locationTemp.innerHTML = "No Data Found";
        feelsLike.innerHTML = "";
        weatherDescription.classList.add("hidden");
        inputValue.value = "";
        locationTemp.classList.add("error-font-size");
        weatherImg.classList.add("error-img");
    }
}





