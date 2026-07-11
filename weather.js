module.exports = async (req, res) => {
    const { lat, lon, city } = req.query;
    const apiKey = process.env.WEATHER_API;

    if (!apiKey) {
        return res.status(500).json({ error: "Weather API key is not configured on the server." });
    }

    let weatherUrl;
    let uvUrl;

    if (lat && lon) {
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=vi`;
        uvUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
    } else {
        const targetCity = city || "Ho Chi Minh City";
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(targetCity)}&appid=${apiKey}&units=metric&lang=vi`;
    }

    try {
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            const errorData = await weatherResponse.json();
            console.error("OpenWeatherMap API Error:", errorData);
            return res.status(weatherResponse.status).json({ error: `Failed to fetch weather data: ${errorData.message}` });
        }
        const weatherData = await weatherResponse.json();

        if (!uvUrl) {
            const cityLat = weatherData.coord.lat;
            const cityLon = weatherData.coord.lon;
            uvUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
        }

        let uvData = { current: { uvi: undefined } };
        try {
            const uvResponse = await fetch(uvUrl);
            if (uvResponse.ok) {
                uvData = await uvResponse.json();
            }
        } catch (uvError) {
            console.error('Failed to fetch UV index:', uvError);
        }
        
        const responseData = { ...weatherData, uvIndex: uvData.current.uvi };
        res.status(200).json(responseData);

    } catch (error) {
        console.error("Error in weather API function:", error);
        res.status(500).json({ error: "An internal server error occurred." });
    }
};