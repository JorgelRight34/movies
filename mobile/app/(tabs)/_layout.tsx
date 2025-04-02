import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { GluestackUIProvider } from "@gluestack-ui/themed";

import "../../global.css";
import theme from "@/styles/theme";

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
          tabBarActiveTintColor: theme.colors.primary,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: true,
        }}
        initialRouteName="index"
      >
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favoritos",
            tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Películas",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Buscar",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="search" color={color} />
            ),
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}
