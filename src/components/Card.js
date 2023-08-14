import React from 'react';
// import ReactDOM from 'react-dom';

const Card = (props) => {
    return (
        <div>
            Card Component for testing {props.cardTitle}
        </div>
    );
};


const Users = (user) => {
    return (
        <div>
            {user.name} {user.surname} is {user.age} years old.
        </div>
    );
};


const Arrays = () => {

        let users = [
        {
            name: 'Galib',
            surname: 'Mammadli',
            age: 21,
            worker: true,
        },
        {
            name: 'Ibrahim',
            surname: 'Mammadli',
            age: 20,
            worker: false,
        },
        {
            name: 'Natig',
            surname: 'Mammadli',
            age: 20,
            worker: false,
        },
        {
            name: 'Aysu',
            surname: 'Mammadli',
            age: 20,
            worker: false,
        },
        {
            name: 'Sahiba',
            surname: 'Mammadli',
            age: 20,
            worker: false,
        },
        
    ];

    let listUsersFromCard = users.map(user => 
        <h1>{user.name}</h1>
    )

    return (
        <div>
            {/* {user.name} {user.surname} is {user.age} years old. */}
            {listUsersFromCard}
        </div>
    );
};

export {Card, Users, Arrays};