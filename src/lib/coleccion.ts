import { useSyncExternalStore } from 'react';

type Coleccion = { biblioteca: string[]; deseos: string[] };

let coleccion: Coleccion = { biblioteca: [], deseos: [] };
const oyentes = new Set<() => void>();

function suscribir(oyente: () => void) {
  oyentes.add(oyente);
  return () => oyentes.delete(oyente);
}

function actualizar(cambio: Partial<Coleccion>) {
  coleccion = { ...coleccion, ...cambio };
  oyentes.forEach((oyente) => oyente());
}

export function useColeccion(): Coleccion {
  return useSyncExternalStore(suscribir, () => coleccion, () => coleccion);
}

export function alternarDeseo(id: string) {
  const deseos = coleccion.deseos.includes(id)
    ? coleccion.deseos.filter((juegoId) => juegoId !== id)
    : [id, ...coleccion.deseos];
  actualizar({ deseos });
}

export function agregarABiblioteca(id: string) {
  if (coleccion.biblioteca.includes(id)) return;
  actualizar({
    biblioteca: [id, ...coleccion.biblioteca],
    deseos: coleccion.deseos.filter((juegoId) => juegoId !== id),
  });
}
