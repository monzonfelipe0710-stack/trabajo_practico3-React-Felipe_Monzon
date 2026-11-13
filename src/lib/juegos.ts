export type Juego = {
  id: string;
  titulo: string;
  genero: string;
  descripcion: string;
  precio: string;
  icono: string;
  color: string;
  luz: string;
};

export const JUEGOS: Juego[] = [
  {
    id: 'nebulosa-cero',
    titulo: 'Nebulosa Cero',
    genero: 'Aventura espacial',
    descripcion: 'Explorá sistemas olvidados, conocé civilizaciones lejanas y descubrí qué se esconde al otro lado de la nebulosa.',
    precio: 'ARS 5.200',
    icono: '🪐',
    color: '#254E73',
    luz: '#64B8EA',
  },
  {
    id: 'bosque-encantado',
    titulo: 'Bosque Encantado',
    genero: 'Exploración · Indie',
    descripcion: 'Una aventura tranquila entre criaturas mágicas, secretos antiguos y senderos que cambian con cada estación.',
    precio: 'ARS 3.400',
    icono: '🌲',
    color: '#285247',
    luz: '#6DBD8A',
  },
  {
    id: 'circuito-nocturno',
    titulo: 'Circuito Nocturno',
    genero: 'Carreras · Arcade',
    descripcion: 'Ajustá tu vehículo, encontrá la mejor línea y competí en circuitos iluminados por neón.',
    precio: 'ARS 4.800',
    icono: '🏎️',
    color: '#693A56',
    luz: '#E477A6',
  },
  {
    id: 'isla-de-papel',
    titulo: 'Isla de Papel',
    genero: 'Estrategia · Casual',
    descripcion: 'Construí una pequeña isla, administrá sus recursos y ayudá a sus habitantes a crear un nuevo hogar.',
    precio: 'ARS 2.900',
    icono: '🏝️',
    color: '#66502F',
    luz: '#E6B75E',
  },
  {
    id: 'ritmo-robot',
    titulo: 'Ritmo Robot',
    genero: 'Música · Ritmo',
    descripcion: 'Seguí el pulso, encadená combos y llevá a una banda de robots al escenario principal.',
    precio: 'Gratis',
    icono: '🤖',
    color: '#394A70',
    luz: '#8E9EF0',
  },
  {
    id: 'archivo-sombras',
    titulo: 'Archivo de Sombras',
    genero: 'Misterio · Narrativo',
    descripcion: 'Ordená las pistas de un archivo perdido y reconstruí una historia que nadie recuerda completa.',
    precio: 'ARS 3.900',
    icono: '🔍',
    color: '#45434F',
    luz: '#A79BC6',
  },
];
