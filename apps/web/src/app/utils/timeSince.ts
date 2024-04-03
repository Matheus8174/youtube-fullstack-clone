import dayjs, { UnitType } from 'dayjs';

function timeSince(date?: Date) {
  let value = 0;

  const now = dayjs();

  const givenTime = dayjs(date);

  const checkDiff = (unit: UnitType) => (value = now.diff(givenTime, unit));

  if (checkDiff('year') > 0) return `${value} years ago`;

  if (checkDiff('day') > 0) return `${value} days ago`;

  if (checkDiff('hour') > 0) return `${value} hours ago`;

  if (checkDiff('minute') > 0) return `${value} minutes ago`;

  checkDiff('second');

  return `${value} seconds ago`;
}

export default timeSince;
