import "./index.less";

import React, { useState, useEffect } from "react";

import { Avatar } from "antd";
import { useHistory } from "react-router";

export interface ILocalProps {}

const HomeHeader = () => {
  const history = useHistory();

  const { pathname } = history.location;
  return (
    <>
      {!pathname.includes("cat") && (
        <header>
          <span>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 100 }}
              src="http://www.freshboo.com/wp-content/uploads/2014/05/two-kissing-cats-wallpaper.jpg"
              alt="cats"
            />
          </span>
          <h1>Cat Collections</h1>
          <p>
            Meowness, the cats that will never <br />
            leave humans in peace!
          </p>
        </header>
      )}
    </>
  );
};

export default HomeHeader;
