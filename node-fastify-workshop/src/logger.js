import pino from 'pino'

const pinoPretty = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
}

const createLogger = (config) => pino(
  config.PRETTY_PRINT === 'true' ? pinoPretty : {}
)

export default createLogger
