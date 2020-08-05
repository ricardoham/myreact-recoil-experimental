import React from 'react';
import { gamesList } from '../../../../recoil/games/selector';
import { useRecoilValue } from 'recoil';
import { generateIcon } from '../../../../utils/utils';
import { List } from './styles';

const GamesList = () => {
  const games = useRecoilValue(gamesList);

  return (
    <List>
      {
        games.map(item =>
          <li>
            <span>{item.title}</span>
            <List.Icon src={generateIcon(item.console)} />
          </li>
        )
      }
    </List>
  )
}

export default GamesList
