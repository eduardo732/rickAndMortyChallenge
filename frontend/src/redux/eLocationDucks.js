import axios from 'axios'

const initialState = {
    eLocations: []
}

const GET_OK = 'GET_OK';

export default function locationReducer(state = initialState, action){
    switch (action.type) {
        case GET_OK: 
            return {...state, eLocations: action.payload}
        default:
            return state
    }
}

export const getAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:8080/api/episodeLocation')
        dispatch({ 
            type: GET_OK,
            payload: res.data
        })

    }catch(e) {
        console.log(e);
    }
}