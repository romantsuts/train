import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, Button } from './common';
import { createDays } from '../actions/TrainingActions';
import { connect } from 'react-redux';
import ListItems from './ListItems';

class ChooseDays extends Component {
    state = {
        selected: false,
        days: [
            {id:1, name:'Monday'},
            {id:2, name:'Tuesday'},
            {id:3, name:'Wednesday'},
            {id:4, name:'Thursday'},
            {id:5, name:'Friday'},
            {id:6, name:'Saturday'},
            {id:7, name:'Sunday'},
        ],
        selectedDays: []
    }

    componentWillMount() {
        const {days} = this.props;
        days.map((elem, index) => {
            this.setState((prevState) => ({
                        selected: {
                            ...prevState.selected,
                            [elem.id]: !prevState.selected[elem.id]
                        }, 
                        selectedDays: days
                    })
            );
        });
    }
                

    _onPressItem = (id, name) => {
            this.setState((prevState) => ({
                selected: {
                    ...prevState.selected,
                    [id]: !prevState.selected[id]
                }
            }), () => {
                if(this.state.selected[id]) {
                    this.setState({
                        selectedDays: [...this.state.selectedDays, {
                            id,
                            name,
                            active: this.state.selected[id]
                        }]
                    })
                } else {
                    this.state.selectedDays.findIndex((elem, index) => {
                        if(elem.id === id) {
                            this.setState({
                                selectedDays: [...this.state.selectedDays.slice(0, index), ...this.state.selectedDays.slice(index + 1)]
                            });
                        }
                    })
                }
            }
        );
    }
                    
    _renderDays = ({item, index}) => {
        return (
            <ListItems days={item} active={!!this.state.selected[item.id]} selected={!!this.state.selected[item.id]} id={item.id} index={index} name={item.name} onPressItem={this._onPressItem.bind(this)}/>
        );
    }

    _saveDays = () => {
        
            return this.props.createDays(this.state.selectedDays);
        
    }
    
    render() {
        return (
            <Card>
                <FlatList 
                    data={this.state.days}
                    renderItem={this._renderDays.bind(this)}
                    keyExtractor={(item, index) => item.id.toString()}
                    extraData={this.state.selected}
                />
                <Button onPress={this._saveDays.bind(this)}>Save</Button>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {days} = state.training;
    return {
        days
    }
}

export default connect(mapStateToProps, {createDays})(ChooseDays);           