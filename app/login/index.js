import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>This is a title</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 10,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#f3f3f3",
      },
})

export default Index;
