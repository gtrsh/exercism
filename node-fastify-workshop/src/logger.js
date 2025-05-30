import pino from 'pino'

const pinoPretty = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
}

const createLogger = () => pino()

export default createLogger
