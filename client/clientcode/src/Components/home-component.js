import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home-component.css';

export default class Home extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="First slide"
                    src = "https://wallpaperaccess.com/full/856166.jpg"
                    />
                    <Carousel.Caption>
                    <h3>ABS</h3>
                    <p>Success usually comes to those who are too busy to be looking for it</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                   <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="Second slide"
                    src = "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="Third slide"
                    src="https://w0.peakpx.com/wallpaper/987/683/HD-wallpaper-sports-bodybuilding-bodybuilder-gym-man-muscle.jpg"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
        )
    }
}