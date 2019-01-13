import { combineReducers } from 'redux';
import TrainingReducer from './TrainingReducer';
import ExercisesReducer from './ExerciseReducer';

export default combineReducers({
    training: TrainingReducer,
    exercises: ExercisesReducer
});