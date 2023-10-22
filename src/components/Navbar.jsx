/* eslint-disable react/prop-types */
import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.props.onSearch(event.target.value)
        this.setState (() => {
            return {
                search: event.target.value,
            }
        })
        
    }

    render() {
        return (
            <>
                <div className="flex flex-row w-full px-28 mx-auto h-20 items-center border-y-2">
                    <div className="w-[50%]">
                        <h1 className="text-4xl font-bold">Notes</h1>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <input className="border-2 border-gray-300 w-3/5 rounded-lg h-11 px-2" value={this.state.search} onChange={this.onSearchChangeEventHandler} type="text" placeholder="search"/>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;