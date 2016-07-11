// import path from 'path'
// import log4js from 'log4js'

// log4js.configure({
//   appenders: [
//     { type: 'console' },
//     { type: 'file', filename: path.resolve(__dirname, '../../..', 'feedback.log'), category: 'main' },
//     { type: 'file', filename: path.resolve(__dirname, '../../..', 'feedback.log'), category: 'renderer' }
//   ]
// })

// export default {
//   main: log4js.getLogger('main'),
//   renderer: log4js.getLogger('renderer')
// }

const logger = {
  log () {},
  warning () {},
  error () {},
  fatal () {}
}

export default {
  main: logger,
  renderer: logger
}
