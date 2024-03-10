export const formatTime = (minutes) => {
  if (typeof minutes !== 'number' || isNaN(minutes) || minutes < 0) {
    return 'Invalid input';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime =
    (hours > 0 ? `${hours}h` : '') + (remainingMinutes > 0 ? ` ${remainingMinutes}min` : '');

  return formattedTime.trim() || '0min';
}