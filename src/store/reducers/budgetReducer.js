
const initState = {};

const budgetReducer = (state=initState, action) => {

    switch(action.type){
        case 'CREATE_BUDGET_SUCCESS':
            alert('budget added successfully')
            return state
        case 'CREATE_BUDGET_ERROR':
            alert('oops! an error occurred');
            return state;
        case 'GET_BUDGET_SUCCESS':
            //alert('budget gotten successfully')
            return {
                ...state,
                histories: action.histories
            }
        case 'GET_BUDGET_ERROR':
            //alert('oops! an error occurred');
            return state;
        case 'GET_DASH_BUDGET_SUCCESS':
            //alert('budget gotten successfully')
            return {
                ...state,
                histories: action.histories
            }
        case 'GET_DASH_BUDGET_ERROR':
            //alert('oops! an error occurred');
            return state;
        default:
            return state
    }
}

export default budgetReducer;