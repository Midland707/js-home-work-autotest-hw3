//MODUL3 AUTOTEST26

// Change code below this line
function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
calculateMeanTemperature({
  today: { low: 28, high: 32 },
  tomorrow: { low: 25, high: 29 },
}); //повертає 28.5
calculateMeanTemperature({
  today: { low: 37, high: 40 },
  tomorrow: { low: 33, high: 38 },
}); //повертає 37
