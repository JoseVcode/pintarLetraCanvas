const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

const tamanio_bloque = 8;
const separacion_bloque = 1;

const alfabeto = {
  'h': [
      [1,0,1],
      [1,0,1],
      [1,1,1],
      [1,0,1],
      [1,0,1]
  ],
  'e': [
      [1,1,1],
      [1,0,0],
      [1,1,1],
      [1,0,0],
      [1,1,1]
  ],
  'o': [
      [1,1,1],
      [1,0,1],
      [1,0,1],
      [1,0,1],
      [1,1,1]
  ],
  'u': [
      [1,0,1],
      [1,0,1],
      [1,0,1],
      [1,0,1],
      [1,1,1]
  ],
  'a': [
      [1,1,1],
      [1,0,1],
      [1,1,1],
      [1,0,1],
      [1,0,1]
  ],
  'l': [
      [1,0,0],
      [1,0,0],
      [1,0,0],
      [1,0,0],
      [1,1,1]
  ] 
};

function pintarLetra(letra, xInit, yInit) {
  const map = alfabeto[letra.toLowerCase()];
  if (!map) return;

  ctx.fillStyle = "#00FF00";

  for (let fila = 0; fila < map.length; fila++) {
    for (let col = 0; col < map[fila].length; col++) {
      if (map[fila][col] === 1) {
        const x = xInit + col * (tamanio_bloque + separacion_bloque);
        const y = yInit + fila * (tamanio_bloque + separacion_bloque);
        ctx.fillRect(x, y, tamanio_bloque, tamanio_bloque);
      }
    }
  }
}

window.addEventListener('keydown', (evento) => {
  const tecla = evento.key;

  ctx.clearRect(0, 0, canvas.width, canvas.height);          
  pintarLetra(tecla, 35, 30);
});
