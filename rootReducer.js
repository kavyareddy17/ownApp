import  signUpReducer from './src/signUp/reducer';

// console.log(signUpReducer);

var rootReducer = {
    'registrationData':signUpReducer
}


// const appReducer = combineReducers({
//     signUpReducer
// });

export default rootReducer;