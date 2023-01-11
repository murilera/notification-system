const asyncHandler = require('../middleware/asyncHandler.middleware')
const GetLogsUseCase = require('../usecases/logs/getLogs.useCase')


// @desc    Create new message
// @route   POST /api/v1/messages/
const get = asyncHandler(async (req, res, next) => {
  const getLogsUseCase = new GetLogsUseCase()

  const result = await getLogsUseCase.execute()

  res.status(201).json({
    success: true,
    data: result
  })
})

module.exports = {
  get
}