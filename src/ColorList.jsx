import React from 'react';
import SIngleColor from './SIngleColor';
import {nanoid} from 'nanoid'

const ColorList = ({colors}) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SIngleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
