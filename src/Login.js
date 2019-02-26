/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
      form: {
          paddingBottom: 10,
          width: 200,
      },
      fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
      },
      loginButtonArea: {
          marginTop: 20,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
  });

export default class Login extends Component {
  state = {
      email: '',
      password: ''
  };

  onButtonPress(){
      console.log('clicked button!')
  }

  render() {
      const {form, fieldStyles, loginButtonArea, errorMessage, welcome, container} = styles;
    return (
      <View style={container}>
        <Text style={welcome}>
            Welcome to Stellahart CRM!
        </Text>
        <MKTextField
            text={this.state.email}
            onTextChange={email => this.setState({email})}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField 
            text={this.state.password}
            onTextChange={password => this.setState({password})}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
        <View style={loginButtonArea}>
            <LoginButton onPress={this.onButtonPress.bind(this)} />
        </View>
      </View>
    );
  }
}
