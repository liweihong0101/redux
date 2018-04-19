import {INCREMENT, DECREMENT, FETCH_USER_SUCCESS} from '../constants';
import axios from 'axios'
export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: INCREMENT});
        }, 2000);
        console.log('hello');
    };
};
export const decrement = () => {
    return {type: DECREMENT}
}

export const get_user = () => {
    return dispatch => {
        axios.get("https://randomuser.me/api/").then(res => {
            dispatch(fetch_user(res.data.results[0]))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const fetch_user = (user) => {
    return {type: FETCH_USER_SUCCESS, user}
};
