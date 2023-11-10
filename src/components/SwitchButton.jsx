import React, { Component } from "react";
import Switch from "react-switch";

class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.config_data = this.props
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
        <Switch 
            offHandleColor="#00D1FF" 
            onColor="#00D1FF"
            offColor="#d6d6d6"
            uncheckedIcon={false} 
            checkedIcon={false}
            onChange={this.handleChange}
            checked={this.state.checked} 
            height={20}
            c
        />
    );
  }
}

export default SwitchButton