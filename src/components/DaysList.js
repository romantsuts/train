import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItems from './ListItems';
import { Actions } from 'react-native-router-flux';


class DaysList extends Component {
    static onEnter = () => {
        Actions.refresh({
            title: this.props.title
        })
    }

    _renderDays = ({ item }) => {
        return (
            <ListItems days={item} />
        )
    }
    
    render() {
        console.log(this.props.days);
        return (
            <View>
                <FlatList 
                    data={this.props.days}
                    renderItem={this._renderDays}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        )    
    }
}

const mapStateToProps = state => {
    const {programms} = state.training
    return {
        programms
    }
}


export default connect(mapStateToProps)(DaysList);