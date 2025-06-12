const bcrypt = require("bcrypt");
const User = require("../models/User");
const token = require("../helpers/token");

async function register(login, password) {
    if (!password) {
        throw new Error("Password is empty");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ login, passwordHash });

    return user;
}

// login
async function login(login, password) {
    const user = await User.findOne({ login });

    if (!user) {
        throw new Error("user not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error("Wrong password");
    }

    const token = token({ id: user.id });

    return { token, user };
}

// logout

module.exports = {
    register,
    login,
};
