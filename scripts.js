var city = "Lockport"; 

$.getJSON("https://dog.ceo/api/breeds/image/random",
 function(data){
    console.log(data);
    var dogImage = data.message; 
    $('.randomDogImage').attr('src', dogImage); 
    /*var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    $('.icon').attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp + "°F");
    $('.realFeel').append(realFeel + "°F");
    $('.wind').append(wind+ " mph");*/
});