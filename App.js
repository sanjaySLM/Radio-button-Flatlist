import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function App() {
  const renderedArray = [
    {
      optionids: [
        {
          value: 1,
          label: "Yes",
          questionid: 1,
        },
        {
          value: 2,
          label: "No",
          questionid: 1,
        },
        {
          value: 3,
          label: "Null",
          questionid: 1,
        },
      ],
      questionid: 1,
      questionname:
        "Did you encounter any navigational problem during the tenure onboard?",
    },
    {
      optionids: [
        {
          value: 4,
          label: "Yes",
          questionid: 2,
        },
        {
          value: 5,
          label: "No",
          questionid: 2,
        },
        {
          value: 6,
          label: "null",
          questionid: 2,
        },
      ],
      questionid: 2,
      questionname:
        "Did you encounter any incidents relating to Cargo shortages and/or Cargo problems during the tenure onboard?",
    },
    {
      optionids: [
        {
          value: 7,
          label: "Yes",
          questionid: 3,
        },
        {
          value: 8,
          label: "No",
          questionid: 3, 
        },
      ],
      questionid: 3,
      questionname:
        "How was your relationship with the vessel's owners (if interacted)?",
    },
  ];
  const radioValues = [];

  const radioData = (option, questioData) => {
    const questionId = questioData.questionid ?? undefined;
    const foundIndex = radioValues.findIndex(
      (element) =>
         element.questionId === questionId
    );
    console.log(foundIndex);
    if (foundIndex !== -1) {
      radioValues[foundIndex] = { option, questionId };
    } else {
      radioValues.push({ option, questionId });
    }
    console.log("---->", radioValues);
  };

  const renderGridItem = (itemData) => {
    return (
      <View style={{ marginTop: 50 }}>
        <Text>{itemData.item.questionname}</Text>
        <View style={{ marginTop: 50 }}>
          <RadioForm
            radio_props={itemData.item.optionids}
            initial={0}
            onPress={(value) => {
              radioData(value, itemData.item);
            }}
            // formHorizontal={true}
            animation={true}
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      //   ListHeaderComponent={renderGridHeader}
      keyExtractor={() => {
        return (
          new Date().getTime().toString() +
          Math.floor(
            Math.random() * Math.floor(new Date().getTime())
          ).toString()
        );
      }}
      data={renderedArray}
      renderItem={renderGridItem}
      numColumns={1}
    />
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
