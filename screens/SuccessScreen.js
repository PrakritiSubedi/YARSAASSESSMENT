import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const SuccessScreen = () => {
  const handleOpenLink = () => {
    Linking.openURL('https://yarsa.tech');
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Connection Successful</Text>
        </View>

        <View style={styles.main}>
          <MaterialIcons name="check-circle" size={72} color="#22c55e" style={styles.iconCheck} />
          <Text style={styles.title}>Connected Successfully!</Text>
          <Text style={styles.subtitle}>You are now connected to the hotspot</Text>

          <View style={styles.infoPanel}>
            <View style={styles.infoHeader}>
              <MaterialIcons name="wifi" size={20} color="#22c55e" style={styles.iconWifi} />
              <Text style={styles.infoHeaderText}>Network: NA_1234567890123</Text>
            </View>
            <Text style={styles.infoDetail}>Signal Strength: Strong</Text>
            <Text style={styles.infoDetail}>Connection Time: 10:45 AM</Text>
            <Text style={styles.infoDetail}>IP Address: 192.168.1.123</Text>
          </View>

          <View style={styles.actionPanel}>
            <Text style={styles.actionTitle}>Ready to Browse</Text>
            <Text style={styles.actionDesc}>The website will open automatically in a few seconds...</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
              <Text style={styles.buttonText}>Open yarsa.tech Now</Text>
              <Feather name="external-link" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    maxWidth: 400,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    backgroundColor: '#22c55e',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  main: {
    padding: 24,
    alignItems: 'center',
  },
  iconCheck: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 24,
  },
  infoPanel: {
    backgroundColor: '#dcfce7',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 24,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWifi: {
    marginRight: 8,
  },
  infoHeaderText: {
    color: '#166534',
    fontWeight: '700',
    fontSize: 16,
  },
  infoDetail: {
    color: '#166534',
    fontSize: 14,
    marginBottom: 4,
  },
  actionPanel: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
    width: '100%',
  },
  actionTitle: {
    color: '#1e40af',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
  },
  actionDesc: {
    color: '#3b82f6',
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2563eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
  },
});
export default SuccessScreen;
