//change string from snake to camelCase

function snakeToCamel(str){
	let cut = str.split("_")
  let output= cut[0]
  for(let i = 1; i < cut.length; i++){
  	output += cut[i].charAt(0).toUpperCase() + cut[i].slice(1);
  }
  return output
}

console.log(snakeToCamel("this_is_snake_case_to_camel_case"))
