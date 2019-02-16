var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(a, b, c, d) {
        this.img = "";
        this.name = "";
        this.adress = "";
        this.zip = "";
        this.img = a;
        this.name = b;
        this.adress = c;
        this.zip = d;
    }
    locations.prototype.render = function () {
        return "<div class=\"col-lg-12>" + this.img + "<br>" + this.name + "<br>" + this.adress + this.zip + "\"</div>";
    };
    return locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(a, b, c, d, x) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.city = "";
        _this.city = x;
        return _this;
    }
    places.prototype.render1 = function () {
        return "<div class=\"col-lg-3 col-md-6\">" + _super.prototype.render.call(this) + this.city + "</div>";
    };
    return places;
}(locations));
var placesData = new Array();
placesData[0] = new places('img/dom.jpg', 'Stephansdom', 'Stephansplatz 3,', '1010', 'Vienna');
placesData[1] = new places('img/schönbrunn.jpg', 'Castle Schönbrunn', 'Schönbrunnerstraße 1,', '1130', 'Vienna');
placesData[2] = new places('img/kunst.jpeg', 'Art History Museum', 'Burgring 1,', '1010', 'Vienna');
placesData[3] = new places('img/rathaus.jpeg', 'Town Hall', 'Burgring 20,', '1010', 'Vienna');
function contentPlaces() {
    for (var i in placesData) {
        document.getElementById('Places').innerHTML += placesData[i].render1();
    }
}
contentPlaces();
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(a, b, c, d, e, f) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.teleNumber = "";
        _this.homePage = "";
        _this.teleNumber = e;
        _this.homePage = f;
        return _this;
    }
    restaurants.prototype.render2 = function () {
        return "<div class=\"col-lg-3 col-md-6\">" + _super.prototype.render.call(this) + "<br>" + this.teleNumber + "<br>" + this.homePage + "</div>";
    };
    return restaurants;
}(locations));
var restaurantsData = new Array();
restaurantsData[0] = new restaurants('img/francesco.jpeg', 'Pizza Francesco', 'Grinzigerstraße 30,', '1190 Vienna', '+43 789 2700', 'http://www.ristorante-francesco.at/');
restaurantsData[1] = new restaurants('img/oben.jpeg', 'Oben Lunch', 'Burggasse 2,', '1090 Vienna', '+43 888 7500', 'https://oben.at/');
restaurantsData[2] = new restaurants('img/freiraum.jpeg', 'Cafe', 'Mariahilferstraße 2,', '1070 Vienna', '+43 909 7676', 'https://www.freiraum117.at/');
restaurantsData[3] = new restaurants('img/galaxy.jpeg', 'Galaxy Restaurant', 'Märzstraße 15,', '1150 Vienna', '+43 678 666', 'http://restaurant-galaxie.at/');
function contentRestaurants() {
    for (var i in restaurantsData) {
        document.getElementById('Restaurants').innerHTML += restaurantsData[i].render2();
    }
}
contentRestaurants();
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(a, b, c, d, g, h, i) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.price = "";
        _this.eventDate = "";
        _this.HomePage = "";
        _this.HomePage = g;
        _this.eventDate = h;
        _this.price = i;
        return _this;
    }
    events.prototype.render3 = function () {
        return "<div class=\"col-lg-3 col-md-6\">" + _super.prototype.render.call(this) + this.HomePage + "<br>" + this.eventDate + "<br>" + this.price + "</div>";
    };
    return events;
}(locations));
var eventsData = new Array();
eventsData[0] = new events('img/dino.jpeg', 'Dino Merlin', 'Gazometer 1,', '1030 Vienna', 'http://www.gazometer.at/', '10h March 2019', '20$');
eventsData[1] = new events('img/sasa.jpeg', 'Oben Lunch', 'Ottakringerstraße 172,', '1160 Vienna', 'https://clubeisberg.at/', '25 March 2019', '20$');
eventsData[2] = new events('img/shawn.jpeg', 'Shawn Mendes', 'Stadthalle,', '1150 Vienna', 'https://www.stadthalle.at/', '3rd April 2019', '50$');
eventsData[3] = new events('img/sunrise.jpeg', 'Sunrise Avenue', 'Stadthalle,', '1150 Vienna', 'http://stadthalle.at/', '5th Mai 2019', '50$');
function contentEvents() {
    for (var i in eventsData) {
        document.getElementById('Events').innerHTML += eventsData[i].render3();
    }
}
contentEvents();
