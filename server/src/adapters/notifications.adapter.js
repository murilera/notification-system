const usersModel = require('../db/models/Users')
const usersRepository = require('../db/repositories/users.repository')
const UsersRepository = usersRepository(usersModel)

class NotificationAdapter {
  constructor (message, channel) {
    this.message = message
    this.channel = channel
  }

  async send () {
    try {
      const users = await UsersRepository.getByChannel(this.channel)
      const usersNotificated = users.map(v => v.email)
      return {
        notification: `${this.message} sent to ${this.channel} channel and to ${usersNotificated}`,
        users
      }
    } catch (error) {
      console.error(error)
    }
  }
}

class SmsNotification extends NotificationAdapter {
  async send () {
    const users = await UsersRepository.getByChannel('SMS')
    super.send(this.message, 'SMS')
    return {
      notification: "SMS sent"
    }
  }
}

class EmailNotification extends NotificationAdapter {
  async send () {
    const users = await UsersRepository.getByChannel('Email')
    super.send(this.message, 'Email')
    return {
      notification: "Email sent"
    }
  }
}

class PushNotification extends NotificationAdapter {
  async send () {
    const users = await UsersRepository.getByChannel('Push')
    super.send(this.message, 'Push')
    return {
      notification: "Push sent"
    }
  }
}

module.exports = NotificationAdapter