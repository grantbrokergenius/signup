import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function() {

    const [pos, setPos] = React.useState('');

    const handleChange = event => {
        setPos(event.target.value);
      };

    return (
        <div>
              <TextField id="standard-basic" label="Company Name" /><br/>
              <FormControl style={{minWidth: 120}}>
        <InputLabel id="demo-simple-select-label">Point of Sale</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pos}
          onChange={handleChange}
        >
          <MenuItem value={'ei'}>EI Box Office</MenuItem>
          <MenuItem value={'pn'}>POSNExt</MenuItem>
          <MenuItem value={'vs'}>Skybox</MenuItem>
          <MenuItem value={'tu'}>Ticket Utils</MenuItem>
          <MenuItem value={'tn'}>Ticket Network</MenuItem>
          <MenuItem value={'consignment'}>Consignment</MenuItem>
          <MenuItem value={'none'}>None</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>

        </Select>
      </FormControl>

        </div>
    )
}