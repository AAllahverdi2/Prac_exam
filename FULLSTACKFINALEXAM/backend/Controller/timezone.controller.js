const { TimeZone } = require("../Models/timezone");
const TimeZoneController = {
  getAll: async (req, res) => {
    try {
      const target = await TimeZone.find({});
      res.send(target);
    } catch (error) {
      res.send("item is not found");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const zone = await TimeZone.findById(id);
      res.send(zone);
    } catch (error) {
      res.send("item is not found");
    }
  },
  Post: async (req, res) => {
    const { name, desc, price, image } = req.body;
    const NewProduct = new TimeZone({ name, desc, price, image });
    await NewProduct.save()
    res.send(NewProduct);
    try {
    } catch (error) {
      res.send("item is not found");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await TimeZone.findByIdAndDelete(id);
      res.send("deleted");
    } catch (error) {
      res.send("item is not found");
    }
  },
};
module.exports={TimeZoneController}
