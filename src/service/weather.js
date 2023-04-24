import http from "../utils/http";

export const get_Date = async(city) => {
    const ret = await http.get('https://api.seniverse.com/v3/weather/daily.json?key=SHNeyyo1Ab9YKrFDj&location='+city+'&language=zh-Hans&unit=c&start=0&days=5')
    return ret
}

