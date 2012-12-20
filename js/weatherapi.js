$(document).ready(function(){
	
	var images;
	var key='b803ccfa0af4a499'; //wunderground Key ID
	
	var url= 'http://api.wunderground.com/api/b803ccfa0af4a499/conditions/q/CA/San_Francisco.json'+key+'&format=json&nojsoncallback=1'; 

		$.ajax({ url : "http://api.wunderground.com/api/b803ccfa0af4a499/geolookup/conditions/q/CA/San_Francisco.json", 
			dataType : "jsonp", 
			success : function(parsed_json) { 

		 var location = parsed_json['location']['city']; 
		 var temp_f = parsed_json['current_observation']['temp_f']; 
		 var relative_humidity=parsed_json['current_observation']['relative_humidity'];

		//alert("Current conditions in " + location + " are: " + temp_f + "and: "+ relative_humidity); 

		$('#Data').append(" " + location + "   " + temp_f );
		$('#img').prepend('','');


		 images = { "reallyWarm":"img/1.png",
		 			"warm": "img/2.png",
		 			"cool": "img/3.png" ,
					"cold": "img/4.png",
					"reallyCold": "img/5.png",

					"rainWarm": "img/6.png",
					"rainCool": "img/7.png"
				  };

		console.log(images);

		//temp_f=70;
		//relative_humidity=60;

		if(temp_f<=0){

			$('.weather').attr("src", images.reallyCold);

		}else if(temp_f>0 && temp_f<=40){

			$('.weather').attr("src", images.cold);

		
		}else if(temp_f>40 && temp_f<=60){

			$('.weather').attr("src", images.cool);

				if(relative_humidity>=40){

				$('.weather').attr("src", images.rainCool);
			}


		
		}else if (temp_f>60 && temp_f<=80){

			$('.weather').attr("src", images.warm);

				if(relative_humidity>=40){

				$('.weather').attr("src", images.rainWarm);
			}


		}else if (temp_f>80 && temp_f<=100){

			$('.weather').attr("src", images.reallyWarm);

		}

		}
});

});

				
		
	
/* example city: San Francisco json

http://api.wunderground.com/api/b803ccfa0af4a499/conditions/q/CA/San_Francisco.json

{ "response": { "version": "0.1", 
				  "termsofService": "http://www.wunderground.com/weather/api/d/terms.html", 
				  "features": { "conditions": 1 } }, 
				  "current_observation": { "image": { "url": "http://icons-ak.wxug.com/graphics/wu2/logo_130x80.png", 
				  						   "title": "Weather Underground", "link": "http://www.wunderground.com" }, 
				  						   "display_location": { "full": "San Francisco, CA", "city": "San Francisco", "state": "CA", "state_name": "California", "country": "US", "country_iso3166": "US", "zip": "94101", 
				  						                         "latitude": "37.77500916", "longitude": "-122.41825867", "elevation": "47.00000000" }, 
				  						   "observation_location": { "full": "SOMA - Near Van Ness, San Francisco, California", "city": "SOMA - Near Van Ness, San Francisco", "state": "California", "country": "US", "country_iso3166": "US", "latitude": "37.773285", "longitude": "-122.417725", "elevation": "49 ft" }, 
				  						   "estimated": {}, 
				  						   "station_id": "KCASANFR58", "observation_time": "Last Updated on June 27, 5:27 PM PDT", "observation_time_rfc822": "Wed, 27 Jun 2012 17:27:13 -0700", "observation_epoch": "1340843233", "local_time_rfc822": "Wed, 27 Jun 2012 17:27:14 -0700", "local_epoch": "1340843234", "local_tz_short": "PDT", "local_tz_long": "America/Los_Angeles", "local_tz_offset": "-0700", 
				  						   "weather": "Partly Cloudy", 
				  						   "temperature_string": "66.3 F (19.1 C)", 
				  						   "temp_f": 66.3, 
				  						   "temp_c": 19.1, 
				  						   "relative_humidity": "65%", 
				  						   "wind_string": "From the NNW at 22.0 MPH Gusting to 28.0 MPH", 
				  						   "wind_dir": "NNW", 
				  						   "wind_degrees": 346, 
				  						   "wind_mph": 22.0, 
				  						   "wind_gust_mph": "28.0", 
				  						   "wind_kph": 35.4, 
				  						   "wind_gust_kph": "45.1", 
				  						   "pressure_mb": "1013", 
				  						   "pressure_in": "29.93", 
				  						   "pressure_trend": "+", 
				  						   "dewpoint_string": "54 F (12 C)", 
				  						   "dewpoint_f": 54, "dewpoint_c": 12, 
				  						   "heat_index_string": "NA", 
				  						   "heat_index_f": "NA", 
				  						   "heat_index_c": "NA", 
				  						   "windchill_string": "NA", 
				  						   "windchill_f": "NA", 
				  						   "windchill_c": "NA", 
				  						   "feelslike_string": "66.3 F (19.1 C)", 
				  						   "feelslike_f": "66.3", 
				  						   "feelslike_c": "19.1", 
				  						   "visibility_mi": "10.0", 
				  						   "visibility_km": "16.1", 
				  						   "solarradiation": "", 
				  						   "UV": "5", 
				  						   "precip_1hr_string": "0.00 in ( 0 mm)", 
				  						   "precip_1hr_in": "0.00", 
				  						   "precip_1hr_metric": " 0", 
				  						   "precip_today_string": "0.00 in (0 mm)", 
				  						   "precip_today_in": "0.00", 
				  						   "precip_today_metric": "0", 
				  						   "icon": "partlycloudy", 
				  						   "icon_url": "http://icons-ak.wxug.com/i/c/k/partlycloudy.gif", 
				  						   "forecast_url": "http://www.wunderground.com/US/CA/San_Francisco.html", 
				  						   "history_url": "http://www.wunderground.com/history/airport/KCASANFR58/2012/6/27/DailyHistory.html", 
				  						   "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.773285,-122.417725" } 
				  					}*/
