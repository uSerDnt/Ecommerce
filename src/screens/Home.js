import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Buttons from '../components/Buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-reanimated';

const DATA = [
  {
    id: 1,
    name: 'First Item 1',
    images: 'https://img.lovepik.com/element/40027/2204.png_300.png',
    price: 120,
    rating: 4.7,
  },
  {
    id: 2,
    name: 'First Item 2',
    images:
      'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
    price: 120,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'First Item 3',
    images:
      'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
    price: 120,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'First Item 3',
    images:
      'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
    price: 120,
    rating: 4.7,
  },
];
const Home = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 120, width: '90%', marginVertical: 10}}
          source={{
            uri: item.images,
          }}
        />
        <Text
          style={{
            color: Colors.dark,
          }}>
          Product name
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>24.000d</Text>
          <Buttons>
            <Text>Add</Text>
          </Buttons>
        </View>
      </View>
      // <View
      //   style={{
      //     backgroundColor: Colors.white,
      //     borderRadius: 10,
      //     width: Dimensions.get('screen').width / 2,

      //   }}>
      //   <Image
      //     style={{
      //       height: 120,
      //       margin: 20,
      //       width: '100%',
      //     }}
      //     source={{
      //       uri: 'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
      //     }}
      //   />
      //   <Text style={{fontSize: 14, fontWeight: 'bold'}}>Ronto</Text>
      // </View>
    );
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.gray,
          //   marginHorizontal: 16,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            Discover
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <TextInput
            style={{
              backgroundColor: Colors.white,
              borderRadius: 10,
              flex: 1,
              height: 50,
            }}
            placeholder="Find product"
          />
          <View style={{width: 50, marginLeft: 10}}>
            <Buttons
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.primary,
              }}>
              <Icon name="filter" size={30} />
            </Buttons>
          </View>
        </View>
        <Image
          style={{
            height: 150,
            width: '100%',
            borderRadius: 10,
          }}
          source={{
            uri: 'https://media.istockphoto.com/photos/online-shopping-picture-id1385212541?b=1&k=20&m=1385212541&s=170667a&w=0&h=7ZG40aoePy1PtgJzlfKR4UTN_mF1poV6nMEnQb56NCs=',
          }}
        />
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}
          // data={DATA}
          // renderItem={item => renderItem(item)}
          // keyExtractor={item => item.id}
          // numColumns={2}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
