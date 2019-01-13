import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardSection } from './common';

class ListItems extends Component {
    _onPress = () => {
        const {id, name, index} = this.props;
        this.props.onPressItem(id, name, index);
    }

    _renderBtn = () => {
        if(this.props.selected || this.props.active) {
            return (
              <Icon name="ios-checkmark" size={25} />
            )
        }
    }
    
    render() {
        const { btnStyle, itemTextStyle } = styles;
        const { name } = this.props.days;
        
        return (
            <CardSection style={{padding: 0}}>
                <TouchableOpacity style={btnStyle} onPress={this._onPress}>
                    <Text style={itemTextStyle}>{name}</Text>
                    {this._renderBtn()}
                </TouchableOpacity>
            </CardSection>
        );
    }
}
            
const styles = StyleSheet.create({
    btnStyle: {
        flex:1, 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemTextStyle: {
        padding: 15,
    }
});

export default ListItems;
        