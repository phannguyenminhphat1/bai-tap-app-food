const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    let data = await User.findAll();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Lấy danh sách không thành công");
    }
  } catch (error) {
    res.status(500).send("Lỗi BE");
  }
};

const getUserID = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await User.findOne({
      where: {
        user_id: id,
      },
    });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("Không tìm thấy user");
    }
  } catch (error) {
    res.status(200).send("Lỗi BE");
  }
};

const createUser = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;
    let model = { full_name, email, pass_word };
    let data = await User.create(model);
    if (data) {
      res.status(200).send("Thệm người dùng thành công");
    } else {
      res.status(400).send("Thệm người dùng khong thành cộng");
    }
  } catch (error) {
    res.status(500).send("Lỗi BE");
  }
};

const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let dataOne = await User.findOne({ where: { user_id: id } });
    if (dataOne) {
      let { full_name, email, pass_word } = req.body;
      let model = { full_name, email, pass_word };
      let data = await User.update(model, { where: { user_id: id } });
      if (data) {
        res.status(200).send("Cập nhật thành công");
      } else {
        res.status(400).send("Cập nhật thất bại");
      }
    } else {
      res.status(400).send("khong tim thay nguoi dung nay");
    }
  } catch (error) {
    res.status(500).send("Lỗi BE");
  }
};

module.exports = { getUser, createUser, getUserID, updateUser };
