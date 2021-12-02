
import React, { createContext } from 'react';

interface INeumorphContext {
  depth: number
  shadowRadius: number
  shadowOpacity: number
}

interface INeumorphProvider {
  children?: JSX.Element | JSX.Element[],
  options?: Partial<INeumorphContext>
}

export const NeumorphContext = createContext<Partial<INeumorphContext>>({
  depth: 5,
  shadowRadius: 3,
  shadowOpacity: 5
});

export const NeumorphProvider: React.FC<INeumorphProvider> = props => {
  return (
    <NeumorphContext.Provider value={props.options as Partial<INeumorphContext> || {}}>
      {props.children}
    </NeumorphContext.Provider>
  )
}
