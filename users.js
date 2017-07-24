const bcrypt = require('bcrypt')

module.exports = [
  {
    email: "stankybob@aol.com",
    password: bcrypt.hashSync("eyeheartdumps123", 8)
  },
  {
    email: "stinkypete@yahoo.com",
    password: bcrypt.hashSync("Idontwash2000", 8)
  },
  {
    email: "nastynick84@gmail.com",
    password: bcrypt.hashSync("DumpsterLove700", 8)
  }
]
