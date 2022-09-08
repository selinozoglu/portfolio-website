import {createStore} from 'redux';

const counterReducer = (state: any = {counter: 0}, action: any) => {
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

    return state;
}

const store: any = createStore(counterReducer);


export default store;