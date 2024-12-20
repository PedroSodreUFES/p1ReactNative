import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container : {
    backgroundColor: '#131016',
    flex:1,
    padding:24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate : {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input : {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#ffffff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12
  },
  buttonText : {
    color: "#fff",
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center", /*alinhamento horizontal */
    justifyContent: "center", /*alinhamento vertical */
  },
  form : {
    width: '100%',
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 42
  },
  listEmptyText : {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",    
  }
});