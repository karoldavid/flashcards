import React, { Component } from 'react';
import { AsyncStorage, Alert, Platform } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'FLASHCARDS_QUIZ:notification'

function createNotification() {
  return {
    title: 'Flash Cards Quiz Reminder',
    body: 'Do not forget to study today!',
    android: {
      sound: false,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
  clearLocalNotification()
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log(data)
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              // let tomorrow = new Date()
              // tomorrow.setDate(tomorrow.getDate() + 1)
              // tomorrow.setHours(20)
              // tomorrow.setMinutes(0)

              let sendAfterFiveSeconds = Date.now()
              sendAfterFiveSeconds += 5000

              const schedulingOptions = { time: sendAfterFiveSeconds }

              // Notifications.scheduleLocalNotificationAsync(
              //   createNotification(),
              //   {
              //     time: tomorrow,
              //     repeat: 'day',
              //   }
              // )

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                schedulingOptions
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}