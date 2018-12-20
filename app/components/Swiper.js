import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'
import { Title } from 'native-base';

const Slider = props => (
  <View style={styles.container}>

    <ImageBackground style={styles.image} source={props.uri}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <LinearGradient colors={['rgba(0,0,0,0)', '#1A222E']} style={{ height: 80, width: null }}>
          <View style={{ justifyContent: 'center', flex: 1, marginLeft: 16 }}>
            <Text style={{ fontSize: 22, color: 'white', fontFamily: 'OpenSans-Bold' }}>{props.title}</Text>
          </View>

        </LinearGradient>


      </View>

    </ImageBackground>
  </View>
)


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSlider: [{
        title: 'Boruto Next Generation',
        uri: require('../assets/img/slider1.jpg'),
      },
      {
        title: 'Captain Tsubasa',
        uri: require('../assets/img/slider2.jpg')
      },
      {
        title: 'New Pokemon',
        uri: require('../assets/img/slider3.jpg')
      }
        // require('../assets/img/slider1.jpg'),
        // require('../assets/img/slider2.jpg'),
        // require('../assets/img/slider3.jpg')

      ]
    }
  }

  render() {
    return (
      <View>
        <Swiper
          autoplay
          height={240}
          paginationStyle={{
            bottom: -20
          }}
        >{
            this.state.imageSlider.map((item, i) => <Slider
              title={<Text>{item.title}</Text>}
              uri={item.uri}
              key={i}
            />)
          }

        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,




  }
})