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

export default function Deseos() {
  const coleccion = useColeccion();
  const juegos = JUEGOS.filter((juego) => coleccion.deseos.includes(juego.id));

  return (
    <Pantalla>
      <View style={styles.encabezado}>
        <ThemedText style={styles.etiqueta}>PARA MÁS ADELANTE</ThemedText>
        <ThemedText style={styles.titulo}>Lista de deseos</ThemedText>
        <ThemedText themeColor="textSecondary">
          Guardá los juegos que te interesan y encontralos acá.
        </ThemedText>
      </View>

      {juegos.length === 0 ? (
        <ThemedView type="backgroundElement" style={styles.vacio}>
          <ThemedText style={styles.icono}>💙</ThemedText>
          <ThemedText type="smallBold">Todavía no guardaste juegos</ThemedText>
          <ThemedText type="small" themeColor="textSecondary" style={styles.vacioTexto}>
            Tocá el corazón de un juego para sumarlo a tu lista.
          </ThemedText>
          <Boton titulo="Descubrir juegos" onPress={() => router.navigate('/')} style={styles.boton} />
        </ThemedView>
      ) : (
        <>
          <ThemedText type="small" themeColor="textSecondary">{juegos.length} juegos guardados</ThemedText>
          <View style={styles.catalogo}>
            {juegos.map((juego) => (
              <TarjetaJuego
                key={juego.id}
                juego={juego}
                deseado
                enBiblioteca={coleccion.biblioteca.includes(juego.id)}
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
  icono: { fontSize: 40, marginBottom: Spacing.one },
  vacioTexto: { maxWidth: 270, textAlign: 'center' },
  boton: { marginTop: Spacing.two },
  catalogo: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: Spacing.three },
});
