// import React from "react";
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';

const powercards = [
  {
    name: "focusfire",
    desc: "Put a Player back in auction and get back the amount you paid for the player."
  },
  {
    name: "double right to match",
    desc: ""
  },
  {
    name: "god's eye",
    desc: ""
  },
  {
    name: "right to match",
    desc: ""
  },
  {
    name: "silent reserve",
    desc: "You can secretly reserve two players during the initial stages of an IPL auction. This information will remain secret. "
  },
  {
    name: "stealth bid",
    desc: ""
  }
];

const Powercard = ({ name, isUsed }) => {
  const powercard = powercards.find(pc => pc.name.toLowerCase() === name.toLowerCase())

  return (
    <Tooltip title={powercard.desc} arrow followCursor>
      <img className="h-[6.6rem] m-2 cursor-pointer"
        src={`./images/powercards/${powercard.name}.png`}
        alt={`${powercard.name} card`}
        style={isUsed ? { 'filter': 'grayscale(100%)' } : {}} />
    </Tooltip>
  );
}

Powercard.propTypes = {
  name: PropTypes.string.isRequired,
  isUsed: PropTypes.bool.isRequired
};

export default Powercard;