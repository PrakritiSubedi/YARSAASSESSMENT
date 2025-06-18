// hotspotsetup.js (React Native) 
 
import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import QRCode from 'react-native-qrcode-svg'; 
 
const HotspotSetupScreen = () => { 
  // These values could come from props, state, or API calls 
  const hotspotActive = true; 
  const ssid = "NA_1234567890123"; 
  const password = "1234567890123"; 
 
  // Prepare WiFi QR code string format 
  const qrCodeData = `WIFI:S:${ssid};T:WPA;P:${password};;`; 
 
  return ( 
    <View style={styles.container}> 
      <Text style={hotspotActive ? styles.active : styles.inactive}> 
        {hotspotActive ? "Hotspot Active\nReady for connections" : 
"Hotspot Inactive\nPlease activate the hotspot"} 
      </Text> 
 
      <View style={styles.networkInfo}> 
        <Text>Network Name (SSID): {ssid}</Text> 
        <Text>Password: {password}</Text> 
      </View> 
 
      <View style={styles.qrCode}> 
        <QRCode value={qrCodeData} size={150} /> 
      </View> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', 
padding: 20 }, 
  active: { color: 'green', fontWeight: 'bold', fontSize: 18, 
textAlign: 'center', marginBottom: 10 }, 
  inactive: { color: 'red', fontWeight: 'bold', fontSize: 18, 
textAlign: 'center', marginBottom: 10 }, 
  networkInfo: { marginVertical: 20 }, 
  qrCode: { marginTop: 20 }, 
}); 
 
export default HotspotSetupScreen; 