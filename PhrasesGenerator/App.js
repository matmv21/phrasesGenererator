import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Share, TouchableOpacity } from 'react-native';

// import Button from './components/Button';

let phrases = ["Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro.",
  "Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida.",
  "É preciso que as diferenças não diminuam a amizade e que a amizade não diminua as diferenças.",
  "Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás.",
  "Para ter sabedoria, é preciso primeiro pagar o seu preço. Use tudo o que você tem para adquirir o entendimento.",
  "Nós somos apenas simples pessoas movidas pela vingança em nome da justiça. Mas se a vingança é chamada de justiça, então dessa justiça irá nascer ainda mais vingança... E então se torna uma corrente de ódio. Viver com isso, ciente do passado, predizando o futuro, isso que significa conhecer a história. Não podemos evitar, mas sim compreender, que as pessoas nunca entenderão uma as outras.",
  "Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida.",
  "A resposta calma desvia a fúria, mas a palavra ríspida desperta a ira.",
  "A bênção do Senhor é que enriquece; e não traz consigo dores.",
  "Não repreenda o zombador, caso contrário ele o odiará; repreenda o sábio, e ele o amará.",
  "Clame por inteligência e peça entendimento. Pois o Senhor concede sabedoria; de sua boca vêm conhecimento e entendimento.",
  "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
  "Pra quem tem pensamento forte, o impossível é só questão de opinião.",
  "Quem ousou conquistar e saiu pra lutar, chega mais longe!",
  "A arte maior é o jeito de cada um... vivo pra ser feliz não vivo pra ser comum.",
  "A vida me ensinou a nunca desistir. Nem ganhar, nem perder mas procurar evoluir.",
  "O tempo às vezes é alheio à nossa vontade, mas só o que é bom dura tempo o bastante pra se tornar inesquecível.",
  "Hoje estou feliz porque sonhei com você, e amanhã posso chorar por não poder te ver ."];

export default function App() {

  const [phrase, setPhrase] = useState(indice);
  let indice = 0;

  const onNewPhrase = () => {
    indice = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[indice]);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: phrase,
      });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Gerador de Frases</Text>
      <Text style={ styles.textContainer }>{phrase}</Text>

      <TouchableOpacity style={ styles.btn } title='Gerar nova frase' onPress={onNewPhrase}>
        <Text style={styles.textWhite}>GERAR NOVA FRASE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.btn } title='Compartilhar' onPress={onShare}>
        <Text style={styles.textWhite}>COMPARTILHAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 'auto',
    marginBottom: 30,
    width: 350,
    height: 150,
    padding: 10,
    fontSize: 17,
    fontStyle: 'italic',
    backgroundColor: '#ddd',
  },
  btn: {
    marginBottom: 10,
    backgroundColor: '#208789',
    padding: 10,
    borderRadius: 5,
  },
  textWhite: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});
