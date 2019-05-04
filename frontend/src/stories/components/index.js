import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@material-ui/core';

storiesOf('Button', module).add('default', () => (
<Button  variant="contained" color="primary">
    Button
</Button>
));
