import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="10"
          onPress={() => onChangeTime(10)}
        />
      </View>

      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="20"
          onPress={() => onChangeTime(20)}
        />
      </View>

      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="30"
          onPress={() => onChangeTime(30)}
        />
      </View>      
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
})