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
    function locations(a, b, c) {
        this.name = "";
        this.adress = "";
        this.img = "";
        this.name = a;
        this.adress = b;
        this.img = c;
    }
    locations.prototype.render = function () {
        return "<div class=\"container\"><div class=\"row\"><div class=\"col-lg-3\"><ul>\n\t\t<li><p>" + this.name + "</p></li><br><li><p>" + this.adress + "</p></li><br><li>\n\t\t<img src=\"" + this.img + "\"</li></ul></div></div></div>";
    };
    return locations;
}());
var places = new locations('Castle Schönbrunn', 'Schloß Schönbrunn,1130 Vienna', 'img/schönbrunn.jpg');
var places2 = new locations('Church Stephansdom', 'Stephansplatz 3,1010 Vienna', 'img/dom.jpg');
var arr = [places, places2];
document.write("<h2>Places:</h2>");
for (var i in arr) {
    document.write(arr[i].render());
}
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return restaurants;
}(locations));
