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
  
  const array = [
    {
      questionId: 1,
      question: "HOW ARE YOU?",
      Options: [
        {
          label: "Fine",
          value: "Yes",
          questionId: 1,
        },
        {
          label: "Bad",
          value: "No",
          questionId: 1,
        }
      ],
    },
    {
      questionId: 2,
      question: "HOW IS YOUR DAY?",
      Options: [
        {
          label: "Fine",
          value: "Yes",
          questionId: 2,
        },
        {
          label: "Bad",
          value: "No",
          questionId: 2,
        }
      ],
    },
  ];
  const radioValues = [];

  const radioData = (option, questioData) => {
    const questionId = questioData.questionid ?? undefined;
    const foundIndex = radioValues.findIndex(
      (element) => element.questionId === questionId
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
        <Text>{itemData.item.question}</Text>
        <View style={{ marginTop: 50 }}>
          <RadioForm
            radio_props={itemData.item.Options}
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
      data={array}
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
