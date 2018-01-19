import React, {Component} from "react";
// import {Helmet} from "react-helmet";
// var load = require('load-script')
// var topojson = require('topojson');
// var d3 = require('d3');
// import 'topojson.v1.min.js'
// import './d3.v3.min.js'
import map_src from './map.png'

const style = `
.land {
  fill: #ddd;
}

.border {
  fill: none;
  stroke: #fff;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.bubble {
  fill: brown;
  fill-opacity: .5;
  stroke: #fff;
  stroke-width: .5px;
}

.bubble :hover {
  stroke: #000;
}

.legend circle {
  fill: none;
  stroke: #ccc;
}

.legend text {
  fill: #777;
  font: 10px sans-serif;
  text-anchor: middle;
}`

export default class Map extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* <iframe
                    width="100%"
                    height="100%"
                    frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAuBqugg3KWQ9OXFbdDDw8WzUuMdE9MGAk&q=Space+Needle,Seattle+WA" allowfullscreen>
                    </iframe> */}
                <img src={map_src} height="100%" width="100%"></img>
            </div>
        );
    }

}