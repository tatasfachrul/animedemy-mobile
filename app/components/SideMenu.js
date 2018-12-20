import { Container, Button, ListItem, List, Icon } from 'native-base'
import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubsribe: false,
      isLogin: false,
    }
  }

  displayButton() {
    if (this.state.isLogin == false) {

      return (<Button style={{ backgroundColor: '#00C0C1', alignSelf: 'center', width: 100, height: 40, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={{ color: 'white' }} >
          Login
              </Text>
      </Button>
      )

    } else {
      if (this.state.isSubsribe == false) {

        return (
          <Button style={{ width: 100, backgroundColor: '#CE0606', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', height: 40 }} onPress={() => this.setState({ isSubsribe: true })}>
            <Text style={{ color: 'white' }} >
              Subscribe
          </Text>
          </Button>
        )

      } else if (this.state.isSubsribe == true) {
        return (
          <Button style={{ width: 100, backgroundColor: '#010101', borderColor: '#CE0606', alignSelf: 'center', borderWidth: 2, justifyContent: 'center', alignItems: 'center', height: 40 }} onPress={() => this.setState({ isSubsribe: false })}>
            <Text style={{ color: '#CE0606' }}>
              Unsubscribe
              </Text>
          </Button>
        )
      }
    }
  }

  displayLogout() {
    if (this.state.isLogin == true) {
      return (

        <Button style={{ width: '100%', backgroundColor: 'red', height: 40 }} onPress={() => this.setState({ isLogin: false })} >
          <Text style={{ color: 'white', marginLeft: 20 }}>
            Logout
            </Text>
        </Button>

      )
    } else {
      return (
        <View style={{ height: 40 }}>

        </View>
      )
    }
  }


  render() {

    return (

      <Container>
        <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, marginTop: 10 }}>
              <Image source={require('../assets/img/logo.png')} style={{ width: 140, height: 50 }} />
            </View>
            <View style={{ flex: 2, marginTop: 20 }}>
              {this.displayButton()}

            </View>



            {/* {this.state.isSubsribe?(<Button style={{padding:10,backgroundColor:'#CE0606',alignSelf:'center'}} onPress={()=>this.setState({isSubsribe:false})}>
              <Text style={{color:'white'}} >
                Subscribe
              </Text>
            </Button>):(
              <Button style={{padding:10,backgroundColor:'white',borderColor:'#CE0606',alignSelf:'center',borderWidth:2}} onPress={()=>this.setState({isSubsribe:true})}>
              <Text style={{color:'#CE0606'}}>
                Subscribe
              </Text>
            </Button>
            )} */}

          </View>
          <View style={{ flex: 2, marginLeft: 20, justifyContent: 'center' }} >
            <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 14 }}>
              Directory
            </Text>
          </View>

          <View style={{ flex: 9, flexDirection: 'column' }}>

            <Text style={{ fontSize: 24, color: '#00C0C1', fontFamily: 'Roboto-Medium', marginLeft: 10 }}>
              Category
            </Text>

            <View style={{ borderTopColor: '#00C0C1', borderTopWidth: 3, marginTop: 5 }}></View>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Category')}>
                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 14 }}>
                  Action
                  </Text>
              </ListItem>
              <ListItem>
                <Text style={{ color: 'white', fontFamily: 'Roboto-Medium', fontSize: 14 }}>
                  Romance
                  </Text>
              </ListItem>

            </List>



          </View>

          {this.displayLogout()}
        </LinearGradient>
      </Container>
    )
  }
}

export default SideMenu

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

  }
})