let automobiles = ["car", "truck", "motorcycle"];
// add to END
automobiles.push("airplane", "skateboard");
// add to FRONT
automobiles.unshift("bike', 'helicopter");
// copy using temmplate string
let automobilesCopy = `${automobiles}`;
// remove LAST item
automobiles.pop();
// remove FIRST item
automobiles.shift();
// display result
document.getElementById('result').innerHTML = automobiles;
