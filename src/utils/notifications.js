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

function setTiming(time, repeat) {
  return { 
    time,
    repeat
  }
}

export const timing = {
  offset: 1,
  hour: 17
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification({ offset, hour }) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              let notificationDay = new Date()

              notificationDay.setDate(notificationDay.getDate() + offset)
              notificationDay.setHours(hour)
              notificationDay.setMinutes(0,0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                setTiming(notificationDay, 'day')
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}