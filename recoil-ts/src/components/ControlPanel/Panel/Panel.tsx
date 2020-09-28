import React from 'react';

interface Props {
  children: React.ReactNode;
  label?: string;
}

const Panel = ({ children }: Props) => <div>{children}</div>


export default Panel;
