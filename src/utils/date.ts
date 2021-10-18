import { format, parse } from 'date-fns';

export function getDateFromString(date: string): Date {
  const dateArray = date.split('-');
  const year = Number(dateArray[0]);
  const month = Number(dateArray[1]) - 1;
  const day = Number(dateArray[2]);
  return new Date(year, month, day);
}

export function getFormatedDateFromDate(date: Date): String {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return format(
    parse(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date()),
    'yyyy-dd-MM',
  );
}
