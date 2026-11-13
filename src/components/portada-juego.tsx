import { StyleSheet, Text, View } from 'react-native';

import type { Juego } from '@/lib/juegos';

type Props = { juego: Juego; grande?: boolean };

export function PortadaJuego({ juego, grande }: Props) {
  return (
    <View
      accessibilityLabel={`Portada ilustrada de ${juego.titulo}`}
      style={[
        styles.portada,
        grande ? styles.grande : styles.normal,
        { backgroundColor: juego.color },
      ]}>
      <View style={[styles.luz, { backgroundColor: juego.luz }]} />
      <View style={styles.anillo} />
      <Text style={[styles.icono, grande && styles.iconoGrande]}>{juego.icono}</Text>
      <Text style={[styles.nombre, grande && styles.nombreGrande]} numberOfLines={1}>
        {juego.titulo.toUpperCase()}
      </Text>
      <Text style={styles.genero}>{juego.genero.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  portada: { position: 'relative', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', borderRadius: 16 },
  normal: { height: 142, width: '100%' },
  grande: { height: 235, width: '100%', borderRadius: 22 },
  luz: { position: 'absolute', width: 160, height: 160, top: -70, right: -45, borderRadius: 80, opacity: 0.55 },
  anillo: { position: 'absolute', width: 120, height: 120, left: -60, bottom: -70, borderWidth: 14, borderColor: '#FFFFFF', borderRadius: 70, opacity: 0.12 },
  icono: { zIndex: 1, marginTop: -8, fontSize: 48 },
  iconoGrande: { fontSize: 86 },
  nombre: { position: 'absolute', bottom: 24, left: 10, right: 10, color: '#FFFFFF', fontSize: 10, fontWeight: '900', letterSpacing: 1.2, textAlign: 'center' },
  nombreGrande: { bottom: 32, fontSize: 17, letterSpacing: 2 },
  genero: { position: 'absolute', bottom: 9, color: '#E2EDF5', fontSize: 8, fontWeight: '700', letterSpacing: 1 },
});
