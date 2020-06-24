const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

function timeWas(time, now = Date.now()) {
  const interval = now - time;
  if (interval < MINUTES) {
    return interval / SECONDS > 1
      ? `${interval / SECONDS} seconds ago`
      : `just now`;
  } else if (interval < HOURS) {
    return interval / MINUTES > 1
      ? `${interval / MINUTES} minutes ago`
      : `${interval / MINUTES} minute ago`;
  } else if (interval < DAYS) {
    return interval / HOURS > 1
      ? `${interval / HOURS} hours ago`
      : `${interval / HOURS} hour ago`;
  } else if (interval < WEEKS) {
    return interval / DAYS > 1
      ? `${interval / DAYS} days ago`
      : `${interval / DAYS} day ago`;
  } else if (interval < MONTHS) {
    return interval / WEEKS > 1
      ? `${interval / WEEKS} weeks ago`
      : `${interval / WEEKS} week ago`;
  } else if (interval < YEARS) {
    return interval / MONTHS > 1
      ? `${interval / MONTHS} months ago`
      : `${interval / MONTHS} month ago`;
  } else {
    return interval / YEARS > 1
      ? `${interval / YEARS} years ago`
      : `${interval / YEARS} year ago`;
  }
}
export { timeWas };
