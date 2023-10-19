import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    onChangeEventHandler(event) {
        this.setState (() => {
            return {
                search: event.target.value,
            }
        })
    }

    render() {
        return (
            <>
                <div className="flex flex-row justify-between px-40 mx-auto h-16 items-center border-y-2">
                    <h1 className="text-2xl font-bold">Notes</h1>
                    <div>
                        <form action="">
                            <input className="border-2 border-gray-500 rounded-md h-9 w-56 px-2" type="text" placeholder="search"/>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;