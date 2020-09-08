import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tab from './Tab/Tab';

const ControlPanel = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div>
      {
        children.length > 1 ?
          children.map(({ props }, index) => {
            return (
              <div key={index}>
                <Tab
                  label={props.label}
                  onActiveTab={() => handleActiveTab(props.label)}
                />
                {activeTab === props.label && props.children}
              </div>
            )
          })
          : children
      }
    </div>
  )
}

export default ControlPanel;

ControlPanel.propTypes = {
  children: PropTypes.node,
}
