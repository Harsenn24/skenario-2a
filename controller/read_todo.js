const fs = require("fs");

class Read {
  static async todo(req, res) {
    try {

      let data_json = fs.readFileSync("todo.json", "utf-8");

      data_json = JSON.parse(data_json)

      res.status(200).json(data_json);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Read;
