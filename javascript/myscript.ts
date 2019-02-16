
class locations{
	img="";
	name="";
	adress="";
	zip="";
	
	
	constructor(a,b,c,d){
		this.img=a;
		this.name=b;
		this.adress=c;
		this.zip=d;
		
	}

	render(){
		return `<div class="col-lg-12>${this.img}<br>${this.name}<br>${this.adress}${this.zip}"</div>`
	}
}



class places extends locations{

	city="";

	constructor(a,b,c,d,x){
		super(a,b,c,d);
		this.city=x;
	}
	render1(){
			return `<div class="col-lg-3 col-md-6">${super.render()}${this.city}</div>`
	}
}

var placesData = new Array();

placesData[0]= new places('img/dom.jpg','Stephansdom','Stephansplatz 3,','1010','Vienna')
placesData[1]= new places('img/schönbrunn.jpg','Castle Schönbrunn','Schönbrunnerstraße 1,','1130','Vienna')
placesData[2]= new places('img/kunst.jpeg','Art History Museum','Burgring 1,','1010','Vienna')
placesData[3]= new places('img/rathaus.jpeg','Town Hall','Burgring 20,','1010','Vienna')

function contentPlaces(){
	for(let i in placesData){
		document.getElementById('Places').innerHTML+=placesData[i].render1();
	}
}

 contentPlaces();

class restaurants extends locations{
	teleNumber="";
	homePage="";

	constructor(a,b,c,d,e,f){
		super(a,b,c,d);
		this.teleNumber=e;
		this.homePage=f;
	}
	render2(){
		return `<div class="col-lg-3 col-md-6">${super.render()}<br>${this.teleNumber}<br>${this.homePage}</div>`
	}
}

var restaurantsData = new Array();

restaurantsData[0]= new restaurants('img/francesco.jpeg','Pizza Francesco','Grinzigerstraße 30,','1190 Vienna','+43 789 2700','http://www.ristorante-francesco.at/')
restaurantsData[1]= new restaurants('img/oben.jpeg','Oben Lunch','Burggasse 2,','1090 Vienna','+43 888 7500','https://oben.at/')
restaurantsData[2]= new restaurants('img/freiraum.jpeg','Cafe','Mariahilferstraße 2,','1070 Vienna','+43 909 7676','https://www.freiraum117.at/')
restaurantsData[3]= new restaurants('img/galaxy.jpeg','Galaxy Restaurant','Märzstraße 15,','1150 Vienna','+43 678 666','http://restaurant-galaxie.at/')

function contentRestaurants(){
	for(let i in restaurantsData){
		document.getElementById('Restaurants').innerHTML+=restaurantsData[i].render2();
	}
}

	contentRestaurants();

	class events extends locations{
		price="";
		eventDate="";
		HomePage="";

		constructor(a,b,c,d,g,h,i){
			super(a,b,c,d);
			this.HomePage=g;
			this.eventDate=h;
			this.price=i;
		}

		render3(){
			return `<div class="col-lg-3 col-md-6">${super.render()}${this.HomePage}<br>${this.eventDate}<br>${this.price}</div>`
		}
	}

		
		var eventsData = new Array();

eventsData[0]= new events('img/dino.jpeg','Dino Merlin','Gazometer 1,','1030 Vienna','http://www.gazometer.at/','10h March 2019','20$')
eventsData[1]= new events('img/sasa.jpeg','Oben Lunch','Ottakringerstraße 172,','1160 Vienna','https://clubeisberg.at/','25 March 2019','20$')
eventsData[2]= new events('img/shawn.jpeg','Shawn Mendes','Stadthalle,','1150 Vienna','https://www.stadthalle.at/','3rd April 2019','50$')
eventsData[3]= new events('img/sunrise.jpeg','Sunrise Avenue','Stadthalle,','1150 Vienna','http://stadthalle.at/','5th Mai 2019','50$')

function contentEvents(){
	for(let i in eventsData){
		document.getElementById('Events').innerHTML+=eventsData[i].render3();
	}
}
contentEvents();
