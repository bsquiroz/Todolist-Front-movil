import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TaskScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

const optionsHome = ({ navigation }) => ({
    title: "Task app (Node/React-native)",
    headerStyle: { backgroundColor: "#222f3e" },
    headerTitleStyle: { color: "#fff" },
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Taks")}>
            <Text style={{ color: "#fff", marginRight: 20, fontSize: 20 }}>
                New
            </Text>
        </TouchableOpacity>
    ),
});

const optionsTasks = ({ navigation }) => ({
    title: "Create a tasks",
    headerStyle: { backgroundColor: "#222f3e" },
    headerTitleStyle: { color: "#fff" },
    headerTinColor: { color: "#fff" },
});

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={optionsHome}
                />
                <Stack.Screen
                    name="Taks"
                    component={TaskScreen}
                    options={optionsTasks}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
