let automobiles = ["car", "truck", "motorcycle"];
automobiles.push("airplane", "skateboard");
automobiles.unshift("helicopter", "bike");
let automobilesCopy = `${automobiles}`;
automobiles.pop();
automobiles.shift();
document.getElementById('result').innerHTML = automobiles;
