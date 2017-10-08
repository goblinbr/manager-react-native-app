import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  headerView: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20
  },
  inputLabel: {
    fontSize: 18,
    paddingLeft: 8
  },
  inputTextInput: {
    color: '#000',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    height: 40
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00'
  },
  employeeListItemText: {
    fontSize: 18,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  confirmModalButtonView: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  confirmModalText: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  },
  confirmModalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  confirmModalButton: {
    width: 100,
    marginRight: 20,
    marginLeft: 20
  }
});

export default styles;
