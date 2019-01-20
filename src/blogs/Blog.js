import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { connect } from 'react-redux';

class Blog extends Component {
    constructor() {
        super();
        this.pageSize = 10;
        this.pagesCount = Math.ceil(10);
        this.state = {
            currentPage: 0
        };
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    }

    render() {
        const { currentPage } = this.state;

        return (
            <div>
                {
                    this.props.loading ?
                        <div>
                            <img src={require('../public/loading.gif')} alt="Loading..." className="loadingIndicator" />
                        </div> :
                        null
                }
                <div className="pagination-wrapper">
                    {
                        this.props.post ?
                            this.props.post.lisOfBulletins
                                .slice(
                                    currentPage * this.pageSize,
                                    (currentPage + 1) * this.pageSize
                                )
                                .map((news, i) =>
                                    <div className="data-slice" key={i}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>{news.publisher}</CardTitle>
                                                <CardSubtitle>{news.url}</CardSubtitle>
                                                <CardText>{news.publisher}</CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            : null
                    }
                    <Pagination aria-label="Page navigation example">

                        <PaginationItem disabled={currentPage <= 0}>

                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage - 1)}
                                previous
                                href="#"
                            />

                        </PaginationItem>

                        {[...Array(this.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}

                        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>

                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage + 1)}
                                next
                                href="#"
                            />

                        </PaginationItem>

                    </Pagination>


                </div>
            </div>

        );

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