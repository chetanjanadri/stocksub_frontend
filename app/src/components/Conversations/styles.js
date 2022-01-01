import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  Conversations: {
    paddingHorizontal: '2%',
    backgroundColor: '#f9f9f9',
    height: '90%',
  },
  tileContainer: {
    padding: '1%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 75,
    alignItems: 'center',
  },
  photoContainer: {
    width: '12%',
    height: '70%',
    borderRadius: 50,
  },
  detailsContainer: {
    width: '82%',
    flexDirection: 'column',
    marginLeft: '4%',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: 75,
  },
  detailsText: {
    paddingLeft: '2%',
  },
});
