export interface NotesState {
    reservations:string[];
}

const initialState = {
    reservations: []
};

type Action = {type: 'ADD_RESERVATION', payload: string}

export const reservationReducer = (state:NotesState = initialState, action:Action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return {...state, reservations: action.payload};
        default:
            return state;
    }
};
