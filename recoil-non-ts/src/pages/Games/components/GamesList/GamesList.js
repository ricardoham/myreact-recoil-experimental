import React from 'react';
import { useRecoilValue } from 'recoil';
import { generateIcon } from 'utils/utils';
import { getGamesList } from 'recoil/games/selectors';
import { List } from './styles';

const GamesList = () => {
  const games = useRecoilValue(getGamesList);

  return (
    <List>
      <h3>Games List</h3>
      {
        games.map((item, index) =>
          <List.Item key={index}>
            <span>{item.title}</span>
            <List.Icon src={generateIcon(item.consoles)} />
          </List.Item>
        )
      }
    </List>
  )
}

export default GamesList
