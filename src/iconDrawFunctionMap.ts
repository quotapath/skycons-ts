import { IDrawFunction } from "./IDrawFunction";
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

const iconDrawFunctionMap: Map<string, IDrawFunction> = new Map([
    ['clear-day', iconClearDay],
    ['clear-night', iconClearNight],
    ['cloudy', iconCloudy],
    ['fog', iconFog],
    ['partly-cloudy-day', iconPartlyCloudyDay],
    ['partly-cloudy-night', iconPartlyCloudyNight],
    ['rain', iconRain],
    ['sleet', iconSleet],
    ['snow', iconSnow],
    ['wind', iconWind],
]);

export function getIconDrawingFunctionByName(name: string): IDrawFunction | null {
    return iconDrawFunctionMap.get(name.toLowerCase()) || null;
}