import React, { useEffect } from 'react';
import { useFullScreenHandle } from 'react-full-screen';

const ExtendedScreen = ({ activeLine }) => {
  const handle = useFullScreenHandle();

  useEffect(() => {
    if (activeLine !== null) {
      handle.enter();
    } else {
      handle.exit();
    }
  }, [activeLine, handle]);

  return (
    <div className={handle.active ? 'fullscreen' : 'hidden'}>
      <div className="fullscreen-content">
        <button className="exit-button" onClick={handle.exit}>
          Exit Fullscreen
        </button>
        <div className="fullscreen-text">
          <p className="text-white">{activeLine}</p>
        </div>
      </div>
    </div>
  );
};

