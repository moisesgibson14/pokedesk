import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Moves = ({ moves }) => {
    return (
        <View style={styles.badgeContainer}>
            {moves.map((m) => (
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {m.move.name}
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
        justifyContent: 'space-between',
    },
    item: {
        height: 10,
        backgroundColor: "#f2f2f2",
        borderRadius: 15,
        elevation: 10,
        padding: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 10,
        padding: 5,
        fontWeight: 'bold',
    },
})

export default Moves;