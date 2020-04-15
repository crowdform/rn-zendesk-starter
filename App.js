import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import * as RNZendesk from "rn-zendesk";

export default function App() {
  useEffect(() => {
    console.log(RNZendesk, "boot");
    RNZendesk.initialize({
      appId: "6b66515a3d3674dbee65411209cfc8737e701be3021d1869",
      clientId: "mobile_sdk_client_8b01a1524b6cb7dc4811",
      zendeskUrl: "https://mypura.zendesk.com",
    });

    console.log(RNZendesk, "login");
    RNZendesk.identifyAnonymous("Demo Customer", "demo@cf.com");
    console.log(RNZendesk, "login - done");
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(RNZendesk, "click");
          RNZendesk.showHelpCenter({
            subject:
              "Title for any new ticket created by the user inside helpcenter",
            // hideContactSupport: false,
            groupType: 0,
            tags: ["zendesk"],
            groupIds: ["360002936899"],
          });
          console.log(RNZendesk, "after");
        }}
      >
        <Text>Great agins!!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
