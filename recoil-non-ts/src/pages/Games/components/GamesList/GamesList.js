import React, { Suspense } from 'react';
import { getGamesList } from 'recoil/games/selectors';
import { useRecoilValue } from 'recoil';
import { generateIcon } from 'utils/utils';
import { List } from './styles';
import { gamesState } from 'recoil/games/atoms';

const GamesList = () => {
  const games = useRecoilValue(gamesState);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  )
}

export default GamesList
