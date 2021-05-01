import axios from 'axios'

const initialState = {
    charLCounter: []
}

const GET_CHARL_OK = 'GET_CHARL_OK';

export default function charLReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARL_OK:
            return { charLCounter: action.payload}
        default: 
            return state
    }
}

export const getCharAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:8080/api/getLocations')
        dispatch({ 
            type: GET_CHARL_OK,
            payload: res.data
        })

    }catch(e) {
        console.log(e);
    }
}