import { StyleSheet } from 'react-native';

export const stylesItemList = (done) => StyleSheet.create({
  containerItemList: {
    backgroundColor: 'rgba(90, 196, 196, 0.7)',
    paddingVertical: 30,
    paddingHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textContainer: {flex: 4.5, gap: 5},

  actionContainer: {flex: 4, flexDirection: 'row', gap: 14, justifyContent: 'flex-end', alignItems: 'center'},
});

export default stylesItemList;