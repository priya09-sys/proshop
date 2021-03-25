const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Priya',
        email: 'priya@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Darshini',
        email: 'darshini@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

]

module.exports = users