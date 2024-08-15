import { TextInput, View, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import { useState } from "react";

function StartGameScreen({ onConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const inputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number < 1 || number > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirm(number);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={inputHandler}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={confirmHandler}>Confirm</CustomButton>
        <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#36031d",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    fontSize: 32,
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StartGameScreen;
