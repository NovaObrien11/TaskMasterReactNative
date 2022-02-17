import React from 'react';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {FlatList, StyleSheet, View} from "react-native"
import TestData from "../Data/TestData";
import Icon from "../components/Icon";
import colors from "../config/Colors";
import {ListItemSeparator} from "../components/ListItemSeparator";
import icon from "../components/Icon";

const menuItems = TestData.AccountMenuItems

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                    <ListItem title={"Nova OBrien"} subTitle={"nova.obrien@intimetec.com"} image={require("../../assets/NovaImage.jpg")}/>
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems} 
                          keyExtractor={menuItem => menuItem.title}
                          ItemSeparatorComponent={ListItemSeparator}
                          renderItem={({item}) => 
                <ListItem title={item.title} IconComponent={
                    <Icon name={item.icon.name}
                          backgroundColor={item.icon.backgroundColor}
                    />
                }/>}/>
            </View>
                <ListItem title={"Log Out"} IconComponent={<Icon name={'logout'} backgroundColor={colors.warning}/>}/>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.info
    }
})

export default AccountScreen;