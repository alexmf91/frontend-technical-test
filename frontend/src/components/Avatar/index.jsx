/* eslint-disable react/prop-types */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ picture, width, height }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={picture}
        sx={{ width, height }}
      />
    </Stack>
  );
}
