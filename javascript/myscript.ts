
class locations{
	name="";
	adress="";
	img="";

	constructor(a,b,c){
		this.name=a;
		this.adress=b;
		this.img=c;
	}

	render(){
		return `<div class="container"><div class="row"><div class="col-lg-3"><ul>
		<li><p>${this.name}</p></li><br><li><p>${this.adress}</p></li><br><li>
		<img src="${this.img}"</li></ul></div></div></div>`
	}
}

var places = new locations('Castle Schönbrunn','Schloß Schönbrunn,1130 Vienna','img/schönbrunn.jpg');
var places2 = new locations('Church Stephansdom','Stephansplatz 3,1010 Vienna','img/dom.jpg');

var arr = [places,places2];

document.write("<h2>Places:</h2>");
for(let i in arr){
document.write(arr[i].render());
}

class restaurants extends locations{

}