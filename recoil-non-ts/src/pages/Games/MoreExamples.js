import React, { useState } from 'react';
import GamesForm from './components/GamesForm/GamesForm';
import GamesListContainer from 'containers/GamesListContainer';

import { GamesContainer } from './styles';

const MoreExamples = () => {
  const [items, setItems] = useState({
    item: {
      id: 0,
      title: '',
      consoles: ''
    },
    isEdit: false,
  })

  const handleGetEditItems = (item, isEdit) => {
    setItems({ item, isEdit })
  }

  return (
    <GamesContainer>
      <GamesListContainer onEditItems={handleGetEditItems} />
      <GamesForm favGame={items.item} isEdit={items.isEdit} />
    </GamesContainer>
  )
}

export default MoreExamples;
