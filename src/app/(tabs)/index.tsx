import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Boton } from '@/components/boton';
import { Pantalla } from '@/components/pantalla';
import { TarjetaJuego } from '@/components/tarjeta-juego';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { JUEGOS } from '@/lib/juegos';
import { alternarDeseo, useColeccion } from '@/lib/coleccion';

export default function Explorar() {
  const coleccion = useColeccion();
  const destacado = JUEGOS[0];

  return (
    <Pantalla>
      <View style={styles.encabezado}>
        <View style={styles.marca}>
          <View style={styles.logo}>
            <ThemedText style={styles.logoTexto}>NP</ThemedText>
          </View>
          <View>
            <ThemedText style={styles.nombreApp}>NEXO PLAY</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Tu próximo juego está acá</ThemedText>
          </View>
        </View>
        <ThemedText style={styles.saludo}>Descubrí tu próxima aventura.</ThemedText>
      </View>

      <View style={styles.destacado}>
        <View style={styles.destacadoTexto}>
          <ThemedText style={styles.etiqueta}>SELECCIÓN DE LA SEMANA</ThemedText>
          <ThemedText style={styles.tituloDestacado}>{destacado.titulo}</ThemedText>
          <ThemedText style={styles.descripcionDestacada}>
            Perdé la noción del tiempo. Encontrá un universo nuevo.
          </ThemedText>
        </View>
        <ThemedView style={styles.portadaDestacada}>
          <ThemedText style={styles.portadaEmoji}>{destacado.icono}</ThemedText>
          <View style={styles.orbita} />
          <ThemedText style={styles.portadaNombre}>{destacado.titulo.toUpperCase()}</ThemedText>
        </ThemedView>
        <View style={styles.destacadoPie}>
          <View>
            <ThemedText style={styles.precio}>{destacado.precio}</ThemedText>
            <ThemedText style={styles.generoDestacado}>{destacado.genero}</ThemedText>
          </View>
          <Boton
            titulo="Ver juego"
            onPress={() => router.push({ pathname: '/juego/[id]', params: { id: destacado.id } })}
            style={styles.botonDestacado}
          />
        </View>
      </View>

      <View style={styles.coleccionResumen}>
        <View style={styles.resumenItem}>
          <ThemedText style={styles.resumenNumero}>{coleccion.biblioteca.length}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">En tu biblioteca</ThemedText>
        </View>
        <View style={styles.separador} />
        <View style={styles.resumenItem}>
          <ThemedText style={[styles.resumenNumero, styles.numeroAzul]}>{coleccion.deseos.length}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">En tu lista de deseos</ThemedText>
        </View>
      </View>

      <View style={styles.seccionEncabezado}>
        <View>
          <ThemedText style={styles.seccionTitulo}>Explorá el catálogo</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">Historias nuevas, mundos infinitos</ThemedText>
        </View>
        <ThemedText style={styles.etiquetaCatalogo}>{JUEGOS.length} JUEGOS</ThemedText>
      </View>

      <View style={styles.catalogo}>
        {JUEGOS.map((juego) => (
          <TarjetaJuego
            key={juego.id}
            juego={juego}
            deseado={coleccion.deseos.includes(juego.id)}
            enBiblioteca={coleccion.biblioteca.includes(juego.id)}
            onAbrir={() => router.push({ pathname: '/juego/[id]', params: { id: juego.id } })}
            onAlternarDeseo={() => alternarDeseo(juego.id)}
          />
        ))}
      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  encabezado: { gap: Spacing.three },
  marca: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A9FFF',
  },
  logoTexto: { color: '#FFFFFF', fontSize: 14, fontWeight: '900', letterSpacing: 0.5 },
  nombreApp: { color: '#55B8FF', fontSize: 12, fontWeight: '900', letterSpacing: 1.5 },
  saludo: { fontSize: 25, lineHeight: 31, fontWeight: '800' },
  destacado: {
    overflow: 'hidden',
    padding: Spacing.three,
    gap: Spacing.three,
    borderRadius: 24,
    backgroundColor: '#18334B',
  },
  destacadoTexto: { gap: Spacing.two },
  etiqueta: { color: '#8FCDF5', fontSize: 10, fontWeight: '800', letterSpacing: 1.2 },
  tituloDestacado: { color: '#FFFFFF', fontSize: 25, lineHeight: 30, fontWeight: '800' },
  descripcionDestacada: { color: '#C4D8E8', fontSize: 14, lineHeight: 20 },
  portadaDestacada: {
    position: 'relative',
    height: 142,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#214C71',
  },
  portadaEmoji: { zIndex: 1, fontSize: 62 },
  orbita: {
    position: 'absolute',
    width: 160,
    height: 160,
    right: -25,
    top: -85,
    borderWidth: 18,
    borderColor: '#4C89B7',
    borderRadius: 80,
    opacity: 0.55,
  },
  portadaNombre: { position: 'absolute', bottom: 10, color: '#E8F4FC', fontSize: 10, fontWeight: '900', letterSpacing: 2 },
  destacadoPie: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.two },
  precio: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  generoDestacado: { color: '#A8C3D7', fontSize: 12, marginTop: 3 },
  botonDestacado: { paddingVertical: 11, paddingHorizontal: Spacing.three },
  coleccionResumen: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.three,
    borderRadius: 18,
    backgroundColor: '#17212D',
  },
  resumenItem: { flex: 1, gap: 2 },
  resumenNumero: { color: '#F3A847', fontSize: 22, fontWeight: '900' },
  numeroAzul: { color: '#55B8FF' },
  separador: { width: 1, height: 34, marginHorizontal: Spacing.three, backgroundColor: '#314253' },
  seccionEncabezado: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  seccionTitulo: { fontSize: 19, fontWeight: '800' },
  etiquetaCatalogo: { color: '#55B8FF', fontSize: 10, fontWeight: '800', letterSpacing: 0.8 },
  catalogo: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: Spacing.three },
});
