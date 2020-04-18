import React, { Component } from "react";
import './style.css'

class Blog extends Component {

    constructor() {
        super();
        this.state = {
            blogPost: {
                title: [],
                url: [],
                content: []
            }
        }
    }
    FetchDataFromRssFeed() {
        let Parser = require('rss-parser');
        let parser = new Parser();
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + 'https://eff8.blogspot.com/feeds/posts/default?alt=rss&max-results=100');
            feed.items.forEach(item => {
                console.log(item);
                this.setState.blogPost({
                    title: item.title,
                    url: item.url,
                    content: item.content
                });
            });
        })();

    }

    componentDidMount() {
        // eslint-disable-next-line no-lone-blocks
        //   { this.FetchDataFromRssFeed() }
    }
    render() {

        return (<>
            <div className="card-inner animated active fadeInUp" id="card-home">
                <div className="card-wrap">
                    <div className="bgimg">
                        <div className="topleft">
                            
                        </div>
                        <div className="middle">
                            <h1>COMING SOON</h1>

                            <div className="bottomleft">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default Blog;