import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img/logo.png';
import { styled } from '@mui/material/styles';

const options = [
  'Ростов-на-Дону',
  'Таганрог',
  'Шахты',
  'Азов',
  'Сальск',
  'Элиста',
  'Краснодар',
];

const CustomButton = styled(Button)(({ theme }) => ({
  background: 'white'
}));

const ITEM_HEIGHT = 48;

function Header() {
  const [btnPlaceholder, setBtnPlaceholder] = React.useState('Выбрать город');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (e) => {
    setBtnPlaceholder(e.target.textContent)
    setAnchorEl(null);
  };
  return (
     <div className='header'>
      <div className='logo'>
        <img src={logo} className='logoImg' alt='bus-logo'></img>
        <div className='project-title'>
          <span>Анализ транспорта</span>
        </div>
      </div>
      <div className='select-city'>
      <Button variant="contained" style={{
            background: 'white',
            color: '#3574F2',
            width: '153.172px',
            fontSize: '12px',
            fontWeight: '700'
          }}
        onClick={handleClick}>
            { btnPlaceholder }
          </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option,i) => (
          <MenuItem key={`city-${i}`} selected={option === 'Pyxis'} onClick={handleSelect}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
      <div></div>
     </div>
  );
}

export default Header;