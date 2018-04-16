import React from 'react';
import PropTypes from 'prop-types';

class Index extends React.Component {
    render() {
        return (<div>{ this.props.foo }</div>);
    }
}

Index.propTypes = {
    foo: PropTypes.string
};

export default Index;