import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,tipo,link}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={tipo}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
        {
            "id": 7,
            "tipo": "Veneno",
            "first_name": "Munck",
            "avatar": "https://images.gameinfo.io/pokemon/256/p89f42.png"
        },
        {
            "id": 8,
            "tipo": "Eletrico",
            "first_name": "Pikachu",
            "avatar": "https://e1.pngegg.com/pngimages/8/546/png-clipart-pikachu-render-pokemon-pikachu.png"
        },
        {
            "id": 9,
            "tipo": "Fogo",
            "first_name": "Charizard",
            "avatar": "https://toppng.com/uploads/preview/charizard-png-transparent-image-charizard-transparent-11563264969thpxgh3xbb.png"
        },
        {
            "id": 10,
            "tipo": "Planta",
            "first_name": "Bulbasaur",
            "avatar": "https://w7.pngwing.com/pngs/773/1024/png-transparent-pikachu-pokemon-go-pokemon-x-and-y-venusaur-bulbasaur-bulbasaur-vertebrate-fauna-cartoon.png"
        },
        {
            "id": 11,
            "tipo": "Lutador",
            "first_name": "Machamp",
            "avatar": "https://e7.pngegg.com/pngimages/744/168/png-clipart-pokken-tournament-pikachu-machamp-pokemon-go-pikachu-game-nintendo-thumbnail.png"
        },
        {
            "id": 12,
            "tipo": "Água/Gelo",
            "first_name": "Lapras",
            "avatar": "https://cdn.imgbin.com/10/25/3/imgbin-shark-sylveon-pok-mon-milotic-lapras-shark-9mqZxDm64Y2GYXuUKz939spCe.jpg"
        }
    ];



//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              tipo={item.tipo}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    backgroundColor: "#a1c2c2",
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    borderRadius: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#108183'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    fontWeight: "bold",
    margin: 20,
    backgroundColor: "#cffef3",
    borderRadius: 35,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

