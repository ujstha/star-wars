import React, { useState, useEffect } from 'react';

const FontChange = () => {
  const [font, setFont] = useState({});
  const [fonts] = useState([
    {
      fontFamily: 'Times New Roman',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Krub',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Raleway',
      fontStyle: 'normal',
    },
  ]);

  useEffect(() => {
    let index = 0;
    setInterval(() => {
      setFont(fonts[index++ % fonts.length]);
    }, 1000);
  }, [fonts]);

  return (
    <div className='fontChange'>
      <h1>
        Hello <span style={font}>world</span>
      </h1>
    </div>
  );
};

export default FontChange;
