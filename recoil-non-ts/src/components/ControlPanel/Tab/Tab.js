import React, { useState } from 'react';

const Tab = ({ onActiveTab, label }) => {
  return (
    <div onClick={onActiveTab}>
      <span>{label}</span>
    </div>
  )
}

export default Tab;
