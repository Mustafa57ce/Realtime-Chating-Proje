import React from "react";
import { View, StyleSheet} from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separtor";
import { colors } from "../config/constans";
import Cell from "../components/Cell";

const Settings = () => {
    return (
        <View>
            <ContactRow
                name = "Mustafa Yıldırım"
                subtitle = "my@gmil.com"
                style={styles.contactRow}
            />
            <Separator/>
            <Cell
                title="Logout"
                icon="log-out-outline"
                tintColor={colors.red}
                onPress={() => {
                    alert("dont touch me again")
                    }}/>
            <Cell
                title="Help"
                icon="information-outline"
                tintColor={colors.green}
                onPress={() => {
                    alert("dont touch me again")
                    }}
                    style={{marginTop:20}}/>
            <Cell
                title="Tell a Friend"
                icon="heart-outline"
                tintColor={colors.pink}
                onPress={() => {
                    alert("dont touch me again")
                    }}/>
        </View>
        
    )
}        

const styles = StyleSheet.create({
    contactRow:{
        backgroundColor: 'white',
        marginTop:16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: colors.border,
    },
})

export default Settings;