import React from 'react';
import { View } from 'react-native';
import { tableStyles } from './styles';

/**
 * Таблица
 */
export const Table = ({ children }: { children: React.ReactNode }) => {
  return <View style={tableStyles.table}>{children}</View>;
};
