import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Index from './index';

storiesOf('Storybook Sandbox', module)
  .add('Index', () => (<Index />))
  .add('simple info',
  withInfo('description')(() =>
    <Index foo={ "hai" } />
  ))
