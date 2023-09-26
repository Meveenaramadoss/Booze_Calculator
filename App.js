import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, dropdownStyles, SafeAreaView, Switch} from 'react-native';
import { styles } from './styles/Styles';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown';
import { ThemeContext } from './components/theme';

export default function App() {
  const [weight, setWeight] = useState(5);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [text, setText] = useState("");
  const [value, setValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [theme, setTheme]= useState('light');
  const genders=["Male", "Female"]

  function calculate(){
    let formula = 0;

    const litres = bottles * 0.33;
    const burning = weight / 10;
    const grams1 = litres * 8* 4.5;
    const grams2 = grams1 - burning * time;

    if (gender =='male'){
      formula = grams2/ (weight * 0.7)
    } else{
      formula = grams1/ (weight * 0.6)
    }

    if (!isNaN(formula) && formula >= 0){
      setResult(formula);
    }else {
      setResult(0);
    }

  function handleText(inputText){
    setText(inputText);
  }
  }
if (!weight){
  alert("Please include your weight, without weight calculation is not possible!");
}

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style= {theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#eba9eb'}]} >
      <Text style={styles.text1}>BOOZE CALCULATOR</Text>
      <Switch value={theme==='light'}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      thumbColor={isEnabled ? styles.thumEnablecolor: '#3acffff'}
      trackColor={{false:  '#f07dea', true: '#3ac4ffff'}}/>

      <StatusBar backgroundColor="#bcadad91" style="auto"/>
      <Text style={styles.text1} minValue={25}>WEIGHT</Text>
      <TextInput
      defaultValue = {String(weight)}
      style={styles.input}
      onChangeText={text=> setWeight(parseFloat(text) || 0)}
      keyboardType='number-pad'
      keyboardAppearance='light'/>
    <Text style={styles.text1}>BOTTLES</Text>
    <NumericInput minValue={0}
    containerStyle={{
      backgroundColor:'#0cd0de2c'
    }}
    rounded
    value={bottles} onChange={v=>setBottles(v)}/>
    <Text style={styles.text1}>HOURS</Text>
    <NumericInput minValue={0}
    containerStyle={{
      backgroundColor:'#0cd0de2c'
    }}
    rounded
    value={time} onChange={v=>setTime(v)}/>
      <Text style={styles.text1}>GENDER</Text>
      <View style={styles.dropdown}>
      <SelectDropdown
      data={genders}
      defaultValueByIndex={0}
      onSelect={g => setGender(g)}/></View>

      <TouchableOpacity style={styles.button}>
      <Text title='calculate' style={styles.text1} onPress={calculate}>CALCULATE</Text>
      </TouchableOpacity>
      <Text style={styles.result}>
      Result: {result.toFixed(2)}</Text>

      
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}


