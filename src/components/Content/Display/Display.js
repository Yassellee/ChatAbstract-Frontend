import React from "react"
import axios from "axios"

class Display extends React.Component {

    state = {
        textSent: "",
        textReceived: ""
    }

    ref1 = React.createRef()
    ref2 = React.createRef()

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row" style={{ height: "20px" }}></div>

                <div className="row justify-content-evenly align-items-center">
                    <div className="col-sm-5">
                        <textarea className="form-control col-6" defaultValue="Hello world!" ref={this.ref1}></textarea>

                    </div>
                    <div className="col-sm-1" style={{ textAlign: "center" }}>
                        <button type="button" className="btn" ref={this.ref2} onClick={this.handleSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                        </svg></button>
                    </div>
                    <div className="col-sm-5">
                        <textarea className="form-control col-6" value={this.state.textReceived}></textarea>
                    </div>
                </div>
            </div >
        )
    }

    handleSubmit = () => {
        this.setState({
            textSent: this.ref1.current.value
        }, () => {
            axios.post("http://acanxie.com/api/testHttpRequest", this.state.textSent, {
                headers: {
                    "Content-Type": "text/plain"
                }
            }).then(res => {
                console.log(res.data)
            }).then(() => {
                axios.get("http://acanxie.com/api/getRandomString").then(res_ => {
                    this.setState({
                        textReceived: res_.data
                    })
                }).catch(err_ => {
                    console.log("ERROR", err_)
                })
            }).catch(err => {
                console.log("ERROR", err)
            })
        })
    }

}

export default Display