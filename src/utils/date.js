import Moment from "moment";
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const ReadableDate = function(string){
  const date = new Date(string);
  return day[date.getDay()] +", "+ month[date.getMonth()] +" "+date.getDate() +", "+ date.getFullYear();
}
export const YyyyMmDd = function(string){
  const date = new Date(string);
  return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
}
export const DaysDiff = function(string){
  const todaysDate = Moment();
  const purchaseDate = Moment(string, 'YYYY-MM-DD');
  return  todaysDate.diff(purchaseDate, 'days');
}