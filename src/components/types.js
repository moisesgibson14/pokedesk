import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Types = ({ types }) => {
    return (
        <View style={styles.badgeContainer}>
            {types.map((t) => (
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {t.type.name}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    item: {
        height: 20,
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
        padding: 5,
    },
})

export default Types;