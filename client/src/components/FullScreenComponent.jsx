import React from "react";
import screenfull from "screenfull";

const FullScreenComponent = ({ active, children }) => {
  React.useEffect(() => {
    if (screenfull.isEnabled && active) {
      screenfull.request();
    }
  }, [active]);

  return (
    <div
      style={{
        display: active ? "block" : "none",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  );
};

export default FullScreenComponent;
