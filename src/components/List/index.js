import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './styles.css';

const List = (props) => {
    const { items, title } = props;
    
    const renderListItem = items.map((el,index) => <Item key={`list-item-${index}`} data={el} />);

    return (
        <div className="list-wrapper">
            {title && <div className="list-title">{title}</div>}
            <div className="list-item-wrapper">
            {
                renderListItem.length > 0 ? renderListItem : <div>No Data Found</div>
            }
            </div>
        </div>
    )
}

export default List;

List.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string
}

List.defaultProps = {
    items: [],
    title: ''
}
