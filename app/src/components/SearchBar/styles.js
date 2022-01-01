import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  searchBarContainer: {
    height: '4%',
    paddingVertical: '1%',
    marginHorizontal: '2%',
    backgroundColor: '#f9f9f9',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  searchInput: {
    width: '90%',
    alignSelf: 'center',
    paddingLeft: '1%',
  },
  close: {
    width: '10%',
    alignSelf: 'center',
  },
});

export default styles;
