import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native'
import ContactRow from '../components/ContactRow'
import Separator from '../components/Separtor'

const Chats = ({navigation}) => {
    useEffect(() => {
        const isLoggedIn = false;
        if (!isLoggedIn){
            navigation.navigate("SignUp")
        }
    }, [])

    return (
      <View>
        <ContactRow
            name="Mustafa YILDIRIM"
            subtitle="I am learning React Native"
            onPress={() => {
                navigation.navigate('Chat');
            }}
        />
        <Separator/>
        <ContactRow
            name="Bill Gates"
            subtitle="Lorem Ipsum ...."
            onPress={() => {
                alert('Hi, Bill Gates Touched')
            }}
        />

      </View>   
    )
}
const styles = StyleSheet.create({
    serprator:{
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#e2e2e2',
        marginStart: 88,
    }

})

export default Chats;