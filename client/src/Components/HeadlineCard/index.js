
import React, { useEffect, useState } from "react";
import "./style.css";
// import Carousel from "../Carousel/index";




function HeadlineCard() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [drinks, setDrinks] = useState([]);


    useEffect(() => {
        fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setDrinks(result.drinks);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            
        )

    }, [])

    


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

    
    return (
        
        <div className="container">
                    <div className="card black" style={{ color: "white" }}>
                        <div className="card-image">
                    <ul>
                        {drinks.map(drink => (
                            <li key={drink.strDrinkThumb}>
                                <img src={drink.strDrinkThumb} />
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="card-content">
                        {drinks.map(drink => (
                            <span className="card-title" id="cocktailoftheday" style={{ fontSize: "15px", textAlign: "center" }}>
                                {drink.strDrink}
                            </span>
                        ))}
                        <ul>
                        {drinks.map(drink => (
                            <li key={drink.strIngredient2} style={{ color: "white", fontSize: "14px", textAlign: "center"}}>
                                {drink.strIngredient2}
                            </li>
                        ))}
                        {drinks.map(drink => (
                            <li key={drink.strIngredient1} style={{ color: "white", fontSize: "14px", textAlign: "center"}}>
                                {drink.strIngredient1}
                            </li>
                        ))}
                            {drinks.map(drink => (
                                <li key={drink.strInstructions} style={{ color: "white", fontSize: "14px", textAlign: "center"  }}>
                                    {drink.strInstructions}
                                </li>
                        ))}
                        </ul>

                    </div>

                    </div>
                    </div>
           
    );
}
}


export default HeadlineCard;