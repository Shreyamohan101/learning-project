const validation = require('validator');

const validateSignUpData = (req) => {
    const { FirstName, LastName, email, password } = req.body;

    if (!FirstName || !LastName || !email || !password) {
        throw new Error("Please enter required information");
    } else if (FirstName.length < 2 || FirstName.length > 30) {
        throw new Error("First Name must be between 2 and 30 characters");
    } else if (LastName.length < 2 || LastName.length > 30) {
        throw new Error("Last Name must be between 2 and 30 characters");
    } else if (!validation.isEmail(email)) {
        throw new Error("Please enter a valid email");
    } else if (password.length < 8 || !validation.isStrongPassword(password)) {
        throw new Error("Enter a strong password");
    }
}

module.exports = {
    validateSignUpData
};
