import React, { Component } from 'react';
import Pokecard from './Pokecard.js';
import './Pokedex.css';
class Pokedex extends Component{
    static defaultProps={
        pokemon:[
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render(){
        var res;
        (this.props.isWinner)?res="Winner":res="Loser";
        if(this.props.isWinner){
            res=<h2 className="Winner">Winning Hand!</h2>
        }else{
            res=<h2 className="Loser">Losing Hand!</h2>
        }
        return(
            <div >
                <h2>{res}</h2>
                <p>Total Experience:{this.props.exp}</p>
                <div className="Pokedex">
                {this.props.pokemon.map((p) => (<Pokecard name={p.name} id={p.id} type={p.type} exp={p.base_experience} />))}
                </div>
                
            </div>
        )
    }
}
export default Pokedex;