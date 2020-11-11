
export const createBudget = (budget) => {
    
    return (dispatch, getState) => {
        
        fetch(
            'https://budget-analyzer.herokuapp.com/api/history/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                body: JSON.stringify({
                    "user_id": budget.userId,
                    "amount": budget.amount,
                    "description": "Added ₦" + budget.amount + " to " + budget.title,
                    "budget_type": budget.title,
                    "priority": budget.priority
                })
            }
        )
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