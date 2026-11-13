import { Pressable, StyleSheet, View } from 'react-native';

import { PortadaJuego } from '@/components/portada-juego';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import type { Juego } from '@/lib/juegos';

type Props = {
  juego: Juego;
  deseado: boolean;
  enBiblioteca: boolean;
  onAbrir: () => void;
  onAlternarDeseo: () => void;
};

export function TarjetaJuego({ juego, deseado, enBiblioteca, onAbrir, onAlternarDeseo }: Props) {
  return (
    <ThemedView type="backgroundElement" style={styles.tarjeta}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Ver ${juego.titulo}`}
        onPress={onAbrir}>
        <PortadaJuego juego={juego} />
        <View style={styles.informacion}>
          <ThemedText type="smallBold" numberOfLines={1}>{juego.titulo}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>{juego.genero}</ThemedText>
        </View>
      </Pressable>
      <View style={styles.pie}>
        <ThemedText style={styles.precio}>{enBiblioteca ? 'EN TU BIBLIOTECA' : juego.precio}</ThemedText>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={deseado ? 'Quitar de lista de deseos' : 'Añadir a lista de deseos'}
          accessibilityState={{ selected: deseado }}
          onPress={onAlternarDeseo}
          hitSlop={8}
          style={({ pressed }) => [styles.favorito, pressed && styles.presionado]}>
          <ThemedText style={[styles.corazon, deseado && styles.corazonActivo]}>{deseado ? '♥' : '♡'}</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tarjeta: { width: '48%', minWidth: 145, flexGrow: 1, padding: 8, borderRadius: 18 },
  informacion: { gap: 2, paddingHorizontal: Spacing.one, paddingTop: Spacing.two },
  pie: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Spacing.two, paddingHorizontal: Spacing.one },
  precio: { color: '#A9C6DC', fontSize: 9, fontWeight: '800', letterSpacing: 0.3 },
  favorito: { width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: '#243343' },
  corazon: { color: '#A9C6DC', fontSize: 19, lineHeight: 22 },
  corazonActivo: { color: '#FF7187' },
  presionado: { opacity: 0.65 },
});
