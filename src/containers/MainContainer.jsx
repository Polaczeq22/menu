import React from 'react';
import uniqid from 'uniqid';
import MenuItem from '../components/MenuItem';
import MenuForm from '../components/MenuForm';
import "../style/MainContainer.css";
import "../style/colors.css";
import checkRegexp from '../utils';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            menu: [{
                id: uniqid(),
                nr_menu: 1,
                nazwa: "Kawa mała",
                cena: 2.30
            },{
                id: uniqid(),
                nr_menu: 2,
                nazwa: "Kawa średnia",
                cena: 5.00
            },{
                id: uniqid(),
                nr_menu: 3,
                nazwa: "Kawa duża",
                cena: 7.50
            }],
            cur_item: {
                id: uniqid(),
                nr_menu: -1,
                nazwa: "",
                cena: -1
            },
            maxVal: 7.50,
            minVal: 2.3
        };
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
        //this.removeItem = this.removeItem.bind(this);
        this.resetItem = this.resetItem.bind(this);
        this.checkHighLow = this.checkHighLow.bind(this);
    }

    resetItem(){
        this.setState((prevState) => (({
            menu: [...prevState.menu],
            cur_item: {
                id: uniqid(),
                nr_menu: -1,
                nazwa: "",
                cena: -1
            },
            maxVal: prevState.maxVal,
            minVal: prevState.minVal
        })));
    }

    editItem(value){
        if(this.state.cur_item.nr_menu === -1){
            this.setState((prevState) => ({
                menu: [...prevState.menu],
                cur_item: Object.assign(prevState.cur_item, {nr_menu: prevState.menu.length+1}),
                maxVal: prevState.maxVal,
                minVal: prevState.minVal
            }));
        }
        this.setState((prevState) => ({
            menu: prevState.menu,
            cur_item: Object.assign(prevState.cur_item, value),
            maxVal: prevState.maxVal,
            minVal: prevState.minVal
        }));
    }

    addItem(e){
        e.preventDefault();
        if(!checkRegexp(this.state.cur_item.cena)){
            alert("Błędnie wprowadzona cena!");
            return false;
        } else {
            this.setState((prevState) => ({
                menu: prevState.menu,
                cur_item: Object.assign(prevState.cur_item, {cena: parseFloat(prevState.cur_item.cena)}),
                maxVal: prevState.maxVal,
                minVal: prevState.minVal
            }));
        }
        this.setState((prevState) => ({
            menu: [...prevState.menu, prevState.cur_item],
            cur_item: {
                id: uniqid(),
                nr_menu: -1,
                nazwa: "",
                cena: -1
            },
            maxVal: prevState.maxVal,
            minVal: prevState.minVal
        })); 
    }

    checkHighLow(){
        let maxVal = this.state.maxVal;
        let minVal = this.state.minVal;
        console.log(maxVal);
        console.log(minVal);
        this.state.menu.map((item) => {
            if(item.cena > maxVal){
                maxVal = item.cena
            } else if (item.cena < minVal){
                minVal = item.cena
            }
        });
        if(maxVal !== this.state.maxVal || minVal !== this.state.minVal){
            this.setState((prevState) => ({
                menu: prevState.menu,
                cur_item: prevState.cur_item,
                maxVal: maxVal,
                minVal: minVal
            }));
        }
        console.log(maxVal);
        console.log(minVal);
    }

    render(){
        this.checkHighLow();
        const items = this.state.menu;
        return(
            <div className="main">
                <h2>Michał Mikuła [20] [3F]</h2>
                <table>
                    <thead>
                    <tr className="thead">
                        <th>
                            nr pozycji w Menu
                        </th>
                        <th>
                            nazwa produktu
                        </th>
                        <th>
                            cena
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <MenuItem
                            key = {item.id}
                            nr = {item.nr_menu}
                            name = {item.nazwa}
                            value = {item.cena}
                            maxValue = {this.state.maxVal}
                            minValue = {this.state.minVal}
                        />
                    ))}
                    </tbody>
                </table>
                <MenuForm 
                    onInputChange = {(val) => this.editItem(val)}
                    onAddItem = {(e) => this.addItem(e)}
                    onResetItem = {() => this.resetItem}
                    curItem = {this.state.cur_item}
                />
            </div>
        );
    }
};

export default Main;