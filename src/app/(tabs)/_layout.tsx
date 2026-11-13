import { Tabs } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

const icono = (emoji: string) => function IconoPestana() {
  return <Text style={styles.icono}>{emoji}</Text>;
};

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#55B8FF',
      tabBarInactiveTintColor: theme.textSecondary,
      tabBarLabelStyle: styles.etiqueta,
      tabBarStyle: [styles.barra, { backgroundColor: theme.backgroundElement, borderTopColor: theme.backgroundSelected }],
    }}>
      <Tabs.Screen name="index" options={{ title: 'Explorar', tabBarIcon: icono('🎮') }} />
      <Tabs.Screen name="avisos" options={{ title: 'Biblioteca', tabBarIcon: icono('📚') }} />
      <Tabs.Screen name="deseos" options={{ title: 'Deseos', tabBarIcon: icono('💙') }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  barra: { height: 66, paddingTop: 7, paddingBottom: 8 },
  etiqueta: { fontSize: 11, fontWeight: '600' },
  icono: { fontSize: 20 },
});
