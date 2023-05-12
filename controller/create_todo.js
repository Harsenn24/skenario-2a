const fs = require("fs");

class Create {
  static async todo(req, res) {
    try {
      const { task } = req.body;

      let data_json = fs.readFileSync("todo.json", "utf-8");

      data_json = JSON.parse(data_json);
      
      let id = 0;
      
      if (data_json.length === 0) {
        id = 1;
      } else {
        id = data_json[data_json.length - 1].id + 1;
      }


      let new_data = {
        id,
        task,
      };

      data_json.push(new_data);

      const parse_json = JSON.stringify(data_json, null, 2);

      fs.writeFileSync("todo.json", parse_json, "utf-8");

      res.status(200).json(data_json);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Create;
