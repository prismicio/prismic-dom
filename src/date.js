export default function(date) {
  if(!date) return null;
  var correctIso8601Date = (date.length == 24) 
    ? `${date.substring(0, 22)}:${date.substring(22, 24)}`
    : date;
  return new Date(correctIso8601Date);
};
