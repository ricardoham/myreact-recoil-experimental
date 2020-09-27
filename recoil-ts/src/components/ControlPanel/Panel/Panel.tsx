import React from 'react';

interface Props {
  children: JSX.Element;
  label: string;
}

const Panel = ({ children, label }: Props) => <div>{children}</div>


export default Panel;
