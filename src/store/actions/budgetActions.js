
export const createBudget = (budget) => {
    
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const date = new Date()
        firestore.collection('budgets').add({
            userId: budget.userId,
            title: budget.title,
            amount: budget.amount,
            priority: budget.priority,
            createdAt: date
        })
        .then(()=>{
            return (
                firestore.collection('history').add({
                    userId: budget.userId,
                    name: budget.authorName,
                    description: 'Added ₦' + budget.amount + ' to ' + budget.title,
                    createdAt: date
                })
            )
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