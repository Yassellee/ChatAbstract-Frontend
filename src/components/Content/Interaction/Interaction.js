import React from "react"
import ReactDOM from "react-dom"

class Interaction extends React.Component {
    state = {
        text: `Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.`,
        note: [
            {
                text: "Four score and seven years ago",
                comment: "Eighty seven years ago"
            },
            {
                text: "our fathers",
                comment: "people who lived before us"
            }
        ],
        selectedText: "",
        noteText: ""
    }

    ref1 = React.createRef()
    ref2 = React.createRef()
    ref3 = React.createRef()
    ref4 = React.createRef()
    ref5 = React.createRef()
    ref6 = React.createRef()
    ref7 = React.createRef()
    ref8 = React.createRef()
    ref9 = React.createRef()
    ref10 = React.createRef()

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="container-fluid">

                <div className="row justify-content-evenly">

                    <div className="col-sm-5">

                        <div className="row" style={{ height: "20px" }}></div>

                        <div className="row">
                            <textarea rows={5} className="form-control" onSelect={() => {
                                const selectedText = window.getSelection().toString()
                                this.setState({
                                    selectedText: selectedText
                                })
                            }} ref={this.ref1} value={this.state.text}></textarea>
                        </div>

                        <div className="row" style={{ height: "20px" }}></div>

                        <div className="row justify-content-around" ref={this.ref2}>
                            <button type="button" className="btn btn-success col-3" ref={this.ref3} onClick={this.handleDeleteText}>Delete</button>
                            <button type="button" className="btn btn-success col-3" ref={this.ref4} onClick={this.handleAddNote}>Add Note</button>
                            <button type="button" className="btn btn-success col-3" ref={this.ref10} onClick={this.handleEditText}>Edit Text</button>
                        </div>

                        <div className="row" style={{ height: "20px" }}></div>

                        <div className="row">
                            <textarea rows={5} className="form-control" ref={this.ref5} value={this.state.noteText}></textarea>
                        </div>

                        <div className="row" style={{ height: "20px" }}></div>

                        <div className="row">
                            <textarea className="form-control" ref={this.ref6}></textarea>
                        </div>

                        <div className="row" style={{ height: "20px" }}></div>

                        <div className="row justify-content-around">
                            <button type="button" className="btn btn-success col-12" ref={this.ref7} onClick={this.handleSubmitNote}>Submit</button>
                        </div>

                    </div>

                    <div className="col-sm-5">
                        <div className="row" style={{ height: "20px" }}></div>
                        <div className="row">
                            <textarea rows={5} className="form-control" ref={this.ref8}></textarea>
                        </div>

                        <div className="row" style={{ height: "20px" }}></div>

                        <div className="row justify-content-around">
                            <button type="button" className="btn btn-success col-12" ref={this.ref9} onClick={this.handleSubmitText}>Submit</button>
                        </div>

                        <div className="row">
                            {
                                this.state.note.map((item, index) => {
                                    return (
                                        <div className="card col-sm-5" style={{ margin: "20px" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Note {index + 1}</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary text-truncate">{item.text}</h6>
                                                <p className="card-text text-truncate">{item.comment}</p>
                                                <button className="btn btn-outline-success" type="submit" onClick={() => { this.handleDeleteNote(index) }}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>


            </div>
        );
    }
    handleDeleteText = () => {
        const start = this.ref1.current.selectionStart;
        const end = this.ref1.current.selectionEnd;
        const value = this.ref1.current.value;
        this.setState({
            text: value.slice(0, start) + value.slice(end)
        })
    }
    handleAddNote = () => {
        this.setState({
            noteText: this.state.selectedText
        })
    }
    handleSubmitNote = () => {
        this.setState({
            note: [...this.state.note, { text: this.ref5.current.value, comment: this.ref6.current.value }],
            noteText: ""
        }, () => {
            this.ref6.current.value = ""
        })
    }
    handleDeleteNote = (index) => {
        var _note = [...this.state.note]
        _note.splice(index, 1)
        this.setState({
            note: _note
        })
    }
    handleEditText = () => {
        this.ref8.current.value = this.state.text
    }
    handleSubmitText = () => {
        this.setState({
            text: this.ref8.current.value
        })
    }
}

export default Interaction