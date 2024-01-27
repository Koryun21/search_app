const getRussianTimeUnit = (value:number, units:string[]) => {
  if (value % 10 === 1 && value % 100 !== 11) {
    return units[0];
  } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
    return units[1];
  } else {
    return units[2];
  }
}

const getUserLastActivity = (sex:number,lastActivity:string)=>{
  const currentTime = new Date().getTime();
  const timestamp = new Date(lastActivity).getTime()
  const timeDifference = currentTime - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  console.log('timeDifference',timeDifference);
  console.log("seconds",seconds);
  console.log("minutes",minutes);
  console.log("hours",hours);
  console.log("seconds",seconds);

  const currentVerb = (() => {
    switch (sex){
      case 1:
        return 'Был';
      case 2:
        return 'Была';
      default:
        return 'Был(а)'
    }
  })()

  if (seconds <= 60) {
    return `${currentVerb} ${seconds} ${getRussianTimeUnit(seconds, ['секунда', 'секунды', 'секунд'])} назад`;
  } else if (minutes <= 60) {
    return `${currentVerb} ${minutes} ${getRussianTimeUnit(minutes, ['минута', 'минуты', 'минут'])} назад`;
  } else if (hours <= 24) {
    return `${currentVerb} ${hours} ${getRussianTimeUnit(hours, ['час', 'часа', 'часов'])} назад`;
  } else if (days <= 7) {
    return `${currentVerb} ${days} ${getRussianTimeUnit(days, ['день', 'дня', 'дней'])} назад`;
  } else if (weeks <= 4) {
    return `${currentVerb} ${weeks} ${getRussianTimeUnit(weeks, ['неделя', 'недели', 'недель'])} назад`;
  } else if (months <= 12) {
    return `${currentVerb} ${months} ${getRussianTimeUnit(months, ['месяц', 'месяца', 'месяцев'])} назад`;
  } else {
    return `${currentVerb} ${years} ${getRussianTimeUnit(years, ['год', 'года', 'лет'])} назад`;
  }}

export default getUserLastActivity