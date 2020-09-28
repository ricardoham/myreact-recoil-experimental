import React, { useState } from 'react'
import Tab from './Tab/Tab';

import { ControlPanelContent, ControlPanelTabs, StyledControlPanel } from './styles';

interface Props {
  children: JSX.Element[];
}

const ControlPanel = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  }

  return (
    <StyledControlPanel>
      <ControlPanelTabs>
        {
          children && children.length > 1 ?
            children.map(({ props }: JSX.Element, index: number) => {
              return (
                <Tab
                  key={index}
                  activeTab={activeTab === props.label}
                  label={props.label}
                  onActiveTab={() => handleActiveTab(props.label)}
                />
              )
            })
            : children
        }
      </ControlPanelTabs>
      {
        children && children.map(({ props }: any, index: number) => (
          <ControlPanelContent key={index}>
            {activeTab === props.label && props.children}
          </ControlPanelContent>
        ))
      }
    </StyledControlPanel>
  )
}

export default ControlPanel;
