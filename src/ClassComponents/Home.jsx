import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0
        }
    }
    getAPIData = async () => {
        var response = ""

        if (this.props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&pageSize=20&language=${this.props.language}&apiKey=f4bfb9b9c3634123a3a5bdf9ea726f1f`)
        else

            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&pageSize=20&language=${this.props.language}&apiKey=f4bfb9b9c3634123a3a5bdf9ea726f1f`)
        var result = await response.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults,
            page: 1
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        var response = ""

        if (this.props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=f4bfb9b9c3634123a3a5bdf9ea726f1f`)
        else

            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=f4bfb9b9c3634123a3a5bdf9ea726f1f`)
        var result = await response.json()
        this.setState({ articles: this.state.articles.concat(result.articles) })


    }
    componentDidMount() {
        this.getAPIData()
    }

    componentDidUpdate(oldProps) {
        if (this.props !== oldProps) {
            this.getAPIData()
        }
    }


    render() {
        return (
            <>
                <div className="container-fluid mt-1">

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={
                            <div className='my-5 text-center'>
                                <div class="spinner-border " role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div></div>
                        }
                    >
                        <div className="row">
                            <h5 className='background text-light text-center p-2'>{this.props.q} News section</h5>
                            {
                                this.state.articles.map((item, index) => {
                                    return <NewsItem
                                        key={index}
                                        pic={item.urlToImage}
                                        title={item.title}
                                        description={item.description}
                                        source={item.source.name}
                                        date={item.publishedAt}
                                        url={item.url}
                                    />
                                })
                            }
                        </div>
                    </InfiniteScroll>

                </div>
            </>
        )
    }
}