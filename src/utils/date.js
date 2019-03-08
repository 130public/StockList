const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = [];

export const ReadableDate = function(string){
  const date = new Date(string);
  return month[date.getMonth()] +" "+date.getDate() +", "+ date.getFullYear();
}
export const YyyyMmDd = function(string){
  const date = new Date(string);
  return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
}