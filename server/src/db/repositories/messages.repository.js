const messagesRepository = (MessagesModel) => {
  /**
   * Create a new message
   * @param {String} message The text of the message
   * @param {String} category The category of the message
   * @returns {Object} The document of the new message from Mongo
   */
  const create = async (message, category) => {
    const newLog = new MessagesModel({
      createdat: Date.now(),
      message,
      category,
    });

    const result = await newLog.save();

    return result;
  };

  /**
   * Get messages
   * @returns {Object} The document of the message from Mongo
   */
  const get = async () => {
    const result = await MessagesModel.find({});

    return result;
  };

  return {
    create,
    get
  }
}

module.exports = messagesRepository