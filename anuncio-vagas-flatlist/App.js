import { View, Text,FlatList, StyleSheet } from 'react-native';
import React, {Component, useState} from 'react'

function Flatzinho(){
  let initial_feed = [
    {id:1, titulo:'Desenvolvedor Backend', linha1: 'R$3000,00', linha2:' pipipipopopo', linha3: 40028922},

  {id:2, titulo:'Engenheiro de Dados', linha1: 'R$3020,00',linha2:'Descrição: pipipipopopo', linha3: 40028922},

{id:3, titulo:'Desenvolvedor Frontend', linha1: 'R$10000,00', linha2:'Descrição: pipipipopopo', linha3: 40028922},

{id:4, titulo:'Estagiário', linha1: 'R$20,00', linha2:' pipipippopo',linha3: 40028922 },

{id:5, titulo:'QA', linha1:'R$800,00', linha2:'pipipipopopo', linha3:'40028922'}  
  ]

  const [feed, setFeed] = useState(initial_feed)
  return(
    <View style = {styles.container}>
    <FlatList
    data={feed}
    keyExtrator = {(item) => item.id}
    renderItem= {({item}) => <Anuncio data={item}/>}
    />
    </View>
  )
}

 const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20
  },
    titulo:{
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginTop: 46,
    fontWeight: 'bold'
  },
  box:{
   backgroundColor: 'brown',
    height: 250,
    width: 315,
    marginLeft: 14,
    alignItems: 'center'
  },

  tituloAnuncio:{
    marginTop:40,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom:20
  },

  textoAnuncio:{
    fontSize: 12,
    color: 'white',
    marginTop: 20
  },


})
export default Flatzinho;

function Anuncio(props) {
  return (
    <View style={styles.container}>
      
        <View style={styles.box}>
          <Text style={styles.tituloAnuncio}>Titulo: {props.data.titulo}</Text>
          <Text style={styles.textoAnuncio}>Salario: {props.data.linha1}</Text>
          <Text style={styles.textoAnuncio}> Descrição: {props.data.linha2}</Text>
          <Text style={styles.textoAnuncio}> Contato: {props.data.linha3}</Text>
        </View>
      
    </View>
  );
}
