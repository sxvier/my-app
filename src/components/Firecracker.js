import React from "react";

class Firecracker extends React.Component {
    constructor() {
        super();
        this.state = {
            fire: false //"🧨"
        };
    }
    clickHandler = () => {
        this.setState({
            fire: !this.state.fire //"💥"
        });
    };
    render() {
        return (
            <div className="Firecracker">
                <button onClick={this.clickHandler}>{this.state.fire ? "🧨" : "💥"}</button>
            </div>
        );
    }
}

export default Firecracker;