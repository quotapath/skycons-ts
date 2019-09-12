"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clearDay_1 = require("./drawing/icons/clearDay");
var clearNight_1 = require("./drawing/icons/clearNight");
var cloudy_1 = require("./drawing/icons/cloudy");
var fog_1 = require("./drawing/icons/fog");
var hail_1 = require("./drawing/icons/hail");
var partlyCloudyDay_1 = require("./drawing/icons/partlyCloudyDay");
var partlyCloudyNight_1 = require("./drawing/icons/partlyCloudyNight");
var rain_1 = require("./drawing/icons/rain");
var rainSnow_1 = require("./drawing/icons/rainSnow");
var rainSnowShowersDay_1 = require("./drawing/icons/rainSnowShowersDay");
var rainSnowShowersNight_1 = require("./drawing/icons/rainSnowShowersNight");
var showersDay_1 = require("./drawing/icons/showersDay");
var showersNight_1 = require("./drawing/icons/showersNight");
var sleet_1 = require("./drawing/icons/sleet");
var snow_1 = require("./drawing/icons/snow");
var snowShowersDay_1 = require("./drawing/icons/snowShowersDay");
var snowShowersNight_1 = require("./drawing/icons/snowShowersNight");
var thunder_1 = require("./drawing/icons/thunder");
var thunderRain_1 = require("./drawing/icons/thunderRain");
var thunderShowersDay_1 = require("./drawing/icons/thunderShowersDay");
var thunderShowersNight_1 = require("./drawing/icons/thunderShowersNight");
var wind_1 = require("./drawing/icons/wind");
var ICON;
(function (ICON) {
    ICON["CLEAR_DAY"] = "clear-day";
    ICON["CLEAR_NIGHT"] = "clear-night";
    ICON["CLOUDY"] = "cloudy";
    ICON["FOG"] = "fog";
    ICON["PARTLY_CLOUDY_DAY"] = "partly-cloudy-day";
    ICON["PARTLY_CLOUDY_NIGHT"] = "partly-cloudy-night";
    ICON["RAIN"] = "rain";
    ICON["SLEET"] = "sleet";
    ICON["SNOW"] = "snow";
    ICON["WIND"] = "wind";
    ICON["SHOWERS_DAY"] = "showers-day";
    ICON["SHOWERS_NIGHT"] = "showers-night";
    ICON["RAIN_SNOW"] = "rain-snow";
    ICON["RAIN_SNOW_SHOWERS_DAY"] = "rain-snow-showers-day";
    ICON["RAIN_SNOW_SHOWERS_NIGHT"] = "rain-snow-showers-night";
    ICON["SNOW_SHOWERS_DAY"] = "snow-showers-day";
    ICON["SNOW_SHOWERS_NIGHT"] = "snow-showers-night";
    ICON["THUNDER"] = "thunder";
    ICON["THUNDER_RAIN"] = "thunder-rain";
    ICON["THUNDER_SHOWERS_DAY"] = "thunder-showers-day";
    ICON["THUNDER_SHOWERS_NIGHT"] = "thunder-showers-night";
    ICON["HAIL"] = "hail";
})(ICON = exports.ICON || (exports.ICON = {}));
exports.iconDrawFunctionMap = new Map([
    ["clear-day", clearDay_1.iconClearDay],
    ["clear-night", clearNight_1.iconClearNight],
    ["cloudy", cloudy_1.iconCloudy],
    ["fog", fog_1.iconFog],
    ["partly-cloudy-day", partlyCloudyDay_1.iconPartlyCloudyDay],
    ["partly-cloudy-night", partlyCloudyNight_1.iconPartlyCloudyNight],
    ["rain", rain_1.iconRain],
    ["sleet", sleet_1.iconSleet],
    ["snow", snow_1.iconSnow],
    ["wind", wind_1.iconWind],
    ["hail", hail_1.iconHail],
    ["rain-snow", rainSnow_1.iconRainSnow],
    ["rain-snow-showers-day", rainSnowShowersDay_1.iconRainSnowShowersDay],
    ["rain-snow-showers-night", rainSnowShowersNight_1.iconRainSnowShowersNight],
    ["showers-day", showersDay_1.iconShowersDay],
    ["showers-night", showersNight_1.iconShowersNight],
    ["snow-showers-day", snowShowersDay_1.iconSnowShowersDay],
    ["snow-showers-night", snowShowersNight_1.iconSnowShowersNight],
    ["thunder", thunder_1.iconThunder],
    ["thunder-rain", thunderRain_1.iconThunderRain],
    ["thunder-showers-day", thunderShowersDay_1.iconThunderShowersDay],
    ["thunder-showers-night", thunderShowersNight_1.iconThunderShowersNight]
]);
function getIconDrawingFunctionByName(key) {
    var drawFn = exports.iconDrawFunctionMap.get(key);
    if (drawFn) {
        return drawFn;
    }
    else {
        throw new Error("Invalid icon 'name'.");
    }
}
exports.getIconDrawingFunctionByName = getIconDrawingFunctionByName;
