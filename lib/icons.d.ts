import { DrawFunction } from "./DrawFunction";
export declare type IconKey = "clear-day" | "clear-night" | "cloudy" | "fog" | "partly-cloudy-day" | "partly-cloudy-night" | "rain" | "sleet" | "snow" | "wind" | "showers-day" | "showers-night" | "rain-snow" | "rain-snow-showers-day" | "rain-snow-showers-night" | "snow-showers-day" | "snow-showers-night" | "thunder" | "thunder-rain" | "thunder-showers-day" | "thunder-showers-night" | "hail";
export declare enum ICON {
    CLEAR_DAY = "clear-day",
    CLEAR_NIGHT = "clear-night",
    CLOUDY = "cloudy",
    FOG = "fog",
    PARTLY_CLOUDY_DAY = "partly-cloudy-day",
    PARTLY_CLOUDY_NIGHT = "partly-cloudy-night",
    RAIN = "rain",
    SLEET = "sleet",
    SNOW = "snow",
    WIND = "wind",
    SHOWERS_DAY = "showers-day",
    SHOWERS_NIGHT = "showers-night",
    RAIN_SNOW = "rain-snow",
    RAIN_SNOW_SHOWERS_DAY = "rain-snow-showers-day",
    RAIN_SNOW_SHOWERS_NIGHT = "rain-snow-showers-night",
    SNOW_SHOWERS_DAY = "snow-showers-day",
    SNOW_SHOWERS_NIGHT = "snow-showers-night",
    THUNDER = "thunder",
    THUNDER_RAIN = "thunder-rain",
    THUNDER_SHOWERS_DAY = "thunder-showers-day",
    THUNDER_SHOWERS_NIGHT = "thunder-showers-night",
    HAIL = "hail"
}
export declare const iconDrawFunctionMap: Map<IconKey, DrawFunction>;
export declare function getIconDrawingFunctionByName(key: IconKey): DrawFunction;
