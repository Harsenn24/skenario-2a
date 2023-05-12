const fs = require("fs");

class DeleteData {
  static async todo(req, res) {
    try {
      const { id } = req.params;

      let data_json = fs.readFileSync("todo.json", "utf-8");

      data_json = JSON.parse(data_json);

      let find_data = data_json.find((el) => el.id === +id);

      if (find_data) {
        let show_data = data_json.filter((el) => el.id !== +id);

        const parse_json = JSON.stringify(show_data, null, 2);

        fs.writeFileSync("todo.json", parse_json, "utf-8");

        res.status(200).json("data has been deleted");
      } else {
        throw "User not found.";
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DeleteData;
