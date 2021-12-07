import { requireNativeComponent, View, ViewStyle } from 'react-native';
import React from 'react';
import parseColor from 'parse-color';
import { SHADOW_ELEVATION } from './constants';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  style?: ViewStyle;
  disabled?: boolean;
  children?: React.ReactNode;
  elevation?: number;
};

const NeumorphismCardView = requireNativeComponent<NeumorphismProps>(
  'NeumorphismCardView'
);

export default (props: NeumorphismProps) => {
  if (props.lightColor) {
    props.lightColor = parseColor(props.lightColor)?.hex;
  }
  if (props.darkColor) {
    props.darkColor = parseColor(props.darkColor)?.hex;
  }
  return (
    <View style={props.style}>
      {!props.disabled && (
        <NeumorphismCardView
          lightColor={props.lightColor}
          darkColor={props.darkColor}
          radius={props.radius}
          shapeType={props.shapeType}
          elevation={SHADOW_ELEVATION}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      )}
      <View style={{ borderRadius: props.radius, overflow: 'hidden' }}>
        {props.children}
      </View>
    </View>
  );
};
