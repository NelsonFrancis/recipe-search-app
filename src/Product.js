import React from 'react';
import defaultImg from './assets/images/default_image.png';

function Product({results}) {
    let keyVal = 0
    return (
        <div>
            {results.map(result => {
                    return (
                    <div className="grid" key={result["recipe"]["calories"]}>
                        <img 
                            className="grid-img" 
                            src={result["recipe"]["image"] ? result["recipe"]["image"] : defaultImg} 
                            alt="img" 
                            onClick={() => window.open(result["recipe"]["url"])}
                        />
                        <p className="grid-title" onClick={() => window.open(result["recipe"]["url"])}>{result["recipe"]["label"]}</p>
                        <p className="diet-label">
                            {result["recipe"]["dietLabels"].length !== 0 ? 
                                (result["recipe"]["dietLabels"].map(dietLabel => {
                                    return(
                                        <span key={keyVal = keyVal + 1} className="diet-label-val">
                                            {dietLabel}
                                        </span>
                                        )
                                })) : (
                                        <span key={keyVal = keyVal + 1} className="diet-label-val">
                                            Nutritious
                                        </span>
                                        )
                            }
                        </p>
                        <p className="calories">Calories: <span>{result["recipe"]["calories"].toFixed(2)}</span></p>
                        <p className="calories">Cuisine: <span>{result["recipe"]["cuisineType"] ? result["recipe"]["cuisineType"] : 'Not available' }</span></p>
                    </div>
                    )
            })}
        </div>
    )
}

export default Product
