import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../config/constans";
import Button from "../components/Button";

const SignUp = () => {
    return(
       <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Create new account</Text>
            <TextInput style={styles.input} placeholder="Enter your name"/>
            <TextInput style={styles.input} placeholder="Enter your email"/>
            <TextInput style={styles.input} placeholder="Enter your password"/>
            
            <View style= {styles.buttonsContainer}>
                <Button title='Sign In' varient='secondary'/>
                <Button title='Sign Up' varient='primary'/>
            </View>
        </View>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.primary
    },
    contentContainer:{
        padding:32,
    },
    title:{
        fontSize:36,
        color: 'white',
        fontWeight: '800',
        marginBottom:16,
    },
    input:{
        backgroundColor:'white',
        fontSize:16,
        marginTop:16,
        paddingHorizontal:16,
        paddingVertical:12,
        borderRadius:6,
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:32,
    },
    
})

export default SignUp;