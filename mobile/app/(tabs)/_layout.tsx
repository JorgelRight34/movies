import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import "../../global.css";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <GluestackUIProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#800020",
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: true,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Películas",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favoritos",
            tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}
