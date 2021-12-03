import React, { createContext } from 'react';
import {
  SHADOW_DEPTH,
  SHADOW_OPACITY,
  SHADOW_RADIUS
} from './constants';

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
  depth: SHADOW_DEPTH,
  shadowRadius: SHADOW_RADIUS,
  shadowOpacity: SHADOW_OPACITY
});

export const NeumorphProvider: React.FC<INeumorphProvider> = props => {
  return (
    <NeumorphContext.Provider value={props.options as Partial<INeumorphContext> || {}}>
      {props.children}
    </NeumorphContext.Provider>
  )
}
