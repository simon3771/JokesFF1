import React, { Component } from 'react';
import axios from 'axios';
import './css/Dogs.css';
import isMovie from './mediaSorter';

class Dogs extends Component {
    constructor() {
        super()
        this.state = {
            dogs: [],
            media: ''
        };
        this.gimmehDoggies = this.gimmehDoggies.bind(this)
    }

    componentDidMount() {
        axios.get('https://random.dog/woof.json'
        )
            .then(({ data }) => {
                return data.url;

            })
            .then((url) => {
                console.log(url);
                this.setState({ media: isMovie(url) ? <video controls src={url} autoPlay={0}></video> : <img src={url} ></img > })
            })

    }
    gimmehDoggies() {
        axios.get('https://random.dog/woof.json'
        )
            .then(({ data }) => {
                return data.url;

            })
            .then((url) => {
                console.log(url);
                this.setState({ media: isMovie(url) ? <video controls src={url} autoPlay={0}></video> : <img src={url} ></img > })
            })

    }



    render() {


        return (
            <div className="textStuff">

                <button className="dogbutton" onClick={this.gimmehDoggies}>
                    Gimmie More Doggies!
                </button>
                <div className="doggo">{this.state.media}
                </div>
            </div>
        )
    }
}

export default Dogs;
