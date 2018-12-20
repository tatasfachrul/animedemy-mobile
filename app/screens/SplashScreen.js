import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { Container, Content, Header } from 'native-base'
// import Spinner from 'react-native-spinkit'

class SplashScreen extends Component {
    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/img/bg.jpg')} style={styles.imageBackground}>
                    <View style={styles.viewContainer}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="small" color="#00ff00" style={{opacity:1,height: 80, marginTop: 10}}/>

                            {/* <Spinner color={'red'} size={50} {'Circle'} style={{}}/> */}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <View style={{ width: '100%', height: 60, backgroundColor: 'purple', flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#1C2431', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', color: '#00C0C1', fontSize: 18 }}>
                                        Login
                                    </Text>
                                </View>
                                <View style={{ backgroundColor: '#00C0C1', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', color: 'white', fontSize: 18 }}>
                                        Register
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </Container>
        )
    }
}

export default SplashScreen

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'

    },
    viewContainer: {
        backgroundColor: 'rgba(26, 34, 46, 0.5)',
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 250,
        height: 250
    }
})