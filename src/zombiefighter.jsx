import React from 'react';

const FighterCard = ({ fighter, onAdd }) => {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <h3>{fighter.name}</h3>
      <p>Price: ${fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => onAdd(fighter)}>Add</button>
    </li>
  );
};

export default FighterCard;
