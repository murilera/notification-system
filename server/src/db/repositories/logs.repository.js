const logsRepository = (LogsModel) => {
  /**
   * Create a new log
   * @param {String} user The user of the log
   * @param {String} message The message of the log
   * @param {String} channel The channel of the log
   * @returns {Object} The document of the new log from Mongo
   */
  const create = async (user, message, channel) => {
    const newLog = new LogsModel({
      createdat: Date.now(),
      user: user.toLowerCase(),
      message,
      channel,
    });

    const result = await newLog.save();

    return result;
  };

  /**
   * Get logs
   * @returns {Object} The document of the log from Mongo
   */
  const get = async () => {
    const result = await LogsModel.find({});

    return result;
  };

  return {
    create,
    get
  }
}

module.exports = logsRepository