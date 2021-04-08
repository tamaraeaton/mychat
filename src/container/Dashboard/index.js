import React, {useContext, useLayoutEffect} from 'react';
import { View, Text, Alert } from 'react-native';
import {Store} from '../../context/store' 
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { color } from '../../utility';

const Dashboard = ({navigation}) => {
  const globalState = useContext(Store);
  const { dispatchLoaderAction } = globalState;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcon 
        name="logout" 
        size={36} 
        color={color.WHITE} 
        style={{right:10}}
        onPress={() => 
          Alert.alert(
            "Logout", 
            "Are you sure you want to log out?", [
          {
          text: 'Yes',
          onPress: () =>alert('Logged Out') 
        },
        {
          text: 'No'
        },
      ], 
      { cancelable: false }
        )
    }
        />
      )
    })

  }, [navigation])
  return (
    <View>
        <Text>Dashboard</Text>
    </View>
  )}

export default Dashboard;