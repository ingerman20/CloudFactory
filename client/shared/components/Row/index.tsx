import React from 'react';
import { View } from 'react-native';
import { rowStyles } from './styles';

/**
 * Строка
 */
export const Row = ({ children }: { children: React.ReactNode }) => {
  return <View style={rowStyles.row}>{children}</View>;
};
