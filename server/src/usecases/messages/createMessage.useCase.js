const NotificationAdapter = require('../../adapters/notifications.adapter')
const messagesModel = require('../../db/models/Messages')
const messagesRepository = require('../../db/repositories/messages.repository')
const logsModel = require('../../db/models/Logs')
const logsRepository = require('../../db/repositories/logs.repository')

const MessagesRepository = messagesRepository(messagesModel)
const LogsRepository = logsRepository(logsModel)

class createMessageUseCase {
  constructor () { }
  async execute (request) {
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

    const notificationAdapter = new NotificationAdapter(message, category)
    const { notification, users } = await notificationAdapter.send()

    users.map(async (v) => {
      const newLog = await LogsRepository.create(
        v.email,
        notification,
        category
      )
    })

    return { result, notification }
  }
}

module.exports = createMessageUseCase