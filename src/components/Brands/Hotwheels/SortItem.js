import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 4, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Sắp xếp</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        
        <MenuItem value={10}>Giá tiền tăng dần</MenuItem>
        <MenuItem value={20}>Giá tiền giảm dần</MenuItem>
        <MenuItem value={30}>Theo tên sản phẩm</MenuItem>
      </Select>
    </FormControl>
  );
}