import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const ButtonControl = (props) => {

    const { mainWrapper, containerStyle, headerText, textStyle } = styles;

    return (
       
        <TouchableWithoutFeedback onPress={props.onPress}>
            <Icon name={props.iconName} size={props.size || 30} color="#4F8EF7"/>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        padding: 15,
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    headerText: {
        fontSize: 21,
        fontWeight: '400',
        textAlign: 'center'
    },
    textStyle: {
        fontSize: 21,
    }
});

export { ButtonControl };