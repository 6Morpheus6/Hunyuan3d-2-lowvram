module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull https://github.com/6Morpheus6/Hunyuan3d-2-lowvram prebuilt"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "fs.rm",
    params: {
      path: "app/env"    
    }
//  }, {
//    method: "script.start",
//    params: {
//      uri: "install.js"
//    }
  }]
}
