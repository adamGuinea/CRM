
const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    first_name: '', 
    last_name: '', 
    phone: '', 
    email: '', 
    company: '', 
    notes: '', 
    project: '',
    loadingPeople: false,
    toUpdate: false,
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: action.payload,
            }

        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected: action.payload
            }

        case 'NONE_SELECTED': 
            return {
                ...state,
                detailView: false,
                personSelected: null,
            };

        case 'FORM_UPDATE':
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };

        case 'NEW_CONTACT':
            return {
                ...state,
                first_name: '', 
                last_name: '', 
                phone: '', 
                email: '', 
                company: '', 
                notes: '', 
                project: '',
            }

        case 'ADD_PERSON': 
            return {
                ...state,
                ...action.newPerson
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                toUpdate: true,
                first_name: action.payload.first_name, 
                last_name: action.payload.last_name, 
                phone: action.payload.phone, 
                email: action.payload.email, 
                company: action.payload.company, 
                notes: action.payload.notes, 
                project: action.payload.project,
                uid: action.payload.uid,
            }
        
        case 'SAVE_CONTACT': 
            return {
                ...state,
                toUpdate: false,
                detailView: false,
                first_name: '', 
                last_name: '', 
                phone: '', 
                email: '', 
                company: '', 
                notes: '', 
                project: '',
                uid: '',
            }

        case 'DELETE_CONTACT': 
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }
            
        default: 
            return state;
    }
};