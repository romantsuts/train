import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import { Input, Card, Button } from './common';
import { Actions } from 'react-native-router-flux';
import { fetchData, programmCreate, saveData } from '../actions/TrainingActions';
import { connect } from 'react-redux';
import ListItems from './ListItems';


class CreateProgramm extends Component {
    componentWillMount() {
        //this.props.fetchData();

        this.props.navigation.setParams({
            'onRight': this.btnSaveData
        })
    }

    _renderDays = ({item}) => {
        return (
            <ListItems days={item}/>
        );
    }

    btnSaveData = () => {
        const {programmName, days} = this.props;
        return this.props.saveData(programmName, days)
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <Input
                style={{height: 40}}
                placeholder="Programm name"
                onChangeText={(text) => this.props.programmCreate(text)}
                />
                <FlatList 
                    data={this.props.days}
                    renderItem={this._renderDays.bind(this)}
                    keyExtractor={(item, index) => item.id.toString()}
                />
                <Button onPress={() => Actions.chooseDays()}>
                    Choose days
                </Button>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        marginTop: 10
    },
    textStyle: {
        fontSize: 26,
        fontWeight: '400'
    }
});

const mapStateToProps = (state) => {
    const {days, programmName} = state.training;
    return {
        days,
        programmName
    }
}

export default connect(mapStateToProps, {fetchData, programmCreate, saveData})(CreateProgramm);