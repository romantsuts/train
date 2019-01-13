import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({placeholder, secure, label, value, onChangeText }) => {
    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                secureTextEntry={secure}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        padding: 10,
        
    },
    containerStyle: {
        height: 40,
        alignItems: 'center',
        borderWidth: .5,
    }
});

export { Input };