import React from "react";

class Name extends React.Component {
    render() {
        const firstInitial = this.props.firstName[0];
        return (
            <div>
                {firstInitial}. {this.props.lastName}
            </div>
        );
    }
}

export default Name;