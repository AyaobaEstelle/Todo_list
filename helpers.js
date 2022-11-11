function failure(error) {
  return Result.fail(error)
}
function success(data) {
  return Result.ok(data)
}

class Result {
  isSuccess = false
  code
  pipe(res, successCode) {
    if (this.isSuccess) {
      res.status(successCode || this.code || 200)
      res.json({ message: 'success', data: this.data })
    } else {
      let code = this.code
      switch (this.error.constructor.name) {
        case 'DocumentNotFoundError': {
          code = 404
          break
        }

        case 'CastError': {
          code = 500
          break
        }

        default: {
          code = this.code || 400
          break
        }
      }

      res.status(code)
      res.json({ message: 'error', error: this.error.message })
    }
  }
  static ok(data) {
    return new Success(data)
  }
  static fail(error) {
    return new Failure(error)
  }
}
class Success extends Result {
  constructor(data, code = 200) {
    super()
    this.data = data
    this.isSuccess = true
    this.code = code
  }
}
class Failure extends Result {
  constructor(error, code = 400) {
    super()
    this.error = error
    this.isSuccess = false
    this.code = code
  }
}

module.exports = {
  failure,
  success,
}
