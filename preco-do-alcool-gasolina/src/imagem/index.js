import { View, Image } from 'react-native';

function Fotinho(){
  return(
    <View>
<Image
          source={{ uri: 'https://images.unsplash.com/photo-1616708299238-cb1ec15f29dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
          style={{ width: 300, height: 300, margin: 16, marginLeft:20}}
        /> 
        </View>
  )}
  
  export default Fotinho;