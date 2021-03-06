import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from './actions';
import User from './components/user'
class App extends Component {
    render() {
        const {counter} = this.props;
        return (<div className="container">
            <h1 className="jumbotron-heading text-center">{counter}</h1>
            <p className="text-center">
                <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increment</button>
                <button onClick={this.props.onDecrement} className="btn btn-primary mr-2">Decrement</button>
            </p>
            <User />
        </div>);
    }
}
App.propTypes = {
    value: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
};
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch(actions.increment())
        },
        onDecrement: () => {
            dispatch(actions.decrement())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
