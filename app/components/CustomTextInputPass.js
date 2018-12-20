import {TextInput,StyleSheet} from 'react-native'
import React,{Component} from 'react'

class CustomTextInputPass extends Component{
    render(){
        return(
            <TextInput style={[styles.textInput]} onChangeText={this.props.onChangeText} placeholderTextColor='#595959' placeholder={this.props.placeholder} secureTextEntry={this.props.secureTextEntry}/>
        )
    }
}

export default CustomTextInputPass

const styles = StyleSheet.create({
    textInput :{
                height: 50, 
                borderColor: '#00C0C1', 
                borderWidth: 2,
                fontSize:18,
                paddingLeft:10,
                borderRadius:10,
                color:'white',
                marginTop:30,
                fontFamily:'Roboto-Medium'
                
                
                }
})