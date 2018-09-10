import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SingleJoke from './singleJoke'
import './css/form.css'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    value: '',
    pickerText: 'Choose a Category'
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget, value: '' });
  };

  handleClose = (event) => {
    let typo = event.target.value
    let type;
    switch (typo) {
    case 1:
      type = 'general';
      break;
    case 2:
      type = 'knock-knock';
      break;
    case 3:
      type = 'programming';
      break;
    default:
      console.log('This broke!')
    }
    let newHeader = type.charAt(0).toUpperCase() + type.substr(1)
    this.setState({ anchorEl: null, value: type, pickerText: newHeader })

  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className = "formDiv">
        <div>
          <Button id="niceButtonText"
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            {this.state.pickerText}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem value='1' onClick={this.handleClose}>General</MenuItem>
            <MenuItem value='2' onClick={this.handleClose}>Knock-Knock</MenuItem>
            <MenuItem value='3' onClick={this.handleClose}>Programming</MenuItem>
          </Menu>
        </div>
        <SingleJoke money = {this.state.value} />
      </div>
    );
  }
}

export default SimpleMenu;
