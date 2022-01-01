import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="row align-items-center justify-content-around mt-5">
                <button className="col-2 btn btn-danger" onClick={this.props.decrease}>-</button>
                <div className="col-4 text-center bg-light">{this.props.count}</div>
                <button className="col-2 btn btn-success" onClick={this.props.increase}>+</button>
            </div>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch({ type: "INCREASE" }),
        decrease: () => dispatch({ type: "DECREASE" })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
