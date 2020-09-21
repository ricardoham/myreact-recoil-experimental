import React from 'react';
import { StyledTab } from './styles';

const Tab = ({ onActiveTab, label, activeTab }) => {
  return (
    <StyledTab activeTab={activeTab} onClick={onActiveTab}>
      <span>{label}</span>
    </StyledTab>
  )
}

export default Tab;
