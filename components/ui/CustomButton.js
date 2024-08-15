import { View, Text, StyleSheet, Pressable } from "react-native";

export default CustomButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonViewContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonContent}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonViewContainer: {
    margin: 6,
    overflow: "hidden",
    borderRadius: 20,
    width: "40%",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonContent: {
    color: "white",
    textAlign: "center",
  },
});
