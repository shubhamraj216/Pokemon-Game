import React,{Component} from 'react';
import './Pokecard.css'
const url ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component{
    render(){
        var furl=`${url}${this.props.id}.png`;
        return(
            <div className="Pokecard">
                
                <h3 className="Pokecard_name">{this.props.name}</h3>
                <img className="Pokecard_img" src={furl} alt="Pokemon"/>
                <div className="Pokecard_Attr">Type: {this.props.type}</div>
                <div className="Pokecard_Attr">EXP: {this.props.exp}</div>
                
            </div>
        )
    }
}
export default Pokecard;