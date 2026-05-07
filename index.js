let automobiles = ["car", "truck", "motorcycle"];
// add to end
automobiles.push("airplane", "skateboard");
// add to FRONT
automobiles.unshift("helicopter", "bike");
// copy using temmplate string
let automobilesCopy = `${automobiles}`;
// remove LAST item
automobiles.pop();
// remove FIRST item
automobiles.shift();
// display result
document.getElementById('result').innerHTML = automobiles;
