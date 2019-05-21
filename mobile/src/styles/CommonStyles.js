import { StyleSheet } from 'react-native';

export const BlogsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    width: '80%',
  }
});

export const BlogDetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
  },
  headerContainer: {
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  header: {
    width: '100%',
    fontSize: 30,
    color: '#444',
  },
  body: {
    margin: 60,
    fontSize: 12
  },
  commentsContainer: {
    width: '90%'
  }
});

export const UserWidgetStyles = StyleSheet.create({
  userContainer: {
    width: '70%',
    height: 60,
    borderBottomColor: "red",
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userText: {
    fontSize: 28,
    color: '#444'
  }
})

export const BlogItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  }
})

export const CommentItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})