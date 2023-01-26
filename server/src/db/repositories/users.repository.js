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
   * Get a user by category subscription
   * @param {String} category The category subscription address of the user
   * @returns {Object} The document of the user from Mongo
   */
  const getByCategory = async (category) => {
    const subscribed = Array.isArray(category) ? category : [category]
    const result = await UsersModel.find({});
    const filtered = result.filter((item) => {
      const category = item.subscribes
      if (category.includes(subscribed)) {
        return item
      }
    })

    return filtered;
  };

  return {
    getByEmail,
    getByCategory
  }
}

module.exports = userRepository