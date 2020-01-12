import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link';
import './styles.css';

const Item = (props) => {
    const { data } = props;
    const { title, linkUrl, imgUrl, description } = data;
    const placeholder = `${process.env.PUBLIC_URL}/images/placeholder.jpeg`;

    const onError = (e) => {
        e.target.onerror = null;
        e.target.src=placeholder;
    }

    return (
        <div className="card-wrapper">
            <Link to={linkUrl}>
                <div className="card-item-wrapper">
                    <img src={imgUrl} className="card-image" alt='Avatar' onError={onError}/>
                    <div className="card-content-rapper">
                        <div className="card-title">{title}</div>
                        {
                            description && <div className="card-description">{description}</div>
                        }
                    </div>
                
                </div>
            </Link>
        </div>
    )
}

export default Item;

Item.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        linkUrl: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        description: PropTypes.string       
    }).isRequired
}
