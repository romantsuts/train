import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateExercise from './components/CreateExercise';
import ExercisesList from './components/ExercisesList';
import Programm from './components/Programm';
import DaysList from './components/DaysList';
import CreateProgramm from './components/CreateProgramm';
import ChooseDays from './components/ChooseDays';

const RouterComponent = () => {
    tabIcon = (props) => {
        console.log(props);
        return (
            <Icon name="ios-add-circle-outline" size={20} />
        );
    }
    return (
        <Router>
            <Scene 
                key="main_1" 
                navigationBarStyle={{backgroundColor: '#2675AF'}}
                titleStyle={{color: '#E9F1DF'}}
                headerLayoutPreset="center"
                backButtonTintColor = "#E9F1DF"
                rightButtonTextStyle = {{color: "#E9F1DF"}}
            >
                <Scene key="tabs" tabs={true} tabBarPosition="bottom" hideNavBar>
                    <Scene key="tab1" initial title="Programms" icon={() => <Icon name="ios-fitness" size={20} />}>
                        <Scene key="programm" initial={true} component={Programm} title="Programms" rightTitle="Edit" onRight={() => Actions.training()} />   
                        <Scene key="daysList" back backTitleEnabled={false} component={DaysList}
                        title="" />
                    </Scene>
                    <Stack key='tab2' icon={this.tabIcon} title="Add programm">
                        
                        <Scene key="createProgramm" component={CreateProgramm} back title="Create Programm" rightTitle="Save" onRight={() => {}} /> 
                        <Scene key="createExercise" component={CreateExercise} title="Create Exercise"/>
                        <Scene key="chooseDays" component={ChooseDays} back title="Choose days" /> 
                    </Stack>
                    
                    
                    <Scene key="tab3" title="Exercises" icon={() => <Icon name="ios-body" size={20} />}>
                        <Scene key="exercisesList" component={ExercisesList} title="Exercises" />    
                    </Scene>
                </Scene>

                

            </Scene>
        </Router>
    );
}
        
export default RouterComponent;            