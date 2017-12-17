export default function(value) {
  if (!value || isNaN(value)) return;
  value = Number(value);

  if(value >= 1000 && value < 1000000) {
    return `${(value/1000).toFixed(2)}K`;
  } else if(value >= 1000000 && value < 1000000000){
    return `${(value/1000000).toFixed(2)}M`;
  } else if(value >= 1000000000){
    return `${(value/1000000000).toFixed(2)}B`;
  }
  return value;
}
