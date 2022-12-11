import React from "react";
import "./burger.css";

import { slide as Menu } from "react-burger-menu";

export default function burger() {
  return (
    <Menu className="my-menu" width={"70vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        Travel Plan
      </a>
      <a className="menu-item" href="/">
        Bucket List
      </a>
      <a className="menu-item" href="/">
        Travel Budget
      </a>
      <a className="menu-item" href="/">
        Daily Planner
      </a>
      <a className="menu-item" href="/">
        Packing List
      </a>
    </Menu>
  );
}
