import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = (props) => (
  <ActivityIndicator size={props.size || 'large'} />
);

export { Spinner };
