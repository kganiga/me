import React, { Component } from "react";
import { Markup } from 'interweave';



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
            <div class="card-inner animated active fadeInUp" id="card-home">
                <div class="card-wrap"></div>
                <div class="bgimg">
                    <div class="topleft"></div>
                    <div class="middle">
                        <h1>COMING SOON</h1>
                        <hr />
                    </div>
                    <div class="bottomleft"></div>
                </div>
            </div>
        </>
        );
    }
}

export default Blog;