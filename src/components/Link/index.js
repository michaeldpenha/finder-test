import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const Link = (props) => {
    const { to, children } = props;

    return (
        /^https?:\/\//.test(to)
        ? <a target="_blank" href={to} className="anchor" rel="noopener noreferrer">{children}</a>
        : <RouterLink to={to} className="anchor">{children}</RouterLink>
    )
}

export default Link;

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node
}
