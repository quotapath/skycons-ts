import { DrawFunction } from "./DrawFunction";
import { iconClearDay } from "./drawing/icons/clearDay";
import { iconClearNight } from "./drawing/icons/clearNight";
import { iconCloudy } from "./drawing/icons/cloudy";
import { iconFog } from "./drawing/icons/fog";
import { iconPartlyCloudyDay } from "./drawing/icons/partlyCloudyDay";
import { iconPartlyCloudyNight } from "./drawing/icons/partlyCloudyNight";
import { iconRain } from "./drawing/icons/rain";
import { iconSleet } from "./drawing/icons/sleet";
import { iconSnow } from "./drawing/icons/snow";
import { iconWind } from "./drawing/icons/wind";
import { iconHail } from "./drawing/icons/hail";
import { iconRainSnow } from "./drawing/icons/rainSnow";
import { iconRainSnowShowersNight } from "./drawing/icons/rainSnowShowersNight";
import { iconRainSnowShowersDay } from "./drawing/icons/rainSnowShowersDay";
import { iconShowersNight } from "./drawing/icons/showersNight";
import { iconShowersDay } from "./drawing/icons/showersDay";
import { iconSnowShowersDay } from "./drawing/icons/snowShowersDay";
import { iconSnowShowersNight } from "./drawing/icons/snowShowersNight";
import { iconThunder } from "./drawing/icons/thunder";
import { iconThunderRain } from "./drawing/icons/thunderRain";
import { iconThunderShowersDay } from "./drawing/icons/thunderShowersDay";
import { iconThunderShowersNight } from "./drawing/icons/thunderShowersNight";

export type IconKey =
  | "clear-day"
  | "clear-night"
  | "cloudy"
  | "fog"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "rain"
  | "sleet"
  | "snow"
  | "wind"
  | "showers-day"
  | "showers-night"
  | "rain-snow"
  | "rain-snow-showers-day"
  | "rain-snow-showers-night"
  | "snow-showers-day"
  | "snow-showers-night"
  | "thunder"
  | "thunder-rain"
  | "thunder-showers-day"
  | "thunder-showers-night"
  | "hail";

export enum ICON {
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

export const iconDrawFunctionMap = new Map<IconKey, DrawFunction>([
  ["clear-day", iconClearDay],
  ["clear-night", iconClearNight],
  ["cloudy", iconCloudy],
  ["fog", iconFog],
  ["partly-cloudy-day", iconPartlyCloudyDay],
  ["partly-cloudy-night", iconPartlyCloudyNight],
  ["rain", iconRain],
  ["sleet", iconSleet],
  ["snow", iconSnow],
  ["wind", iconWind],
  ["hail", iconHail],
  ["rain-snow", iconRainSnow],
  ["rain-snow-showers-day", iconRainSnowShowersDay],
  ["rain-snow-showers-day", iconRainSnowShowersNight],
  ["showers-day", iconShowersDay],
  ["showers-night", iconShowersNight],
  ["snow-showers-day", iconSnowShowersDay],
  ["snow-showers-night", iconSnowShowersNight],
  ["thunder", iconThunder],
  ["thunder-rain", iconThunderRain],
  ["thunder-showers-day", iconThunderShowersDay],
  ["thunder-showers-night", iconThunderShowersNight]
]);

export function getIconDrawingFunctionByName(key: IconKey): DrawFunction {
  const drawFn = iconDrawFunctionMap.get(key);
  if (drawFn) {
    return drawFn;
  } else {
    throw new Error("Invalid icon 'name'.");
  }
}
