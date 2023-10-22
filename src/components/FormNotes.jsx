/* eslint-disable react/prop-types */
import React from "react";
class FormNotes extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title: '',
            body: '',
            archived: false,
            createdAt: '',
            limit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const limit = 50;
        this.setState(() => {
            return {
                title: event.target.value.slice(0, limit),
                limit: ((limit - event.target.value.length) === -1) ? 0 : limit - event.target.value.length,
            }
        })
        console.log(this.state.title)
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return (
            <>
                <div className="w-[40%] mx-auto mt-20">
                    <h2 className="text-2xl font-semibold">Buat Catatan</h2>
                    <p className="text-end">Sisa karakter: {this.state.limit}</p>
                    <form onSubmit={this.onSubmitEventHandler} className="flex flex-col mt-5 gap-4">
                        <input type="text" placeholder="Masukan judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} className="border border-gray-300 py-3 pl-3 rounded-lg"/>
                        <textarea type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Tuliskan catatanmu disini......" className="border border-gray-300 resize-none h-52 p-3 rounded-lg"/>
                        <button type="submit" className="border border-gray-300 py-3 rounded-lg">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default FormNotes;