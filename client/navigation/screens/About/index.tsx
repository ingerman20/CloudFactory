import * as React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { styles } from '../../../shared/components/styles';

/**
 * О приложении
 */
export const About = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text onPress={() => navigation.navigate('Котировки')}>
        Нажми меня для перехода к котировкам
      </Text>
    </View>
  );
};
