import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Container, Form, Item, Input, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import CustomTextInput from '../components/CustomTextInput'
import CustomTextInputPass from '../components/CustomTextInputPass'
import { connect } from 'react-redux'
import axios from 'axios'
import deviceStorage from '../data/deviceStorage'

class LoginScreen extends Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        axios.post('http://192.168.1.116:3333/api/v1/login', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            // alert(JSON.stringify(response.data))
            deviceStorage.saveKey("id_token", response.data.token)
            this.props.navigation.navigate('Directory')
        }).catch((error) => {
            alert(JSON.stringify(error))
        })
        // return (
        //     (this.state.email == "Admin") && (this.state.password == "Admin")) ? this.props.navigation.navigate('Directory') : alert('Email Dan Password Salah')
    }

    render() {
        return (
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/img/logo.png')} style={{ width: 200, height: 200 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <CustomTextInput
                            onChangeText={(email) => this.setState({ email })}
                            placeholder='Email' />

                        <CustomTextInputPass
                            onChangeText={(password) => this.setState({ password })}
                            placeholder='Password'secureTextEntry={true}
                        />

                        <Button onPress={this.login} style={{ backgroundColor: '#00C0C1', width: '100%', height: 50, marginTop: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', color: 'white', fontSize: 18 }}>
                                Login
                                </Text>
                        </Button>

                    </View>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginBottom: 0, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                Don't have account ?
                        </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#00C0C1', marginLeft: 5, }}>
                                    Register
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </Container>
        )
    }
}

mapStateToProps = (state) => ({
    login: state.userReducers,
})

export default connect(mapStateToProps)(LoginScreen)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20

    }
})