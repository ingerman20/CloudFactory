import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from '../../../shared/components/styles';
import { getTicker24h } from '../../../shared/api';
import { Table } from '../../../shared/components/Table';
import { Row } from '../../../shared/components/Row';
import { Ticker24hData } from '../../../entities/types';
import { Cell } from '../../../shared/components/Cell';
import { HeadCell } from '../../../shared/components/HeadCell';

/**
 * Котировки
 */
export const Quotes = () => {
  const [data, setData] = useState<Ticker24hData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const updateData = async () => {
    await getTicker24h()
      .then(setData)
      .then(() => setHasError(false))
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

  useFocusEffect(() => {
    let intervalID = setInterval(updateData, 5000);
    return () => {
      clearInterval(intervalID);
    };
  });

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <ScrollView style={styles.quotes}>
      <StatusBar />
      <Table>
        <Row>
          <HeadCell>displayName</HeadCell>
          <HeadCell>markPrice</HeadCell>
          <HeadCell>dailyChange</HeadCell>
          <HeadCell>high</HeadCell>
        </Row>
        {isLoading && <Text>Загрузка котировок</Text>}
        {hasError && <Text>Произошла ошибка</Text>}
        {!hasError &&
          data.map((item, index) => (
            <Row key={`item-${index}`}>
              <Cell>{item.displayName}</Cell>
              <Cell>{item.markPrice}</Cell>
              <Cell>{item.dailyChange}</Cell>
              <Cell>{item.high}</Cell>
            </Row>
          ))}
      </Table>
    </ScrollView>
  );
};
