import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Boton } from '@/components/boton';
import { Pantalla } from '@/components/pantalla';
import { PortadaJuego } from '@/components/portada-juego';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { agregarABiblioteca, alternarDeseo, useColeccion } from '@/lib/coleccion';
import { JUEGOS } from '@/lib/juegos';

export default function DetalleJuego() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const juego = JUEGOS.find((elemento) => elemento.id === id);
  const coleccion = useColeccion();

  if (!juego) {
    return (
      <Pantalla>
        <ThemedText style={styles.titulo}>No encontramos ese juego</ThemedText>
        <Boton titulo="Volver a explorar" onPress={() => router.replace('/')} />
      </Pantalla>
    );
  }

  const enBiblioteca = coleccion.biblioteca.includes(juego.id);
  const deseado = coleccion.deseos.includes(juego.id);

  return (
    <Pantalla>
      <Pressable onPress={() => router.back()} accessibilityRole="button" style={styles.volver}>
        <ThemedText style={styles.volverTexto}>‹  Volver al catálogo</ThemedText>
      </Pressable>

      <PortadaJuego juego={juego} grande />

      <View style={styles.tituloGrupo}>
        <ThemedText style={styles.titulo}>{juego.titulo}</ThemedText>
        <ThemedText style={styles.genero}>{juego.genero}</ThemedText>
      </View>

      <ThemedView type="backgroundElement" style={styles.detalle}>
        <ThemedText style={styles.etiqueta}>SOBRE ESTE JUEGO</ThemedText>
        <ThemedText style={styles.descripcion}>{juego.descripcion}</ThemedText>
        <View style={styles.info}>
          <View>
            <ThemedText style={styles.etiqueta}>PRECIO</ThemedText>
            <ThemedText style={styles.precio}>{juego.precio}</ThemedText>
          </View>
          <View>
            <ThemedText style={styles.etiqueta}>GÉNERO</ThemedText>
            <ThemedText type="smallBold">{juego.genero}</ThemedText>
          </View>
        </View>
      </ThemedView>

      <Boton
        titulo={enBiblioteca ? '✓  Ya está en tu biblioteca' : '＋  Añadir a mi biblioteca'}
        onPress={() => agregarABiblioteca(juego.id)}
      />
      <Boton
        titulo={deseado ? '♥  Quitar de lista de deseos' : '♡  Añadir a lista de deseos'}
        variante="secundario"
        onPress={() => alternarDeseo(juego.id)}
      />
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  volver: { alignSelf: 'flex-start', paddingVertical: Spacing.one },
  volverTexto: { color: '#55B8FF', fontSize: 14, fontWeight: '700' },
  tituloGrupo: { gap: Spacing.one },
  titulo: { fontSize: 28, lineHeight: 34, fontWeight: '800' },
  genero: { color: '#55B8FF', fontSize: 13, fontWeight: '700' },
  detalle: { padding: Spacing.three, borderRadius: 20, gap: Spacing.two },
  etiqueta: { color: '#55B8FF', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  descripcion: { fontSize: 15, lineHeight: 23 },
  info: { flexDirection: 'row', gap: Spacing.five, paddingTop: Spacing.two, borderTopWidth: 1, borderTopColor: '#344454' },
  precio: { marginTop: Spacing.one, fontSize: 16, fontWeight: '800' },
});
