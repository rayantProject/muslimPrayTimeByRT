import { PrayComponent } from "./component.js";





let prayTimelocation: string ="lyon", time: string = "monthly"




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0cd93c9086mshb93dc12304cb19ep1e0c7ajsnb1d49d2c83e6',
		'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
	}
};

fetch(`https://muslimsalat.p.rapidapi.com/(location)/(times)/(date)/(daylight)/(method).json?times=${time}&location=${prayTimelocation}`, options)
	.then(response => response.json())
	.then(response => 
		{


			
			console.log(response);
			document.getElementById("textDateHorloge").textContent = String(response.items[0].date_for)
			document.getElementById("location").textContent = String(response.query)+ ", " + String(response.country)
			// response.items.forEach(element => {

			// 	PrayComponent(element.fajr, element.shurooq, element.dhuhr, element.asr, element.maghrib, element.isha, element.date_for)
			// });

			for (let index = 0; index < response.items.length; index++) {
				const element = response.items[index];
				if (index == 0) {
					PrayComponent(element.fajr, element.shurooq, element.dhuhr, element.asr, element.maghrib, element.isha, "today")
				}else{
					PrayComponent(element.fajr, element.shurooq, element.dhuhr, element.asr, element.maghrib, element.isha, element.date_for)

				}
				
			}



		})
	.catch(err => console.error(err));


