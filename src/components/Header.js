import React, { memo } from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>budget tracker</h1>
    </div>
  );
};

export const MemoizedHeader = memo(Header);
