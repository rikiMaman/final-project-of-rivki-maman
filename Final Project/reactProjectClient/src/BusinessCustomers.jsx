import React, { useState } from "react";

const EexampleTrackChild = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <label>Switch</label>
      <input
        type="checkbox"
        checked={isAuthenticated}
        onChange={() => setIsAuthenticated(!isAuthenticated)}
      />

      {!isAuthenticated && (
        <div>
          <button>סיסמה</button>
          <button>שם משתמש</button>
        </div>
      )}
    </div>
  );
};

export default EexampleTrackChild;
