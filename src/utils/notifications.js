import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert, Platform } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';

export function getNotificationPermission() {
  const { status } = Permissions.getAsync(
    Permissions.NOTIFICATIONS
  )
  if (status !== 'granted') {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
  }
}

export function setNotification() {
  const localnotification = {
    title: 'Example Title!',
    body: 'This is the body text of the local notification',
    android: {
      sound: true,
    }
  }
  let sendAfterFiveSeconds = Date.now()
  sendAfterFiveSeconds += 5000

   const schedulingOptions = { time: sendAfterFiveSeconds }
   Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    )
}

export function listenForNotifications () {
  Notifications.addListener(notification => {
  if (notification.origin === 'received') {
    Alert.alert(notification.title, notification.body)
   }
 })
}

