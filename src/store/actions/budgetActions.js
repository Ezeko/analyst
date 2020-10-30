
export const createBudget = (budget) => {
    
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('budgets').add({
            ...budget,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({
                type: 'CREATE_BUDGET_SUCCESS'
            })
        })
        .catch((err) => {
            dispatch({
                type: 'CREATE_BUDGET_ERROR',
                err
            })
        })
    }
} 