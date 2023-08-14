import React from 'react';
import CardN from './CardNew.js';
import Collapse from './Collapse.js';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <Collapse>
                        <CardN cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate reiciendis placeat? Libero vel officiis iusto impedit eius qui magni!" cardImage="https://picsum.photos/id/237/100/100" />
                    </Collapse>
                    <Collapse>
                        <CardN cardTitle="Card Title 2" cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate reiciendis placeat?" />
                    </Collapse>
                    <Collapse>
                        <CardN cardTitle="Card Title 3" cardText="Lorem ipsum dolor sit, amet consectetur adipisicing elit." cardImage="https://picsum.photos/id/25/100/100" />
                    </Collapse>
                    <Collapse>
                        <CardN cardTitle="Card Title 4" cardImage="https://picsum.photos/id/116/100/100" />
                    </Collapse>
                </div>
            </div>
        );
    };
};

export default App;