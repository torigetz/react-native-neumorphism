import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { NeumorphContext } from './context';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  style?: ViewStyle;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Neumorphism(props: NeumorphismProps) {
  const shadowContext = useContext(NeumorphContext);

  useEffect(() => {
    console.log(shadowContext)
  }, [])

  if (props.shapeType === 'pressed') {
    let shadowProps = {
      shadowRadius: shadowContext.shadowRadius,
      shadowOffset: shadowContext.depth,
      shadowOpacity: shadowContext.shadowOpacity,
    };
    return (
      <View style={props.style}>
        <View style={[insetStyles.container, { borderRadius: props.radius }]}>
          {props.children}
          {!props.disabled && (
            <>
              <Shadow
                type={'left'}
                {...shadowProps}
                shadowColor={props.darkColor}
              />
              <Shadow
                type={'top'}
                {...shadowProps}
                shadowColor={props.darkColor}
              />
              <Shadow
                type={'right'}
                {...shadowProps}
                shadowColor={props.lightColor}
              />
              <Shadow
                type={'bottom'}
                {...shadowProps}
                shadowColor={props.lightColor}
              />
            </>
          )}
        </View>
      </View>
    );
  } else {
    return (
      <View style={props.style}>
        <View
          style={{
            shadowColor: props.lightColor,
            shadowOffset: {
              width: -(shadowContext.depth as number),
              height: -(shadowContext.depth as number),
            },
            shadowOpacity: (shadowContext.shadowOpacity as number),
            shadowRadius: (shadowContext.shadowRadius as number),
          }}
        >
          <View
            style={{
              shadowColor: props.darkColor,
              shadowOffset: {
                width: (shadowContext.depth as number),
                height: (shadowContext.depth as number),
              },
              shadowOpacity: (shadowContext.shadowOpacity as number),
              shadowRadius: (shadowContext.shadowRadius as number),
            }}
          >
            <View style={{ borderRadius: props.radius, overflow: 'hidden' }}>
              {props.children}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Shadow = ({
  type,
  shadowColor,
  shadowOpacity,
  shadowOffset,
  shadowRadius,
}: ShadowProps) => {
  const shadowContext = useContext(NeumorphContext);

  if (shadowOffset === undefined) {
    shadowOffset = 5;
  }

  let offsets = {
    left: shadowContext.depth,
    top: shadowContext.depth,
    right: -(shadowContext.depth as number),
    bottom: -(shadowContext.depth as number),
  };
  const offsetStyle = {
    width: ['left', 'right'].includes(type) ? offsets[type] : 0,
    height: ['top', 'bottom'].includes(type) ? offsets[type] : 0,
  };

  const shadowStyle = {
    shadowColor: shadowColor,
    shadowOffset: offsetStyle,
    shadowRadius: shadowRadius,
    shadowOpacity: shadowOpacity,
  };
  return <View style={[insetStyles.shadow, insetStyles[type], shadowStyle as any]} />;
};

interface ShadowProps {
  type: 'left' | 'top' | 'right' | 'bottom';
  shadowColor?: string;
  shadowOpacity?: number;
  shadowOffset?: number;
  shadowRadius?: number;
}

const insetStyles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  shadow: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  left: {
    width: 10,
    height: '100%',
    left: -10,
  },
  top: {
    height: 10,
    width: '100%',
    top: -10,
  },
  right: {
    width: 10,
    height: '100%',
    right: -10,
  },
  bottom: {
    height: 10,
    width: '100%',
    bottom: -10,
  },
});
