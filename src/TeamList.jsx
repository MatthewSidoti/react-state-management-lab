// TeamList.jsx
import React from 'react';

const TeamList = ({ team, onRemove }) => {
  return (
    <div>
      {team.length === 0 ? (
        <p>No members yet.</p>
      ) : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={member.name} style={{ width: "150px", height: "150px" }} />
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => onRemove(member)}>Remove from Team</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamList;
