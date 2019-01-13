import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonControl, CardSection, Card, Button } from './common';
import { connect } from 'react-redux';


class CreateExercise extends Component {

    state = {
        number: 0,
        repeatNumber: 0
    }

    increament(num, elem) {
        const el = elem === 'number' ? 'number' : 'repeatNumber'
        if (this.state[el] >= 100) {
            return this.state[el];
        }
        this.setState({[elem]: this.state[el] + num})
    }
    decreament(num, elem) {
        const el = elem === 'number' ? 'number' : 'repeatNumber'
        if(this.state[el] <= 0 ) {
            return this.state[el];
        }
        this.setState({[elem]: this.state[el] - num})

    }

    render() {
        const {headerText, textStyle} = styles;
        return (
            <Card>
                <Text style={headerText}>Weight</Text>
                <CardSection>
                    <ButtonControl headerTitle="Weight" iconName="ios-remove-circle-outline" onPress={this.decreament.bind(this, 2.5, 'number')} />
                        <Text style={styles.textStyle}>{this.state.number} kg</Text>
                    <ButtonControl iconName="ios-add-circle-outline" onPress={this.increament.bind(this, 2.5, 'number')}/>
                </CardSection>

                <Text style={headerText}>Repeats</Text>
                <CardSection>
                    <ButtonControl headerTitle="Repeats" iconName="ios-remove-circle-outline" onPress={this.decreament.bind(this, 1, 'repeatNumber')} />
                        <Text style={styles.textStyle}>{this.state.repeatNumber}</Text>
                    <ButtonControl iconName="ios-add-circle-outline" onPress={this.increament.bind(this, 1, 'repeatNumber')}/>
                </CardSection>

                <Button style={{marginTop: 10}}>
                    Save
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
    return {
        
    }
}

export default connect(mapStateToProps, {
    
})(CreateExercise);