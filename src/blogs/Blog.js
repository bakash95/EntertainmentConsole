import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import { connect } from 'react-redux';

class Blog extends Component {
    render() {
        return (
            <div>
                {
                    this.props.loading ?
                        <div>
                            <img src={require('../public/loading.gif')} alt="Loading..." className="loadingIndicator"/>
                        </div> :
                        null
                }
                {
                    this.props.post.lisOfBulletins ?
                        this.props.post.lisOfBulletins.map((news) => {
                            return (
                                <Card>
                                    <CardBody>
                                        <CardTitle>{news.publisher}</CardTitle>
                                        <CardSubtitle>{news.url}</CardSubtitle>
                                        <CardText>{news.publisher}</CardText>
                                    </CardBody>
                                </Card>
                            )
                        }
                        )
                        :
                        null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts,
        loading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError
    }
}

export default connect(mapStateToProps)(Blog);