import React from 'react';
import { Text, View } from 'react-native';
import { tableStyles } from './styles';

/**
 * Ячейка
 */
export const HeadCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={tableStyles.headCell}>
      <Text>{children}</Text>
    </View>
  );
};
