import React from 'react';
import { useRecoilValue } from 'recoil';
import { generateIcon } from 'utils/utils';
import { List } from './styles';
import { gamesState } from 'recoil/games/atoms';
import { useRemoveFavGame } from 'recoil/games/selectors';
import { FaEdit, FaTrash } from 'react-icons/fa'

interface Props {
  isRemove?: boolean;
  isEdit?: boolean
}

const GamesList = ({ isRemove, isEdit }: Props) => {
  const games = useRecoilValue(gamesState);
  const remove = useRemoveFavGame();

  return (
    <List>
      <h3>Games List</h3>
      {
        games.map((item: any, index: number) =>
          <List.Item key={index}>
            <span>{item.title}</span>
            <List.Icon src={generateIcon(item.consoles)} />
            {
              !isEdit &&
              <FaEdit />
            }
            {
              !isRemove &&
              <FaTrash
                onClick={() => remove(item.id)}
              />
            }
          </List.Item>
        )
      }
    </List>
  )
}

export default GamesList
