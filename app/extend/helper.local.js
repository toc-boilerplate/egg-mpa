const Constant = {
  EVENT_WEBPACK_BUILD_STATE: 'webpack_build_state',
  EVENT_WEBPACK_READ_FILE_MEMORY: 'webpack_read_file_memory',
  EVENT_WEBPACK_READ_FILE_MEMORY_CONTENT: 'webpack_read_file_memory_content',
  EVENT_WEBPACK_OPEN_BROWSER: 'webpack_open_browser',
}

class FileSystem {
  constructor(app) {
    this.app = app
  }

  readWebpackMemoryFile(filePath, fileName, target = 'node') {
    return new Promise(resolve => {
      this.app.messenger.sendToAgent(Constant.EVENT_WEBPACK_READ_FILE_MEMORY, {
        filePath,
        fileName,
        target,
      })
      this.app.messenger.on(
        Constant.EVENT_WEBPACK_READ_FILE_MEMORY_CONTENT,
        data => {
          if (filePath === data.filePath) {
            resolve(data.fileContent)
          }
        }
      )
    })
  }
}

exports.getFileSystem = function getFileSystem(app) {
  return new FileSystem(app)
}
