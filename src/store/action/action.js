function switchOnActive(dispatch) {
    return {
        switchOnActive: (onActive) => dispatch({ type: "SWITCH_ON_ACTIVE", onActive: onActive }),
    }
}

export default switchOnActive