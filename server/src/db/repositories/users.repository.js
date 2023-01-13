const userRepository = (UsersModel) => {
  /**
   * Get a user by email
   * @param {String} email The e-mail address of the user
   * @returns {Object} The document of the user from Mongo
   */
  const getByEmail = async (email) => {
    const result = await UsersModel
      .findOne({
        email: email.toLowerCase(),
      });

    return result;
  };

  /**
   * Get a user by channel subscription
   * @param {String} channel The channel subscription address of the user
   * @returns {Object} The document of the user from Mongo
   */
  const getByChannel = async (channel) => {
    const subscribes = Array.isArray(channel) ? channel : [channel]
    const result = await UsersModel.find({});
    const filtered = result.filter((item) => {
      const category = item.subscribes
      if (category.includes(subscribes)) {
        return item
      }
    })

    return filtered;
  };

  return {
    getByEmail,
    getByChannel
  }
}

module.exports = userRepository