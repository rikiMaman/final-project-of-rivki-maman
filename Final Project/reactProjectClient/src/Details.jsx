import React, { useState } from "react";
import Setservices from './Set'
// import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
const ExampleTrackChildd = () => {
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Switch
          slotProps={{
            track: {
              children: (
                <React.Fragment>
                  <Typography component="span" level="inherit" sx={{ ml: '10px' }}>
                    On
                  </Typography>
                  <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                    Off
                  </Typography>
                </React.Fragment>
              ),
            },
          }}
          sx={{
            '--Switch-thumbSize': '27px',
            '--Switch-trackWidth': '64px',
            '--Switch-trackHeight': '31px',
          }}
        />
      </Stack>


      {switchOn && <ExampleTrack />}
    </div>
  );
};

const ExampleTrack = () => {
  return (
    <div>
      <Setservices />


    </div>
  );
};
export default ExampleTrackChildd;