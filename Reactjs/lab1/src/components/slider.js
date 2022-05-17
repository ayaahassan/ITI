import { Component } from "react";

export class Slider extends Component {

    constructor() {
        super();
        this.images = [
            './Images/1.jpg',
            './Images/2.jpg',
            './Images/3.jpg',
            './Images/4.jpg'
        ]
        this.state = {
            index: 0,
            interval: 0,
            imageSrc: this.images[0]
        }

    }

    next = () => {
        if (this.state.index < 4) {
            this.state.index++;
            this.setState({ imageSrc: this.images[this.state.index] });

        }
    }

    previous = () => {
        if (this.state.index > 0) {
            this.state.index--;
            this.setState({ imageSrc: this.images[this.state.index] })
        }
    }
    slide = () => {
        this.state.index = this.state.index === 4 ? this.state.index = 0 : this.state.index;
        this.state.interval = setInterval(this.next, 1000);
    }
    stop = () => {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div>

                <div>
                    <img src={this.state.imageSrc} alt="altimage" />
                </div>
                <input
                    type="button"
                    value="Next"
                    onClick={this.next}

                />
                <input
                    type="button"
                    value="Previous"
                    onClick={this.previous}

                />
                <input
                    type="button"
                    value="Slide"
                    onClick={this.slide}

                />
                <input
                    type="button"
                    value="Stop"
                    onClick={this.stop}

                />

            </div>
        )
    }
}