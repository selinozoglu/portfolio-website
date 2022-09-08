import {createStore} from 'redux';

const counterReducer = (state: any = {counter: 0,theme:true}, action: any) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'lightTheme'){
        return{
            theme: true
        }
    }
    if(action.type === 'darkTheme'){
        return{
            theme: false
        }
    }

    return state;
}

const store: any = createStore(counterReducer);


export default store;