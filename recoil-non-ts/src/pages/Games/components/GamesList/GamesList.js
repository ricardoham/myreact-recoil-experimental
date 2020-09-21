import React from 'react';
import { useRecoilValue } from 'recoil';
import { generateIcon } from 'utils/utils';
import { List } from './styles';
import { gamesState } from 'recoil/games/atoms';
import { useRemoveFavGame } from 'recoil/games/selectors';
import Button from 'components/Button/Button';

const GamesList = ({ isRemove }) => {
  const games = useRecoilValue(gamesState);
  const remove = useRemoveFavGame();

  return (
    <div>
      <List>
        {
          games.map((item, index) =>
            <List.Item key={index}>
              <span>{item.title}</span>
              <List.Icon src={generateIcon(item.consoles)} />
              {
                !isRemove &&
                <Button
                  text="Delete"
                  color="secondary"
                  onClick={() => remove(item.id)}
                />
              }
            </List.Item>
          )
        }
      </List>
    </div >
  )
}

export default GamesList
