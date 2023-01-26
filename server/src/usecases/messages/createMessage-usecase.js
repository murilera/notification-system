const { SmsNotification, EmailNotification, PushNotification } = require('../../adapters/notifications.adapter')
const messagesModel = require('../../db/models/Messages')
const messagesRepository = require('../../db/repositories/messages.repository')
const logsModel = require('../../db/models/Logs')
const logsRepository = require('../../db/repositories/logs.repository')
const usersModel = require('../../db/models/Users')
const usersRepository = require('../../db/repositories/users.repository')


const MessagesRepository = messagesRepository(messagesModel)
const LogsRepository = logsRepository(logsModel)
const UsersRepository = usersRepository(usersModel)

class createMessageUseCase {
  constructor() { }
  async execute(request) {
    const { message, category } = request.body

    if (!message) {
      throw new Error('Message is required')
    }

    if (!category) {
      throw new Error('Category is required')
    }

    const result = await MessagesRepository.create(
      message,
      category,
    )

    const users = await UsersRepository.getByCategory(category)

    let notification
    users.map(async (v) => {
      if (v.channels.includes('SMS')) {
        const adapter = new SmsNotification()
        notification = await adapter.send(message, v.email)
      }
      if (v.channels.includes('Email')) {
        const adapter = new EmailNotification()
        notification = await adapter.send(message, v.email)
      }
      if (v.channels.includes('Push')) {
        const adapter = new PushNotification()
        notification = await adapter.send(message, v.email)
      }

      await LogsRepository.create(
        v.email,
        notification,
        category
      )
    })

    return { result, notification }
  }
}

module.exports = createMessageUseCase