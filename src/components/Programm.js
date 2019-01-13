import React, { Component } from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import {Card} from './common';
import ListItems from './ListItems';
import { connect } from 'react-redux';
import { fetchData} from '../actions/TrainingActions';
import { Actions } from 'react-native-router-flux';

class Programm extends Component {
    componentWillMount() {
        this.props.fetchData();
        //AsyncStorage.clear()
    }

    renderDays = ({item, index}) => {
        return (
            <ListItems days={item} name={item.name} onPressItem={(id, name) => Actions.daysList({title: name, days: item.days})}/> 
        );
    }
            
    render() {
        return (
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card>
                    <FlatList 
                        data={this.props.programms}
                        renderItem={this.renderDays.bind(this)}
                        keyExtractor={(item, index) => item.name}
                    />
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { days, programms } = state.training;
    return {
        days,
        programms
    }
}

export default connect(mapStateToProps, {fetchData})(Programm);
        
    