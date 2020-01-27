

  
function weatherData(){
    let city = $("#weatherForm input[name=city]").val()


    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city +',usa&appid=d1a22c8d1a1c204ac9c2aee8f7799f8c', function(data){
        let forecast = data.weather[0].description
        let temp_max = data.main.temp_max
        let temp_min = data.main.temp_min
        let humidity = data.main.humidity

        let highf = parseFloat((temp_max) - 273.15) * 1.8 + 32
        let lowf =  parseFloat((temp_min) - 273.15) * 1.8 + 32


        $("#forecast".toString()).text(forecast)
        $("#temp_max".toString()).text(highf.toFixed(0) + "\xB0" + 'F')
        $("#temp_min".toString()).text(lowf.toFixed(0) + "\xB0" + 'F')
        $("#humidity".toString()).text(humidity + "%")
    })



}
