import React from 'react';
import Opponents from './Opponents.jsx'
import Player from './Player.jsx'
import Deck from './Deck.jsx'
import DiscardPile from './DiscardPile.jsx'

const InitializedView = (props) => {
  // console.log('ATTN: hitting the initilized view')
  // console.log('these are the props of the Initialized View', props)
  return (
    <div className='gameTable'>
      <Opponents opponents={props.opponents} opponentsUsernames={props.opponentsUsernames} />
      <div className="row">
        <Deck deck={props.deck} isPlayerTurn={props.isPlayerTurn} handleDeckClick={props.handleDeckClick}/>
        <DiscardPile discard={props.discard}/>
      </div>
        <Player 
          isPlayerTurn={props.isPlayerTurn} 
          player={props.player} 
          handleCardClick={props.handleCardClick}
          socket={props.socket}
        />
    </div>
  );
};

export default InitializedView;