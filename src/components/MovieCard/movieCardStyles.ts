import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  cardFocused: {
    borderWidth: 3,
    borderColor: '#fff',
    padding: 0,
  },
  cardDefault: {
    borderWidth: 0,
    fontFamily: 'LifeSavers-Bold',
  },
  infoContainer: {
    maxWidth: 510,
    minHeight: 200,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
