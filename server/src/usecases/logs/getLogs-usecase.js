const logsModel = require('../../db/models/Logs')
const logsRepository = require('../../db/repositories/logs.repository')
const LogsRepository = logsRepository(logsModel)

class GetLogsUseCase {
  constructor () { }
  async execute () {
    const logs = await LogsRepository.get()

    return logs
  }
}

module.exports = GetLogsUseCase