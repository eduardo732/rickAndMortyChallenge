import axios from 'axios'

const initialState = {
    charECounter: []
}

const GET_CHARE_OK = 'GET_CHARE_OK';

export default function charEReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARE_OK:
            return { charECounter: action.payload}
        default:
            return state
    }
}

export const getCharAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:8080/api/getEpisodes')
        dispatch({ 
            type: GET_CHARE_OK,
            payload: res.data
        })

    }catch(e) {
        console.log(e);
    }
}