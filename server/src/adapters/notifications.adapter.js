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
    return `${message} sent to SMS channel and to ${user}`
  }
}

class EmailNotification extends NotificationAdapter {
  async send(message, user) {
    return `${message} sent to Email channel and to ${user}`
  }
}

class PushNotification extends NotificationAdapter {
  async send(message, user) {
    return `${message} sent to Push channel and to ${user}`
  }
}

module.exports = {
  NotificationAdapter,
  SmsNotification,
  EmailNotification,
  PushNotification,
}