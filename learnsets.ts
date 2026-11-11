Explicacion del archivo "Learnsets.ts" de Pokémon Showdown 

Este aechivo Organiza la información de los movimientos de cada Pokémon mediante un objeto estructurado en formato JSON/TypeScript.
Para que entiendas, Claude entienda cómo funciona, la clasificación de sus etiquetas y estructura se divide de la siguiente manera:
1. Estructura Principal
Cada entrada principal utiliza el nombre del Pokémon (en minúsculas y sin espacios o formas especiales en la clave principal) y contiene principalmente los siguientes bloques:
 * learnset: Un diccionario donde la clave es el nombre del movimiento (en minúsculas) y el valor es un array de cadenas de texto (etiquetas) que indican cómo y en qué generación se aprende.
 * eventData: Información sobre distribuciones de eventos oficiales (nivel, movimientos especiales, tipo de Poké Ball).
 * encounters: Generaciones y niveles en los que aparece de forma salvaje.
 * eventOnly: Booleano que indica si el Pokémon o forma solo se obtiene por eventos.
2. Formato de las Etiquetas del learnset
Los strings dentro del array de cada movimiento combinan un número de generación (del 1 al 9) con una letra que indica el método de aprendizaje, y a veces el nivel exacto.
Por ejemplo, la etiqueta "8L33" significa: Generación 8 (8), Por nivel (L), al nivel 33 (33).
Significado de las letras clave:
 * L (Level-up): Aprendido subiendo de nivel. A menudo viene acompañado del número de nivel (ej. 9L18, 8L33). Si solo aparece la letra o el nivel es 0 (ej. 9L0), indica que se aprende al evolucionar o al nivel base.
 * M (Machine): Aprendido mediante MT / MO (Technical/Hidden Machine) en esa generación (ej. 9M, 8M).
 * T (Tutor): Enseñado por un Tutor de Movimientos (Move Tutor) (ej. 7T, 8T).
 * E (Egg): Movimiento de crianza / Huevo (Egg Move) (ej. 9E, 7E).
 * V (Virtual Console): Movimiento obtenido en los juegos clásicos de la Consola Virtual (Rojo, Azul, Amarillo, Oro, Plata, Cristal adaptados a 3DS) (ej. 7V, 8V).
 * S (Special) / Otros: Movimientos de eventos especiales o distribuciones (ej. 5S3, 6S5).

  
