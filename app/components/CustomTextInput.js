import {TextInput,StyleSheet} from 'react-native'
import React,{Component} from 'react'

class CustomTextInput extends Component{
    render(){
        return(
            <TextInput onChangeText={this.props.onChangeText} style={[styles.textInput]} placeholderTextColor='#595959' placeholder={this.props.placeholder} />
        )
    }
}

export default CustomTextInput

const styles = StyleSheet.create({
    textInput :{
                height: 50, 
                borderColor: '#00C0C1', 
                borderWidth: 2,
                fontSize:18,
                paddingLeft:10,
                borderRadius:10,
                color:'white',
                fontFamily:'Roboto-Medium'
                
                
                }
})