const fs = require("fs");

class ReadById {
  static async todo(req, res) {
    try {
      const { id } = req.params;

      let data_json = fs.readFileSync("todo.json", "utf-8");

      data_json = JSON.parse(data_json);

      let filter_data = data_json.find((el) => el.id === +id);

      if(!filter_data) {
        throw 'data not found'
      }

      res.status(200).json(filter_data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ReadById;
