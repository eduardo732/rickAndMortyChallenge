import axios from 'axios'

const initialState = {
    charCCounter: []
}

const GET_CHARC_OK = 'GET_CHARC_OK';

export default function charCReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARC_OK:
            return { charCCounter: action.payload}
        default: 
            return state
    }
}

export const getCharAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:8080/api/getCharacters')
        dispatch({ 
            type: GET_CHARC_OK,
            payload: res.data
        })

    }catch(e) {
        console.log(e);
    }
}