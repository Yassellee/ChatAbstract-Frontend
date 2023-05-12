const initState={
    onActive: 0
}

function reducer(state=initState, action) {
    switch(action.type) {
        case "SWITCH_ON_ACTIVE": {
            return {
                onActive: action.onActive
            }
        }
        default: {
            return state
        }
    }
}

export default reducer