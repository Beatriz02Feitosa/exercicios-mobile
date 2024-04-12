import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Anuncio from '../../components/anuncio'

function Anuncios(){
  return(
    <View>

      <Text style={styles.titulo}>Vagas</Text>

      <View>      
        <ScrollView >
         <Anuncio  titulo='Desenvolvedor Backend' linha1='Salário: R$3000,00' linha2='Descrição: pipipipopopo' linha3='Contato: 40028922'/> 

          <Anuncio  titulo='Engenheiro de Dados' linha1='Salário: R$3020,00' linha2='Descrição: pipipipopopo' linha3='Contato: 40028922'/> 

         <Anuncio titulo='Desenvolvedor Frontend' linha1='Salário: R$10000,00' linha2='Descrição: pipipipopopo' linha3='Contato: 40028922'/> 
         
         <Anuncio titulo='Estagiário' linha1='Salário: R$20,00' linha2='Descrição: pipipipopopo' linha3='Contato: 40028922'/>
         
         <Anuncio titulo='QA' linha1='Salário: R$800,00' linha2='Descrição: pipipipopopo' linha3='Contato: 40028922'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Anuncios