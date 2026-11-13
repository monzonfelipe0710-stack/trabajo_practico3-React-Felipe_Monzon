import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Boton } from '@/components/boton';
import { Pantalla } from '@/components/pantalla';
import { TarjetaJuego } from '@/components/tarjeta-juego';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { alternarDeseo, useColeccion } from '@/lib/coleccion';
import { JUEGOS } from '@/lib/juegos';

export default function Biblioteca() {
  const coleccion = useColeccion();
  const juegos = JUEGOS.filter((juego) => coleccion.biblioteca.includes(juego.id));

  return (
    <Pantalla>
      <View style={styles.encabezado}>
        <ThemedText style={styles.etiqueta}>TU COLECCIÓN</ThemedText>
        <ThemedText style={styles.titulo}>Mi biblioteca</ThemedText>
        <ThemedText themeColor="textSecondary">
          Tus juegos, siempre a mano. Sumá una nueva aventura cuando quieras.
        </ThemedText>
      </View>

      {juegos.length === 0 ? (
        <ThemedView type="backgroundElement" style={styles.vacio}>
          <ThemedText style={styles.icono}>🎮</ThemedText>
          <ThemedText type="smallBold">Tu biblioteca está esperando</ThemedText>
          <ThemedText type="small" themeColor="textSecondary" style={styles.vacioTexto}>
            Explorá el catálogo y agregá tus próximos juegos favoritos.
          </ThemedText>
          <Boton titulo="Explorar juegos" onPress={() => router.navigate('/')} style={styles.boton} />
        </ThemedView>
      ) : (
        <>
          <ThemedText type="small" themeColor="textSecondary">
            {juegos.length} {juegos.length === 1 ? 'juego' : 'juegos'} en tu biblioteca
          </ThemedText>
          <View style={styles.catalogo}>
            {juegos.map((juego) => (
              <TarjetaJuego
                key={juego.id}
                juego={juego}
                deseado={coleccion.deseos.includes(juego.id)}
                enBiblioteca
                onAbrir={() => router.push({ pathname: '/juego/[id]', params: { id: juego.id } })}
                onAlternarDeseo={() => alternarDeseo(juego.id)}
              />
            ))}
          </View>
        </>
      )}
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  encabezado: { gap: Spacing.two },
  etiqueta: { color: '#55B8FF', fontSize: 10, fontWeight: '900', letterSpacing: 1.3 },
  titulo: { fontSize: 28, lineHeight: 34, fontWeight: '800' },
  vacio: { alignItems: 'center', padding: Spacing.four, borderRadius: 24, gap: Spacing.two },
  icono: { fontSize: 42, marginBottom: Spacing.one },
  vacioTexto: { maxWidth: 270, textAlign: 'center' },
  boton: { marginTop: Spacing.two },
  catalogo: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: Spacing.three },
});
