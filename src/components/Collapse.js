import React from "react";

class Collapse extends React.Component {

    state = { showContent: false };


    showMore = () => { // Arrow function
        this.setState({
            showContent: !this.state.showContent,
        });
    };

    componentDidMount() { // Yeni bir element əlavə olunanda bu funksiya işə düşür, 
        console.log('Component Mounted!');
    }

    componentDidUpdate() { // Hər dəfə client tərəfdə update edəndə işə düşür
        console.log('Component Updated!');
    }

    render () { // Olmazsa, olmazdır. mütləq əlavə edilməlidir
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* { this.props.children.props.cardTitle } */}
                    { React.Children.map(this.props.children, children => children.props.cardTitle) }
                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show" id={ this.props.href }>
                            {/* { this.props.children } */}
                            { React.Children.map(this.props.children, children => children) }
                        </div>
                    ) : null
                }
            </div>
        );
    };
};





export default Collapse;