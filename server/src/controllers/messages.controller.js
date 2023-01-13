const asyncHandler = require('../middleware/asyncHandler.middleware')
const CreateMessageUseCase = require('../usecases/messages/createMessage-usecase')


// @desc    Create new message
// @route   POST /api/v1/messages/
const add = asyncHandler(async (req, res, next) => {
  const createMessageUseCase = new CreateMessageUseCase()

  const result = await createMessageUseCase.execute(req)

  res.status(201).json({
    success: true,
    msg: 'create new message',
    data: result
  })
})

module.exports = {
  add
}