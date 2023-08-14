const recipes = [
    {
        id: "greek-salad",
        name: "Greek Salad",
        ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
        id: "hawaiian-pizza",
        name: "Hawaiian Pizza",
        ingredients: [
            "pizza crust",
            "pizza sauce",
            "mozzarella",
            "ham",
            "pineapple",
        ],
    },
    {
        id: "hummus",
        name: "Hummus",
        ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
    },
];

export default function RecipeList() {
    let items = recipes.map((item) => {
        let itemIngredients = item.ingredients;
        let ingredient = itemIngredients.map((ingri) => <li>{ingri}</li>);
        return (
            <div>
                <h2 key={item.id}>{item.name}</h2>
                <ul>{ingredient}</ul>
            </div>
        );
    });
    return (
        <div>
            <h1>Recipes</h1>
            {items}
        </div>
    );
}





// I didn't understand this component
function Clock({ time }) {
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
        // True answer: className = 'night' WHYYY;
        document.getElementById('time').className = 'night';
    } else {
        // True answer: className = 'day' WHYYY;
        document.getElementById('time').className = 'day';
    }
    return (
        <h1 id="time">
            {time.toLocaleTimeString()}
        </h1>
    );
}















// function App() {
//     return (
//         <>
//             <Profile person={{
//                 imageId: 'lrWQx8l',
//                 name: 'Subrahmanyan Chandrasekhar',
//             }} />
//             <Profile person={{
//                 imageId: 'MK3eW3A',
//                 name: 'Creola Katherine Johnson',
//             }} />
//         </>
//     )
// }

// function Profile({ person }) {
//     return (
//         <Panel>
//             <Header person={person} />
//             <Avatar person={person} />
//         </Panel>
//     )
// }

// function Header({ person }) {
//     return <h1>{person.name}</h1>;
// }

// function Avatar({ person }) {
//     return (
//         <img
//             className="avatar"
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={50}
//             height={50}
//         />
//     );
// }





