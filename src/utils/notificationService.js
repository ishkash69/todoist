import messaging from '@react-native-firebase/messaging';
import AcyncStorage from "@react-native-async-storage/async-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { err } from 'react-native-svg/lib/typescript/xml';


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}
const getFcmToken = async() =>{
    let fcmToken = await AsyncStorage.getItem("fcmToken")
    console.log(fcmToken,"old token")
    if(!fcmToken){
        try {
            const fcmToken = await messaging().getToken();
            if(fcmToken){
                console.log(fcmToken,"new token generated")
                await AcyncStorage.setItem("fcmToken",fcmToken)
            }
        } catch (error) {
            console.log(error,"error raised in the fcm token")
            alert("error error error")
        }
    }
}
export const notificationListner = async()=>{
    messaging().onNotificationOpenedApp(remoteMessage =>{
        console.log("notification caused app to open from background state:",remoteMessage.notification)
    });
    messaging().onMessage(async remoteMessage =>{
        console.log("received in foreGround",remoteMessage)
    })
    messaging()
    .getInitialNotification()
    .then(remoteMessage =>{
        if (remoteMessage){
            console.log("Notification caused app to open from quit state:",remoteMessage.notification)
        }
    })
}