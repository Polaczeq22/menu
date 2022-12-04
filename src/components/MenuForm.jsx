import React from 'react';
import "../style/MenuForm.css";
import "../style/colors.css";
import { ReactPropTypes } from 'react';

class MenuForm extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <form className="menuForm" name="menuForm">
                <p>Dodaj pozycję menu: </p>
                <label id="label_Nazwa" htmlFor="menuForm_nazwa">
                    Nazwa: <input 
                                type="text" 
                                id="menuForm_nazwa" 
                                name="nazwa" 
                                onInput={(e) => this.props.onInputChange({[e.target.name]: e.target.value})}
                                required 
                            />
                </label>
                <label id="label_Cena" htmlFor="menuForm_cena">
                    Cena: <input 
                                type="text" 
                                id="menuForm_cena" 
                                name="cena"
                                onInput={(e) => this.props.onInputChange({[e.target.name]: e.target.value})}
                                required 
                            />
                </label>
                <input 
                    type="submit" 
                    id="menuForm_send" 
                    name="send" 
                    value="Dodaj produkt"
                    onClick={(e) => this.props.onAddItem(e)} 
                    disabled={!(this.props.curItem.cena && this.props.curItem.nazwa)}
                />
                <input 
                    type="reset" 
                    id="menuForm_reset" 
                    name="reset" 
                    value="Reset"
                    onClick={() => this.props.onResetItem()} 
                />
            </form>
        );
    }

}

export default MenuForm;