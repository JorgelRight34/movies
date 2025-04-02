import { StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
    borderLeftAccent: {
        borderLeftColor: theme.colors.primary,
        borderLeftWidth: 2,
    },
    bgAccent: {
        backgroundColor: theme.colors.primary
    }
})

export default styles;