import React from 'react'
import CountUp from 'react-countup'
import './ProgressBar.css';
const axios = require('axios')

export class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            co2_value: 0,
            co2_value_old: 0,

            co2_percentage: 0,
            co2_percentage_old: 0
        }
    }

    getValues() {
        axios.get('/random_co2')
            .then((response) => {
                // console.log(response.data)
                this.setValues(response.data.co2_value, response.data.co2_percentage)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    setValues(co2_val, co2_per) {
        this.setState({
            co2_value_old: this.state.co2_value,
            co2_value: co2_val,
            co2_percentage_old: this.state.co2_percentage,
            co2_percentage: co2_per
        })

        // check tresholds
        if (co2_val <= 1000) {
            this.changeColor('green')
        } else if (co2_val > 1000 && co2_val <= 2000) {
            this.changeColor('yellow')
        } else if (co2_val > 2000) {
            this.changeColor('red')
        }
    }

    changeColor(color) {

        let element = document.getElementById('progressBar')

        // clear all colors
        element.classList.remove('is-success')
        element.classList.remove('is-warning')
        element.classList.remove('is-danger')

        // fill with given color
        if (color === 'green') {
            element.classList.add('is-success')
        } else if (color === 'yellow') {
            element.classList.add('is-warning')
        } else if (color === 'red') {
            element.classList.add('is-danger')
        } else {
            // if nothing matches fill it green
            element.classList.add('is-success')
        }
    }

    componentDidMount() {
        this.getValues()
        this.interval = setInterval(this.getValues.bind(this), 10 * 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="progress-body">
                <progress id="progressBar" className="progress is-large progress-animation is-success" value={this.state.co2_percentage} max="100">{this.state.co2_value}%</progress>
                <div className="progress-text">
                    <p className="">
                        <CountUp
                            start={this.state.co2_value_old}
                            end={this.state.co2_value}
                            duration={1}
                            suffix=" PM"
                        />

                        <br />

                        <CountUp
                            start={this.state.co2_percentage_old}
                            end={this.state.co2_percentage}
                            duration={1}
                            prefix="% "
                        />

                    </p>
                </div>
            </div>
        )
    }
}