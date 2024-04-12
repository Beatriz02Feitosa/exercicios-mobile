import React, { useState } from 'react'
import { View, Text, TextInput, Button,  } from 'react-native';


function Dadinhos() {
  const [resultado, setResultado] = useState('');
  const [resultadoCalculado, setResultadoCalculado] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const calcularResultado = () => {
    const calculo = parseFloat(input1) / parseFloat(input2);
    setResultadoCalculado(calculo);

    if (calculo < 0.7) {
      setResultado('Etanol é melhor');
    } else {
      setResultado('Gasolina é melhor');
    }
  };

  return(
    <View>
        
      <TextInput
          style={{padding: 8, margin: 7}}
          placeholder="preço do alcool"
          onChangeText={setInput1}
          keyboardType='numeric'
        />

        <TextInput
          style={{padding: 8, margin: 7}}
          placeholder="preço da gasolina"
          onChangeText={setInput2}
          keyboardType='numeric'
        />
     

        <Button title='Verificar' color='green' onPress={calcularResultado} />
      <Text>Valor total: {resultadoCalculado}</Text>
      <Text>{resultado}</Text>
  
    </View>
  )
}

export default Dadinhos;