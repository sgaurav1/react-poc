import React, { Component } from "react";


class RatingStars extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const notFilled = <i className="bi bi-star"></i>;
        const filled = <i className="bi bi-star-fill"></i>;
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.round(this.props.ratingcount)) {
                stars.push(filled);
            } else {
                stars.push(notFilled);
            }
        }
        return (
            <>
                <div>
                    {stars.map((items, i)=>(
                        <span className="text-primary space-fr-right" key={i}>{items}</span>
                    ))}
                </div>
            </>
        )
    }
}


export default RatingStars;