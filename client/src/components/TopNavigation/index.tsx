import React from "react";
import IconButton from "../IconButton";
import "./TopNavigation.css";

interface Props {
  title: string;
  searchIcon: string;
  typeToSearch: string;
  img: string;
  iconButton: string;
}

const TopNavigation: React.FC<Props> = ({
  title,
  searchIcon,
  typeToSearch,
  img,
  iconButton,
}) => {
  return (
    <div className="navigation-web-top-bar-on-light">
      <div className="overlap-group">
        <div className="title-2 heading--h6">{title}</div>
        <div className="search">
          <div className="search-icon">{searchIcon}</div>
          <div className="type-to-search x12px--medium">{typeToSearch}</div>
        </div>
        <IconButton className="">{iconButton}</IconButton>
        <div className="img-2" style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </div>
  );
};

export default TopNavigation;
