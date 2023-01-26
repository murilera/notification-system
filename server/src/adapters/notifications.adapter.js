class NotificationAdapter {
  async send(message, user, channel) {
    try {
      // I know that it should be only message, but it's for visual purposes
      return `${message} sent to ${channel} channel and to ${user}`
    } catch (error) {
      console.error(error)
    }
  }
}

class SmsNotification extends NotificationAdapter {
  async send(message, user) {
    return super.send(message, user, 'SMS')
  }
}

class EmailNotification extends NotificationAdapter {
  async send(message, user) {
    return super.send(message, user, 'Email')
  }
}

class PushNotification extends NotificationAdapter {
  async send(message, user) {
    return super.send(message, user, 'Push')
  }
}

module.exports = {
  NotificationAdapter,
  SmsNotification,
  EmailNotification,
  PushNotification,
}