import React from 'react';
import { StyledTab } from './styles';

interface Props {
  onActiveTab: () => void;
  label: string;
  activeTab: any;
}

const Tab = ({ onActiveTab, label, activeTab }: Props) => {
  console.log("aaa", activeTab);
  return (
    <StyledTab activeTab={activeTab} onClick={onActiveTab}>
      <span>{label}</span>
    </StyledTab>
  )
}

export default Tab;
