import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFocused: {
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  cardDefault: {
    borderWidth: 0,
  },
  infoContainer: {
    maxWidth: Platform.OS === 'ios' ? 480 : 280,
    minHeight: Platform.OS === 'ios' ? 280 : 180,
    marginTop: 16,
    alignItems: 'center',
  },
});

export default styles;
