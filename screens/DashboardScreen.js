import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const DashboardScreen = ({ navigation, userName = 'John Doe' }) => {
  return (
    <SafeAreaView style={styles.dashboard}>
      <View style={styles.dashboardHeader}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.welcomeText}>Welcome, {userName}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={styles.statusLabel}>CONNECTED</Text>
            <Text style={styles.statusValue}>Yes</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.statusLabel}>NETWORKS</Text>
            <Text style={styles.statusValue}>12</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('QRScanner')}
          >
            <View style={[styles.actionIcon, styles.qrIcon]} />
            <Text style={styles.actionTitle}>QR Scanner</Text>
            <Text style={styles.actionDescription}>Scan to connect to hotspot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('WiFiScanner')}
          >
            <View style={[styles.actionIcon, styles.wifiIcon]} />
            <Text style={styles.actionTitle}>WiFi Scanner</Text>
            <Text style={styles.actionDescription}>View available networks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('HotspotSetup')}
          >
            <View style={[styles.actionIcon, styles.hotspotIcon]} />
            <Text style={styles.actionTitle}>Hotspot Setup</Text>
            <Text style={styles.actionDescription}>Configure mobile hotspot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => navigation.navigate('WarrantyClaims')}
          >
            <View style={[styles.actionIcon, styles.warrantyIcon]} />
            <Text style={styles.actionTitle}>Warranty Claims</Text>
            <Text style={styles.actionDescription}>Manage your warranty claims</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerItem, styles.activeFooterItem]}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Network')} // Assuming 'Network' screen exists
        >
          <Text style={styles.footerText}>Network</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Scan')} // Assuming 'Scan' screen exists
        >
          <Text style={styles.footerText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Settings')} // Assuming 'Settings' screen exists
        >
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dashboardHeader: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  welcomeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  statusBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: '45%',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 12,
    color: '#666',
  },
  statusValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  mainContent: {
    padding: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  quickActions: {},
  actionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  qrIcon: {
    backgroundColor: '#4CAF50',
  },
  wifiIcon: {
    backgroundColor: '#2196F3',
  },
  hotspotIcon: {
    backgroundColor: '#FF9800',
  },
  warrantyIcon: {
    backgroundColor: '#9C27B0',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    padding: 10,
  },
  activeFooterItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
  },
  footerText: {
    fontSize: 14,
  },
});

export default DashboardScreen;
