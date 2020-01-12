import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Provider from '../../context/state';

const Layout  = (props) => {
    const { children } = props;
    return (
        <Provider>
            <div className="container">
                {children}
            </div>
        </Provider>
    )
}
export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired
}