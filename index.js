

function resolverLaberinto(laberinto, x = 0, y = 0) {
    if (x < 0 || y < 0 || x >= laberinto.length || y >= laberinto[0].length) {
      return false;
    }
    const celda = laberinto[x][y];
    if (celda === '#') {  // # es una pared
      return false;
    }
  
    if (celda === '$') {  // $ es el objetivo
      return true;
    }
  
    if (celda !== 'S' && celda !== '+') {
      laberinto[x][y] = '+';  // + es parte recorrida del camino
    }
  
    if (resolverLaberinto(laberinto, x - 1, y) ||  
        resolverLaberinto(laberinto, x, y + 1) ||
        resolverLaberinto(laberinto, x + 1, y) ||
        resolverLaberinto(laberinto, x, y - 1)) {
      return true;
    }
  
    if (celda !== 'S') {
      laberinto[x][y] = '.';  // . marca parte no recorrida del camino
    }
  
    return false;
  }
  
  // Ejemplo de laberinto representado como un arreglo de cadenas
  const laberinto = [
    "S######",  // S es el punto de salida
    "#0#0###",  // # es una pared
    "###0#0#",  // 0 es un camino
    "#0#$#0#",  // $ es el objetivo
    "#0#0###",  // 0 es un camino
    "#######"
  ];
  
  resolverLaberinto(laberinto);
  
  for (const fila of laberinto) {
    console.log(fila);
  }
