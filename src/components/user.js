import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../actions'

class User extends React.Component {
    render() {
        const {user, onGetUser} = this.props;
        return (<div>
            <h1 className="jumbatron-heading text-center">{user.email}</h1>
            <p className="text-center">
                <button onClick={onGetUser} className="btn btn-primary mr-2">GET RANDOM USER</button>
            </p>
        </div>);
    }
}

User.propTypes = {
    onGetUser: PropTypes.func,
    user: PropTypes.string
};

const mapStateToProps = (state) => {
    const {user} = state;
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetUser: () => {
            dispatch(actions.get_user())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
