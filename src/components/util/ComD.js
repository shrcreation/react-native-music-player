import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import {DataPass} from './ComA';

const ComD = () => {
  const firstName = useContext(DataPass);
  return (
    <View>
      <Text>Hello I am ComD From- {firstName}</Text>
    </View>
  );
};

export default ComD;

const styles = StyleSheet.create({});
