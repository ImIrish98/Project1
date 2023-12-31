import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{title: 'Day 2'}} />

            <Text>Day Details Screen</Text>
        </View>
    );
};

export default DayDetailsScreen;