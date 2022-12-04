import React from 'react';
import "../style/colors.css";
import "../style/MenuItem.css";

const MenuItem = (props) => {

    const highest = <tr className="tbody">
                        <td className="highest">{props.nr}</td>
                        <td className="highest">{props.name}</td>
                        <td className="highest">{props.value}</td>
                    </tr>;


    const lowest = <tr className="tbody">
                        <td className="lowest">{props.nr}</td>
                        <td className="lowest">{props.name}</td>
                        <td className="lowest">{props.value}</td>
                    </tr>;

    const normal = <tr className="tbody">
                        <td>{props.nr}</td>
                        <td>{props.name}</td>
                        <td>{props.value}</td>
                    </tr>;

    const isHighest = props.value === props.maxValue ? true : false;
    const isLowest = props.value === props.minValue ? true : false;

    const element = isHighest ? highest : (isLowest ? lowest : normal);
        return(
            element
        );
};

export default MenuItem;