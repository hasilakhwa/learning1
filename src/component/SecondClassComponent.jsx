import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

class SecondClassComponent extends Component {
    constructor(){
        super()
        this.state = {
        myName : "Hasnain"
        }
    }
    updateName = () =>{
        this.setState({myName: 'Ali'})
    }
  render() {
    return (
      <View>
        <Text>Name: {this.state.myName} Age: {this.props.data}</Text>
        <Button title='updateName' onPress={this.updateName} />
      </View>
    )
  }
}

export default SecondClassComponent