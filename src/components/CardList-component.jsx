import React from 'react'
import {card, Card} from './Card-component'
import './card-list-styles.css';

export const CardList=props=>(
  
     <div className="card-list">
         {props.usersInfo.map(user =>
              <Card user={user}></Card>
              
              )}
    </div>
)