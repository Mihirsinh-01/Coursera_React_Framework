import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import { format } from 'date-fns';

class Dish extends Component{

    constructor(props) {
        super(props);
    }

    render() {


        console.log("Inside Dish Detail Componnet");

        const comments = this.props.dish.comments.map((cmt) => {
            return (
                <div key={cmt.id}>
                    <div className="col-12 col-md-12 mb-3">{cmt.comment}</div>
                    <div className="col-12 col-md-12 mb-3">-- {cmt.author} , {format(new Date(cmt.date), 'MMM dd, yyyy')}</div>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardTitle className="ml-3 mt-2">{this.props.dish.name}</CardTitle>
                            <CardText className="ml-3">{this.props.dish.description}</CardText>
                        </Card>
                    </div>
                    <div className="m-1 col-12 col-md-5">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                </div>
            </div>
        );
    }


}

export default Dish;