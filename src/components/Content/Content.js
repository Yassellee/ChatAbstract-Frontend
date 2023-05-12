import React from "react"
import ReactDOM from "react-dom"
import { connect } from "react-redux"

import Display from "./Display/Display"
import Interaction from "./Interaction/Interaction"

class Content extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        switch (this.props.onActive) {
            case 0: {
                return (
                    <div className="container-fluid">
                        <div className="row" style={{ height: "20px" }}></div>
                        <div className="row">
                            <Display />
                        </div>
                    </div>
                )
            }
            case 1: {
                return (
                    <div className="container-fluid">
                        <div className="row" style={{ height: "20px" }}></div>
                        <div className="row">
                            <Interaction />
                        </div>
                    </div>
                )
            }
            default: {
                return "NULL"
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        onActive: state.onActive
    }
}

export default connect(mapStateToProps)(Content)