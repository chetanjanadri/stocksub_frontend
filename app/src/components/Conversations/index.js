import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const ConversationTile = ({item}) => {
  return (
    <TouchableOpacity style={styles.tileContainer} onPress={() => alert("hi")}>
      <Image
        style={styles.photoContainer}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{item.displayName}</Text>
        <Text style={styles.detailsText}>{item.mailId}</Text>
      </View>
    </TouchableOpacity>
  );
};
class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const friends = [
      {profileURL: '', displayName: 'Raviadfaddfadfaefadfaeefadfaeefaeaeaeeaafeveaeaeeaefa', mailId: 'afjaeif1@fa.com'},
      {profileURL: '', displayName: 'Raviafefef', mailId: 'afjaeif2@fa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@3fa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@rfa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@ffa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@f6a.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@fa3.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@fa2.com'},
      {profileURL: '', displayName: 'Raviadfaddfadfadfaeefaeaeaeeaafeveaeaeeaefa', mailId: 'afjaeif1@fa.com'},
      {profileURL: '', displayName: 'Raviafefafeafeef', mailId: 'afjaefaeiafaef2@fa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeafivaf@3fa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaedavavvvif@rfa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaefafeieeef@ffa.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaevaif@vvvf6a.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@vavfvvva3.com'},
      {profileURL: '', displayName: 'Ravi', mailId: 'afjaeif@22e2wwwwefa2.com'},
    ];
    const renderItem = ({item}) => <ConversationTile item={item} />;
    return (
      <View style={styles.Conversations}>
        <FlatList
          data={friends}
          renderItem={renderItem}
          keyExtractor={(item) => item.mailId}
        />
      </View>
    );
  }
}

export default Conversations;
