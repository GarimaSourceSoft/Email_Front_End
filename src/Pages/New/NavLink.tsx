import React, { memo, useEffect, useState } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";

const NavLink = (props: any) => {
  const Location = useLocation();

  const match = matchRoutes([{ path: props.to }], Location);

  return (
    <>
      <li className={`menu-item ${match ? "active" : ""}`}>
        <Link {...props} className="menu-link">
          {props.children}
        </Link>
      </li>
    </>
  );
};

export default memo(NavLink);