import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../assets/colors';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Preencha os endereços</Text>
          <View style={styles.line} />
          <Text style={styles.subtitle}>
            Será um prazer para nós realizar a sua entrega
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.box}>
            <View style={styles.search}>
              <Image
                style={styles.lupa}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9iyapzgl0s5-I28%3A99%3B28%3A60?alt=media&token=fbb553dd-c5de-40aa-8d26-00b5d443085c',
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Partida"
                placeholderTextColor={COLORS.grey}
              />
            </View>
            <View style={styles.suggestion}>
              <Image
                style={styles.marker}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9iyapzgl0s5-I28%3A99%3B28%3A56?alt=media&token=c95038fb-e7f5-427f-ac4d-c04c09682852',
                }}
              />
              <Text style={styles.suggestionText}>Usar minha localização</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.search}>
              <Image
                style={styles.lupa}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9iyapzgl0s5-I28%3A99%3B28%3A60?alt=media&token=fbb553dd-c5de-40aa-8d26-00b5d443085c',
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Destino"
                placeholderTextColor={COLORS.grey}
              />
            </View>
            <View style={styles.suggestion}>
              <Image
                style={styles.marker}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9iyapzgl0s5-I28%3A99%3B28%3A56?alt=media&token=c95038fb-e7f5-427f-ac4d-c04c09682852',
                }}
              />
              <Text style={styles.suggestionText}>Usar minha localização</Text>
            </View>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Solicitar Entregador</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    fontFamily: 'Poppins, sans-serif',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    height: 180,
    paddingTop: 20,
    backgroundColor: COLORS.black,
  },
  title: {
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: '700',
    margin: 5,
  },
  line: {
    width: '70%',
    borderBottomWidth: 3,
    borderColor: COLORS.primary,
    marginTop: 5,
    marginBottom: 15,
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.secundary,
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    width: '100%',
    height: 685,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingTop: 100,
  },
  box: {
    width: '65%',
    height: 100,
    margin: 30,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryDark,
    borderRadius: 20,
    borderWidth: 2,
  },
  lupa: {
    margin: 5,
    width: 35,
    height: 35,
  },
  input: {
    flex: 2,
    textAlign: 'center',
    fontSize: 25,
    height: 50,
    borderRadius: 18,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 18,
    alignItems: 'center',
  },
  suggestion: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 47,
    marginLeft: 20,
    marginRight: 20,
  },
  suggestionText: {
    fontWeight: '800',
    color: COLORS.white,
  },
  button: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secundary,
    padding: 5,
    marginTop: 70,
    borderRadius: 10,
  },
  buttonText: {
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
  marker: {
    marginRight: 20,
    width: 19.5,
    height: 24.3,
  },
});
