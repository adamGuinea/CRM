/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';



const styles = StyleSheet.create({
      loader: {
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
      }
  });

const Loader = ({size}) => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={size || 'small'} />
        </View>
    )
};

export default Loader;
