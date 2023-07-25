import React from "react";
import "./Header.css";
import Lap from './Lap';

class Header extends React.Component {
  render(){
    return (
      <div className="Header">
        <h1>
          Events counter:&nbsp; <Lap />
        </h1>
      </div>
    );
  }

  componentDidMount(): void {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log('component updated');
  }
};
export default Header;
