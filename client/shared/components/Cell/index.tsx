import React from 'react';
import { Text, View } from 'react-native';
import { tableStyles } from './styles';

/**
 * Ячейка
 */
export const Cell = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={tableStyles.cell}>
      <Text>{children}</Text>
    </View>
  );
};
