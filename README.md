📱 Mobile App
A role-based mobile app built with React Native (Expo) that supports Wi-Fi setup, QR code scanning, user activity logging, and warranty claim integration.

🚀 Features
🔐 Login Authentication (Admin & User roles)

🕵️‍♂️ Activity Logging (logins, Wi-Fi connections, etc.)

📡 Hotspot Setup Instructions

🔍 QR Code Scanner to auto-connect to hotspot

🌐 Wi-Fi Scanner (2.4GHz networks)

🌍 External Browser Integration (redirect to https://yarsa.tech)

🛠️ Warranty Claim System with prefilled forms

Install dependencies /
npm install

Install required Expo packages   /
npx expo install @expo/vector-icons
npx expo install expo-barcode-scanner expo-web-browser
npm install react-native-qrcode-svg
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

Start the app /
npx expo start

Backend Configuration (PHP + XAMPP)
API Endpoints:
login.php — User authentication

log_activity.php — Log user actions

get_logs.php — Admin: view activity logs

get_ready_to_ship_items.php — Warranty item

📦 DB Name: youcan

API TEST

<img width="845" alt="image" src="https://github.com/user-attachments/assets/f5ec0193-63d8-42b3-8e8a-822d0fba9871" />



Screenshots

<img width="161" alt="image" src="https://github.com/user-attachments/assets/8515b3da-1690-45b2-a37f-ae20a998c576" />

<img width="163" alt="image" src="https://github.com/user-attachments/assets/fcd52c98-f824-4ac3-9773-36360f11d06f" />


<img width="161" alt="image" src="https://github.com/user-attachments/assets/e91e89b7-d875-408d-abf2-92ac1c217d31" />



