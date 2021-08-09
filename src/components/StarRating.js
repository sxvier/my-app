import React from "react";

class StarRating extends React.Component {
    render() {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += i <= this.props.rating ? "★" : "☆";
        }
        return <div>{stars}</div>;
    }
}

export default StarRating;