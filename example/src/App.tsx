import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  const [pressed, setPressed] = React.useState(false);

  return (
      <View style={styles.container}>
        <Neumorphism
          lightColor={'#FFFFFF'}
          darkColor={'#DEDEE9'}
          shapeType={pressed ? 'basin' : 'flat'}
          radius={5}
        >
          <LinearGradient
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            locations={[0,0.5,1]}
            colors={['#EFF0F6', '#F4F5F9', '#F9F9FC']}>
            <View style={styles.box}>
              <Text style={{paddingTop: 18,}}>TEST 2</Text>
            </View>
          </LinearGradient>
        </Neumorphism>
        <Neumorphism
          lightColor={'#FFFFFF'}
          darkColor={'#DEDEE9'}
          shapeType={pressed ? 'basin' : 'flat'}
          radius={5}
        >
          <Neumorphism
            lightColor={'#EAEAF2'}
            darkColor={'#DEDEE9'}
            shapeType={'pressed'}
            radius={5}
            style={{ marginTop: 50, borderWidth: 1, borderColor: '#FFF', borderRadius: 5, }}
          >
          <LinearGradient
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            locations={[0,0.5,1]}
            colors={['#F0F2F7', '#F2F2F9', '#F3F3FA']}>
              <View style={styles.box_pressed}>
                <Text style={{paddingTop: 18,}}>TEST 2</Text>
              </View>
            </LinearGradient>
          </Neumorphism>
        </Neumorphism>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FA',
    padding: 25,
    paddingVertical: 150,
  },
  box: {
    backgroundColor: '#F3F3FA',
    borderRadius: 5,
    height: 54,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  box_pressed: {
    backgroundColor: 'transparent',
    height: 54,
    paddingHorizontal: 20,
  },
});
