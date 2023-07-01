import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  View,
  Text,
  Alert,
} from 'react-native';
import MyButton from '../componentes/MyButton';
import Loading from '../componentes/Loading';
import {CommonActions} from '@react-navigation/native';
import {AuthUserContext} from '../context/AuthUserProvider';
import {COLORS} from '../assets/colors';

const SingIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const {signIn} = useContext(AuthUserContext);

  const entrar = async () => {
    if (email !== '' && password !== '') {
      setLoading(true);
      if (await signIn(email, password)) {
        setLoading(false);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'AppStack'}],
          }),
        );
      } else {
        setLoading(false);
      }
    } else {
      Alert.alert('Atenção', 'Você deve preencher todos os campos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cabecalho}>
          <Text style={styles.go}>GO!</Text>
        </View>
        <View style={styles.divSuperior}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.white}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            onEndEditing={() => this.passTextInput.focus()}
          />
          <TextInput
            ref={ref => {
              this.passTextInput = ref;
            }}
            style={styles.input}
            secureTextEntry={showPass}
            placeholder="Senha"
            placeholderTextColor={COLORS.white}
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPassword(t)}
            onEndEditing={() => entrar()}
          />
          <Text
            style={styles.textEsqueceuSenha}
            onPress={() => navigation.navigate('RecuperarSenha')}>
            Esqueceu sua senha?
          </Text>
          <MyButton texto="ENTRAR" onClick={entrar} />
        </View>
        <View style={styles.divInferior}>
          <View style={styles.divOuHr}>
            <View style={styles.divHr} />
            <Text style={styles.textOu}>OU</Text>
            <View style={styles.divHr} />
          </View>
          <View style={styles.divCadastrarSe}>
            <Text style={styles.textNormal}>Não tem uma conta?</Text>
            <Text
              style={styles.textCadastrarSe}
              onPress={() => navigation.navigate('SignUp')}>
              Cadastre-se
            </Text>
          </View>
          {/* {loading && <Loading />} */}
        </View>
      </ScrollView>
      {loading && <Loading />}
    </SafeAreaView>
  );
};
export default SingIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  cabecalho: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.black,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secundary,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  go: {
    fontSize: 40,
    fontFamily: 'Poppins',
    color: COLORS.secundary,
  },
  divSuperior: {
    flex: 5,
    alignItems: 'center',
    padding: 10,
  },
  divInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  input: {
    backgroundColor: COLORS.primary,
    textAlign: 'center',
    color: 'white',
    width: '80%',
    height: 38,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  textEsqueceuSenha: {
    paddingRight: 20,
    fontSize: 15,
    textDecorationLine: 'underline',
    color: COLORS.grey,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  divOuHr: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divHr: {
    width: '30%',
    height: 1,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2,
  },
  textOu: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: COLORS.grey,
  },
  divCadastrarSe: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textNormal: {
    fontSize: 18,
    color: COLORS.grey,
  },
  textCadastrarSe: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: COLORS.grey,
    marginLeft: 5,
  },
});
