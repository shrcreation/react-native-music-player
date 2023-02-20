import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ComA from './src/components/util/ComA';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ComA/>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
