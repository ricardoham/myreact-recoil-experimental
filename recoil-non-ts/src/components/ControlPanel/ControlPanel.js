import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tab from './Tab/Tab';

import { ControlPanelContent, ControlPanelTabs, StyledControlPanel } from './styles';

const ControlPanel = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <StyledControlPanel>
      <ControlPanelTabs>
        {
          children.length > 1 ?
            children.map(({ props }, index) => {
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
        children.map(({ props }, index) => (
          <ControlPanelContent key={index}>
            {activeTab === props.label && props.children}
          </ControlPanelContent>
        ))
      }
    </StyledControlPanel>
  )
}

export default ControlPanel;

ControlPanel.propTypes = {
  children: PropTypes.node,
}
