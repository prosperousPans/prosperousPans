import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

class Card extends Component {
  constructor (props){
    super();
  }

  componentWillMount() {
    this.pan = new Animated.ValueXY()

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),
      onPanResponderRelease: (e, {dx,dy}) => {
        //1 = right; -1 = left
        const directionDx = Math.abs(dx) / dx;
        //1 = down; -1 = up
        const directionDy = Math.abs(dy) / dy;

        if (dy > 200) {
          Animated.decay(this.pan, {
            velocity: {x:0, y:3 * directionDx},
            deceleration: 0.995,
          })
          .start( () => {
            console.log('swiped down')
          })
        } else if (dy < -200) {
          Animated.decay(this.pan, {
            velocity: {x:0, y:3 * directionDx},
            deceleration: 0.995,
          })
          .start( () => {
            console.log('swiped up')
          })
        } else if (dx < -160) {
          Animated.decay(this.pan, {
            velocity: {x:3 * directionDx, y:0},
            deceleration: 0.995,
          })
          .start( () => {
            console.log('swiped left')
          })
        } else if (dx > 160) {
          Animated.decay(this.pan, {
            velocity: {x:3 * directionDx, y:0},
            deceleration: 0.995,
          })
          .start( () => {
            console.log('swiped right')
          })
        } else {
          Animated.spring(this.pan, {
            toValue: {x:0, y:0},
            friction: 10,
          }).start()
        }
      },
    })
  }
  
  render() {
    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    })
    const swipeStyle = {
      transform: [
        {translateX: this.pan.x},
        {translateY: this.pan.y},
        {rotate: rotateCard},
      ],
    }

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[styles.card, swipeStyle]}
      >
        <Image
          style={styles.profileImg}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <View style={{flex:1}}>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.text}>Industry</Text>
          <Text style={styles.text}>1) Education</Text>
          <Text style={styles.text}>2) Professional</Text>
          <Text style={styles.text}>3) Project</Text>
          <Text style={styles.text}>4) Personal</Text>
        </View>
      </Animated.View>
    )
  }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width * 0.7,
    height: height * 0.7,
    top: (height * 0.3) / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    alignSelf: 'center'    
  },
  profileImg: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center'
  }  
})

module.exports = Card;