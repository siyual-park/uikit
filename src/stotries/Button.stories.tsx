import React from 'react';
import _ from 'lodash';
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/20/solid';

import Box from '@layout/Box';
import Button from '@form/Button';
import CircleButton from '@form/CircleButton';

export default {
  title: 'form | Button',
  component: Button,
};

export const Playground = (props) => <Button {...props} />;
Playground.args = {
  className: '',
  variant: 'contain',
  color: 'default',
  size: 'md',
  children: 'Button Text',
  rounded: false,
  disabled: false,
};
Playground.argTypes = {
  variant: { control: 'select', options: ['text', 'contain', 'outline'] },
  color: { control: 'select', options: ['primary', 'secondary', 'default'] },
  size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
};

const Sample = (props) => {
  const { children, ...rest } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className="flex flex-row items-center justify-center gap-5 max-w-screen">
      {sizes.map((size) => (
        <Button size={size} {...rest}>
          {children}
        </Button>
      ))}
    </Box>
  );
};
Sample.args = _.omit(Playground.args, 'size');
Sample.argTypes = _.omit(Playground.argTypes, 'size');

export const Primary = (props) => <Sample {...props} />;
Primary.args = {
  ...Sample.args,
  color: 'primary',
};
Primary.argTypes = Sample.argTypes;

export const Secondary = (props) => <Sample {...props} />;
Secondary.args = {
  ...Sample.args,
  color: 'secondary',
};
Secondary.argTypes = Sample.argTypes;

export const Default = (props) => <Sample {...props} />;
Default.args = {
  ...Sample.args,
  color: 'default',
};
Default.argTypes = Sample.argTypes;

export const WithLeadingIcon = (props) => {
  const { children, ...others } = props;
  return (
    <Sample {...others}>
      <EnvelopeIcon />
      {children}
    </Sample>
  );
};
WithLeadingIcon.args = {
  ...Sample.args,
  color: 'primary',
};
WithLeadingIcon.argTypes = Sample.argTypes;

export const WithTailingIcon = (props) => {
  const { children, ...others } = props;
  return (
    <Sample {...others}>
      {children}
      <EnvelopeIcon />
    </Sample>
  );
};
WithTailingIcon.args = {
  ...Sample.args,
  color: 'primary',
};
WithTailingIcon.argTypes = Sample.argTypes;

export const Circle = (props) => {
  const { ...rest } = props;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <Box className="flex flex-row items-center justify-center gap-5">
      {sizes.map((size) => (
        <CircleButton size={size} {...rest}>
          <PlusIcon />
        </CircleButton>
      ))}
    </Box>
  );
};
Circle.args = _.omit(Playground.args, 'size', 'children', 'rounded');
Circle.argTypes = _.omit(Playground.argTypes, 'size', 'children', 'rounded');
