const fs = require("fs");

class Update {
  static async todo(req, res) {
    try {
      const { id } = req.params;

      const { update_todo } = req.body;

      let data_json = fs.readFileSync("todo.json", "utf-8");

      data_json = JSON.parse(data_json);

      let find_index = data_json.findIndex((el) => el.id === +id);

      if (find_index !== -1) {
        data_json[find_index].task = update_todo;

        const parse_json = JSON.stringify(data_json, null, 2);

        fs.writeFileSync("todo.json", parse_json, "utf-8");

        res.status(200).json(data_json[find_index]);
      } else {
        throw "data not found.";
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Update;
