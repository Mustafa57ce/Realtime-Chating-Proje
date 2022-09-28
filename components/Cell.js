import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { colors } from "../config/constans";

const Cell = ({title, icon, tintColor, onPress, style}) => {
    return(
        <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
                    <View style={[styles.iconContainer, {backgroundColor: tintColor}]}>
                        <Ionicons 
                            name={icon}
                            size={30}
                            color={'white'}
                        />
                    </View>
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="chevron-forward-outline" size={22}/>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor: 'white',
        flexDirection:'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.border,
        alignItems:'center',
    },
    iconContainer:{
        width:32,
        height:32,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',

    },
    title:{
        fontSize:16,
        marginStart:16,
        flex:1,
    },
})


export default Cell;