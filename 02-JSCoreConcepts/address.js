title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/



/*bez formatowania */
console.log(title);
console.log(name);
console.log(surname);
console.log(street);
console.log(city);
console.log(zip);
console.log(country);


 /*z formatowaniem*/

 console.log(title + " " + name + " " + surname);
 console.log("ul. " + street );
 console.log(zip + " " + city)
 console.log(country.toUpperCase())