import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { SubmitButtonProps } from "../types/types";
import { FramesConsumer } from "../Frames";

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = (props) => {
  return (
    <FramesConsumer>
      {({ submitCard }) => {
        if (!submitCard) {
          throw "It looks like you are trying to render the SubmitButton outside of the Frames Component.";
        }

        const { textInputProps = {}, ...touchableProps } = props;
        const { title } = textInputProps;

        return (
          <TouchableOpacity
            {...touchableProps}
            style={[styles.buttonContainer, touchableProps.style]}
            onPress={(e) => {
              submitCard();
              if (props.onPress) props.onPress(e);
            }}
          >
            <Text {...textInputProps}  style={[styles.buttonText, textInputProps.style]}>{title}</Text>
          </TouchableOpacity>
        );
      }}
    </FramesConsumer>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
  },
});

export default SubmitButton;
