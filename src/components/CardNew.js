import React from 'react';

class CardN extends React.Component {
    render () {
        return (
            <div className="col">
                <div className="card h-100">
                    <img src={ this.props.cardImage } className="card-img-top" alt={ this.props.cardTitle } />
                        <div className="card-body">
                            <h5 className="card-title">{ this.props.cardTitle }</h5>
                            <p className="card-text">{ this.props.cardText }</p>
                        </div>
                </div>
            </div>
        );
    };
};

CardN.defaultProps = {
    cardTitle: 'Default Card Title',
    cardText: 'Default Card Text',
    cardImage: 'https://tulippo.az/public/images/icon/logo.png'
}

export default CardN;