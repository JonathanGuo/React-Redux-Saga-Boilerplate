import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { action } from '../config/Store';
import HelloWorld from '../components/HelloWorld';

class App extends PureComponent {
    componentDidMount() {
        action('FETCH_DATA');
    }
    render () {
        return (
            <Fragment>
                <HelloWorld />
                <div>{ this.props.data }</div>
            </Fragment>
        );
    }
}

App.propTypes = {
    data: PropTypes.string,
};

App.defaultProps = {
    data: '',
};

export default connect(store => ({
    data: store.Data.data,
}))(App);
