import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardFocused: {
    borderWidth: 3,
    borderColor: '#b0e0e6',
    padding: 0,
  },
  cardDefault: {
    borderWidth: 0,
    fontFamily: 'LifeSavers-Bold',
  },
  sectionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContnet: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
