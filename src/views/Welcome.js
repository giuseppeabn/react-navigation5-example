import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Welcome </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Drawer')}
        />
      </View>
    );
  }
}

export default Welcome;
