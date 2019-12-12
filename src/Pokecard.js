import React,{Component} from 'react';
import './Pokecard.css'
const url ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function convertor(num){
    if(num<=999){
        return (`00${num}`.slice(-3));
    }
    return num;
}
class Pokecard extends Component{
    render(){
        var number=convertor(this.props.id);
        var furl=`${url}${number}.png`;
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