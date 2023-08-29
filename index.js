
function resolverLaberinto(laberinto, x = 1, y = 1) {
    if (x < 0 || y < 0 || x >= laberinto.length || y >= laberinto[0].length) {
        return false;
    }
    if (laberinto[x][y] === "#") {
        // # es una pared
        return false;
    }

    if (laberinto[x][y] === "$") {
        // $ es el objetivo
        return true;
    }

    if (laberinto[x][y] === "+") {
        return false;
    } else {
        laberinto[x][y] = "+"; // + es la parte recorrida del camino
    }

    if (
        resolverLaberinto(laberinto, x - 1, y) ||
        resolverLaberinto(laberinto, x, y + 1) ||
        resolverLaberinto(laberinto, x + 1, y) ||
        resolverLaberinto(laberinto, x, y - 1)
    ) {
        return true;
    }
    laberinto[x][y] = "0"; // . marca parte no recorrida del camino
    return false;
}

// Ejemplo de laberinto representado como un arreglo de cadenas
const laberinto = [
    ["#", "#", "#", "#", "#", "#"],
    ["#", "S", "0", "0", "0", "#"],
    ["#", "0", "#", "#", "0", "#"],
    ["#", "0", "#", "0", "0", "#"],
    ["#", "0", "0", "#", "$", "#"],
    ["#", "#", "#", "#", "#", "#"],
];
const laberinto2 = [
    ["#", "#", "#", "#", "0", "#", "#", "#", "#", "#"],
    ["0", "S", "0", "0", "0", "#", "0", "0", "0", "#"],
    ["0", "#", "0", "#", "0", "#", "0", "#", "0", "#"],
    ["#", "0", "0", "#", "0", "0", "0", "#", "0", "#"],
    ["#", "0", "#", "#", "#", "#", "#", "#", "0", "#"],
    ["#", "0", "0", "0", "0", "0", "0", "0", "0", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "0", "#"],
    ["#", "0", "0", "0", "0", "0", "0", "0", "0", "#"],
    ["#", "0", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "0", "0", "0", "0", "0", "0", "0", "$", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
];

resolverLaberinto(laberinto2);

for (const fila of laberinto2) {
    console.log(fila);
}
