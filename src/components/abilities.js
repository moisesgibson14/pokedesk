import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Abilities = ({ abilities }) => {
    return (
        abilities.map((a) => (
            <View style={styles.item}>
                <Text style={styles.itemText}>
                    {a.ability.name}
                </Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    item: {
        height: 20,
        width: "60%",
        backgroundColor: "#f2f2f2",
        borderRadius: 15,
        elevation: 10,
        padding: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginVertical: 10,
    },
    itemText: {
        fontSize: 10,
        padding: 5
    },
})

export default Abilities;