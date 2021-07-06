import React, { Component } from 'react'

export default class Task extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    inc=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    dec=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    reset=()=>{
        let c=0
        this.setState({
            count:c
        })
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.count}</h1>
                <button id="b1" onClick={this.inc}>+</button>
                <button id="b2" onClick={this.dec}>-</button>
                <button id="b3" onClick={this.reset}>reset</button>
            </div>
        )
    }
}
