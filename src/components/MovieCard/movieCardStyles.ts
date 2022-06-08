import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

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
    maxWidth: Platform.OS === 'ios' ? 510 : 260,
    minHeight: 200,
    paddingVertical: 12,
    alignItems: 'center',
    //  justifyContent: 'center',
  },
});

export default styles;
