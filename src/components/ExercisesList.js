import React, { Component } from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItems from './ListItems';


class ExercisesList extends Component {

    _renderItem = ({item, index, section}) => {
        return <ListItems days={item}/>
    }

    
    render() {

        const { sectionHeader } = styles;
        
        return (
            <SectionList 
                sections={this.props.exercises}
                renderSectionHeader={ ({section}) => <Text style={sectionHeader}> { section.title } </Text> }
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.name}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises.muscles
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        padding: 10,
        fontSize: 21,
        backgroundColor: 'lightblue',
        color: "#093b8e"
    }
});

export default connect(mapStateToProps)(ExercisesList);