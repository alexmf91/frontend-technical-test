/* eslint-disable react/require-default-props */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { PropTypes } from 'prop-types';

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

ImageAvatars.propTypes = {
  picture: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
