import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

const CustomButton = ()=>{
        return(
            <Button title="Add Product"
                    onPress={()=>alert('Addprouct')}/>
        )

}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})