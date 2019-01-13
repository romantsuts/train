import React, { Component } from 'react';
import {
    View,
    FlatList,
    Alert
} from 'react-native';
import {Button, Card} from './common';
import { connect } from 'react-redux';
import ListItems from './ListItems';
import Swipeout from 'react-native-swipeout';
import {
    addDay,
    createDays,
    addExercise,
    deleteItem
} from '../actions/TrainingActions';

class Training extends Component {
    state = {
        activeRow: null
    }

    onSwipeOpen(rowId, direction) {
        if (typeof direction !== 'undefined') {

            this.setState({
                activeRow: rowId
            });
        }
    }

    onSwipeClose(rowId, direction) {
        if (rowId === this.state.activeRow && typeof direction !== 'undefined') {
            this.setState({
                activeRow: null
            });
        }
    }
    
    onBtnPress = () => {
        this.setState({activeRow: null})
        return this.props.addDay();
    }
    onSaveBtn = () => {
        const {id, days} = this.props;
        return this.props.createDays({id, days});
    }
    renderDays = ({item, index}) => {
        const { days } = this.props;
        const lastID = days[days.length - 1].id;
        const swipeoutBtns = {
            backgroundColor: '#F23C50',
            onOpen: (sectionID, rowId, direction) => {
                    this.onSwipeOpen(rowId, direction)
            },
            onClose: (sectionID, rowId, direction) => {
                this.onSwipeClose(rowId, direction)
            },
            autoClose: true,
            close: !(this.state.activeRow === index ),
            disabled: this.props.disableSwipe,
            right: [{
                    text: 'Delete',
                    backgroundColor: '#F23C50',
                    onPress: () => {
                    Alert.alert('Delete Item', '', [
                        {text: "No", onPress: () => console.log()},
                        {
                            text: "Yes",
                            onPress: () => {
                                return this.props.deleteItem(index, lastID)
                            }
                        }
                    ],
                    {cancelable: true}
                    );
                    }
            }],
            rowID: index,
            sectionID: 1
        }
        return (
            <Swipeout {...swipeoutBtns}>
                <ListItems exercise={item} index={index}/> 
            </Swipeout>
        );
    }
    
    render() {
        console.log(this.props);
        return (
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card>
                    
                    <FlatList 
                        data={this.props.days}
                        renderItem={this.renderDays.bind(this)}
                        keyExtractor={(item, index) => item.name}
                        extraData={this.state}
                    />
                        <Button 
                        onPress={this.onBtnPress.bind(this)} 
                        styleBtn={{backgroundColor: 'none'}}
                        styleTxt={{color: '#F23C50'}}>
                            Add day
                        </Button>

                </Card>

                <Button onPress={this.onSaveBtn.bind(this)}>
                    Save
                </Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {id, days} = state.training;
    return {id, days};
}

export default connect(mapStateToProps, {
    addDay,
    createDays,
    addExercise,
    deleteItem
})(Training);