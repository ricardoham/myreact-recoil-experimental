import React from 'react';
import { gamesList } from 'recoil/games/selector';
import { useRecoilValue } from 'recoil';
import { generateIcon } from 'utils/utils';
import { List } from './styles';

const GamesList = () => {
  const games = useRecoilValue(gamesList);

  return (
    <List>
      {
        games.map((item, index) =>
          <List.Item key={index}>
            <span>{item.title}</span>
            <List.Icon src={generateIcon(item.console)} />
          </List.Item>
        )
      }
    </List>
  )
}

export default GamesList
