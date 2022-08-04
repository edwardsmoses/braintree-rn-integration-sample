import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const HOST = "http://10.0.2.2:3000";

const BrainTreePaymentWebView = ({
  onNonceRetrieved
}) => {

  return (
    <View style={{ height: 450 }}>
      <Text style={{ fontSize: 30, fontWeight: '500' }}>BrainTree Payment Integration</Text>
      <WebView
        source={{ uri: `${HOST}/braintree` }}
        onMessage={(event) => {
          onNonceRetrieved(event.nativeEvent.data);
        }}
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <BrainTreePaymentWebView
        onNonceRetrieved={async (nonce) => {
          const response = await axios.post(`${HOST}/createPaymentTransaction`, {
            amount: 10, //change to price gotten from your user
            nonce: nonce,
          });
          const { isPaymentSuccessful, errorText } = await response.data;
          Alert.alert(isPaymentSuccessful ? "Payment successful" : `Payment error - ${errorText}`);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
