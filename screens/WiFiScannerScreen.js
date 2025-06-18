import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button, RefreshControl } from 'react-native';

const WifiScannerScreen = () => {
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data for demonstration
  const sampleNetworks = [
    { id: '1', name: 'NA_1234567890123', signal: 'Strong Signal', frequency: '2.4GHz', connected: true },
    { id: '2', name: 'HomeWiFi_2G', signal: 'Medium Signal', frequency: '2.4GHz', connected: false },
    { id: '3', name: 'Office_Network', signal: 'Weak Signal', frequency: '2.4GHz', connected: false },
    { id: '4', name: 'Guest_WiFi', signal: 'Strong Signal', frequency: '2.4GHz', connected: false },
  ];

  useEffect(() => {
    // Simulate network scanning
    setTimeout(() => {
      setNetworks(sampleNetworks);
      setLoading(false);
    }, 1000);
  }, []);

  const handleConnect = (networkName) => {
    alert(`Connecting to ${networkName}`);
  };

  const refreshNetworks = () => {
    setLoading(true);
    // Simulate refreshing networks
    setTimeout(() => {
      setNetworks(sampleNetworks);
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WiFi Scanner</Text>
      <Text style={styles.subtitle}>2.4GHz Networks Available</Text>

      {loading ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Scanning...</Text>
      ) : (
        <FlatList
          data={networks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.networkItem, item.connected && styles.connected]}>
              <Text style={styles.networkName}>
                {item.name} {item.connected ? '(Connected)' : null}
              </Text>
              <Text style={styles.signal}>{item.frequency} - {item.signal}</Text>
              <Button title="Connect" onPress={() => handleConnect(item.name)} color="#ff5252" />
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refreshNetworks} />
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      <Text style={styles.footer}>Pull down to refresh networks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff5252',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  networkItem: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  connected: {
    borderColor: 'green',
    borderWidth: 2,
  },
  networkName: {
    fontSize: 18,
    marginBottom: 4,
  },
  signal: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
    color: '#888',
  },
});

export default WifiScannerScreen;
