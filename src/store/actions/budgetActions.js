
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
                    "username": budget.username,
                    "amount": budget.amount,
                    "description": budget.authorName + " Added ₦" + budget.amount + " to " + budget.title,
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

export const getBudget = (userId) => {
    
    return (dispatch, getState) => {
        fetch(
            `https://budget-analyzer.herokuapp.com/api/histories/${userId}`,
        )
        .then(resp => resp.json())
        .then(( res ) => {
            //console.log(res.data)
            dispatch({
                type: 'GET_BUDGET_SUCCESS',
                histories: res.data
            })
        })
        .catch((err) => {
            //console.log(err)
            dispatch({
                type: 'GET_BUDGET_ERROR',
                err
            })
        })
    }
}


export const getDashBudgets = (userId) => {
    
    return (dispatch, getState) => {
        fetch(
            `https://budget-analyzer.herokuapp.com/api/dash/histories/${userId}`,
        )
        .then(resp => resp.json())
        .then(( res ) => {
            //console.log(res.data)
            dispatch({
                type: 'GET_DASH_BUDGET_SUCCESS',
                histories: res.data
            })
        })
        .catch((err) => {
            //console.log(err)
            dispatch({
                type: 'GET_DASH_BUDGET_ERROR',
                err
            })
        })
    }
}

export const getBudgetsDetails = (userId) => {
    
    return (dispatch, getState) => {
        fetch(
            `https://budget-analyzer.herokuapp.com/api/budgets/${userId}`,
        )
        .then(resp => resp.json())
        .then(( res ) => {
            //console.log(res.data)
            dispatch({
                type: 'GET_BUDGET_DETAILS_SUCCESS',
                budgets: res.data
            })
        })
        .catch((err) => {
            //console.log(err)
            dispatch({
                type: 'GET_BUDGET_DETAILS_ERROR',
                err
            })
        })
    }
}

