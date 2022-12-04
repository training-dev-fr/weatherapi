exports.weather = (req, res, next) => {
    const weather = getRandomWeather(req.params.city);
    if (weather.success) {
        res.status(200).json(weather);
    } else {
        res.status(404).json(weather);
    }
}

exports.weatherAll = (req, res, next) => {
    let weather = [];
    for (let city of req.body.cities) {
        weather.push(getRandomWeather(city));
    }
    if (weather.some(w => w.success)) {
        res.status(200).json(weather);
    } else {
        res.status(404).json(weather);
    }
}

const cities = ["Paris", "Londres", "Berlin", "Lille", "Monpellier", "Marseille", "Gant", "Dublin", "Nantes", "Dijon"];
const weather = ["Sun", "Cloud", "Rain", "SunCloud", "Thunder"];
const tempRange = { min: 5, max: 25 };

function getRandomWeather(city) {
    console.log(cities);
    if (cities.some(c => c == city)) {
        return {
            success: true,
            data: {
                city: city,
                weather: weather[Math.floor(Math.random() * 5)],
                temp: Math.floor(Math.random() * (tempRange.max - tempRange.min)) + tempRange.min
            }
        }
    } else {
        return {
            success: false,
            error: "Ville introuvable"
        }
    }
}