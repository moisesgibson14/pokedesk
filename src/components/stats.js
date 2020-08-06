import React, { useRef, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Animated, Dimensions } from 'react-native';

const Stats = ({ stats }) => {
  const { width } = Dimensions.get('window');

  const charts = stats.map((c, i) => ({ animation: useRef(new Animated.Value(0)).current }))

  useEffect(() => {
    stats.map((s, i) => {
      Animated.timing(charts[i].animation, {
        toValue: width * s.base_stat / 100 - 100,
        duration: 300,
        useNativeDriver: false,
        delay: 300,
      }).start();
    })
  }, []);

  const widthStyles = stats.map((s, i) => ({
    style: {
      width: charts[i].animation,
    }
  }))

  return (
    <View>
      {stats.map((s, i) => (
        <View>
          <Text style={{ marginBottom: 10 }}>{s.stat.name}</Text>
          <Animated.View style={[{
            height: 25,
            width: 0,
            backgroundColor: "dodgerblue",
            justifyContent: 'center',
            borderRadius: 12.5,
            marginBottom: 16,
          }, widthStyles[i].style]}>
            <Text style={styles.itemTextChar}>
              {s.base_stat} %
            </Text>
          </Animated.View>
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    height: 20,
    backgroundColor: "red",
    borderRadius: 15,
    elevation: 10,
    padding: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 10,
    padding: 5,
  },
  itemTextChar: {
    fontSize: 12,
    color: "white",
    fontWeight: 'bold',
    marginLeft: 10,
  }
})

export default Stats;