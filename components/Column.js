import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../constants/index';
export default function Column(props) {
  // useEffect(() => {
  //   console.log(props.arr);
  // }, []);
  return (
    <View style={styles.col}>
      <View style={styles.row}>
        <Text>{props.title}</Text>
      </View>
      {props.arr.map((value, index) => (
        <View
          key={index}
          style={{
            ...styles.row,
            borderBottomWidth: index === 5 ? 1 : 0,
            borderBottomColor: index === 5 ? 'gray' : '#fff',
          }}>
          <Text>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  col: {flex: 1},
  row: {
    height: ScreenHeight / 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
