function resolverLaberinto(laberinto, x = 1, y = 1) {
    if (x < 0 || y < 0 || x >= laberinto.length || y >= laberinto[0].length) {
        return false;
    }
    if (laberinto[x][y] === "#") {
        return false;
    }

    if (laberinto[x][y] === "$") {
        return true;
    }

    if (laberinto[x][y] === "+") {
        return false;
    } else {
        laberinto[x][y] = "+";
        actualizarCelda(x, y, "camino");
    }

    if (
        resolverLaberinto(laberinto, x - 1, y) ||
        resolverLaberinto(laberinto, x, y - 1) ||
        resolverLaberinto(laberinto, x + 1, y) ||
        resolverLaberinto(laberinto, x, y + 1)
    ) {
        return true;
    }

    laberinto[x][y] = "x";
    actualizarCelda(x, y, "caminoErroneo");
    return false;
}

function actualizarCelda(x, y, clase) {
    const celda = document.getElementById(`celda-${x}-${y}`);
    celda.className = `celda ${clase}`;
}

const laberinto = [
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

const iniciarButton = document.getElementById("iniciarButton");
const laberintoContainer = document.getElementById("laberinto");

iniciarButton.addEventListener("click", () => {
    resolverLaberinto(laberinto);
    iniciarButton.disabled = true;
});

// Crear la grilla del laberinto en el DOM
for (let i = 0; i < laberinto.length; i++) {
    for (let j = 0; j < laberinto[i].length; j++) {
        const celda = document.createElement("div");
        celda.id = `celda-${i}-${j}`;
        celda.className = `celda ${laberinto[i][j] === "#" ? "pared" : laberinto[i][j] === "S" ? "inicio" : laberinto[i][j] === "$" ? "meta" : laberinto[i][j] === "X" ? "caminoErroneo" : ""}`;
        laberintoContainer.appendChild(celda);
    }
}

