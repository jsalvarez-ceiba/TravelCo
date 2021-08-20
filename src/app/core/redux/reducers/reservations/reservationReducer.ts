export interface NotesState {
    notes:string[];
}

const initialState = {
    notes: [],
};

type Action = {type: 'ADD_RESERVATION', payload: string}

const reservationReducer = (state:NotesState = initialState, action:Action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return {
                ...state, 
                notes: [...state.notes, action.payload]
            }
        default:
            return state;
    }
};
export default reservationReducer;
