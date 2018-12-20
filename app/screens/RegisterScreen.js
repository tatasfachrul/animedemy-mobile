import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Form, Item, Input, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput'
import CustomTextInputPass from '../components/CustomTextInputPass'
import axios from 'axios';
import deviceStorage from '../data/deviceStorage';

class RegisterScreen extends Component {

    state = {
        username: '',
        name: '',
        email: '',
        password: '',
    }

    register = () => {
        axios.post('http://192.168.1.116:3333/api/v1/register',
            {
                username: this.state.email,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        ).then((response) => {
            deviceStorage.saveKey("id_token", response.data.token)
            this.props.navigation.navigate('Directory')
        }).catch((error) => {
            alert(JSON.stringify(error))
        })
    }

    render() {
        return (
            <Container>
                <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                    <ScrollView>
                        <View style={{ marginTop: 50, width: 100, borderWidth: 2, borderBottomColor: '#00C0C1' }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 24, color: '#00C0C1' }}>
                                Register
                            </Text>
                        </View>
                        <CustomTextInputPass onChangeText={(username) => this.setState({ username })}
                            placeholder='Username' />
                        <CustomTextInputPass onChangeText={(email) => this.setState({ email })}
                            placeholder='Email' />
                        <CustomTextInputPass onChangeText={(name) => this.setState({ name })}
                            placeholder='Name' />
                        <CustomTextInputPass onChangeText={(password) => this.setState({ password })}
                            placeholder='Password' secureTextEntry={true} />

                        <Button onPress={this.register} style={{ backgroundColor: '#00C0C1', width: '100%', height: 50, marginTop: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', color: 'white', fontSize: 18 }}>
                                Register
                            </Text>
                        </Button>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                You Have Account ?
                            </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#00C0C1', marginLeft: 5 }}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </LinearGradient>
            </Container>
        )
    }
}

export default RegisterScreen

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20

    }
})