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
    width: Platform.OS === 'ios' ? 500 : 280,
    minHeight: Platform.OS === 'ios' ? 300 : 180,
    paddingVertical: 12,
    alignItems: 'center',
  },
});

export default styles;
