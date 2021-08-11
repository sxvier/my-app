import React from "react";

class StatusPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            sign: "Active"
        };
    }

    updateAway = () => {
        this.setState({
            sign: "Away"
        });
    };
    updateActive = () => {
        this.setState({
            sign: "Active"
        });
    };
    updateOffline = () => {
        this.setState({
            sign: "Offline"
        });
    };

    render() {
        return (
            <div>
                <h2>{this.state.sign}</h2>
                <button onClick={this.updateActive}>Active</button>
                <button onClick={this.updateAway}>Away</button>
                <button onClick={this.updateOffline}>Offline</button>
            </div>
        );
    }
}

export default StatusPicker;