import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(commentData) {
        if (commentData != null) {
            const comments = commentData.map((comment) => {
                const dateString = new Date(comment.date).toDateString()
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} {dateString}</p>
                    </li>
                )
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {comments}
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default DishDetail;
