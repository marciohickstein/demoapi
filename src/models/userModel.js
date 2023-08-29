const users = [
    {id: 1, name: 'marcio' },
    {id: 2, name: 'claudio' },
    {id: 3, name: 'leo' },
]

const userModel = {
    getUsers() {
        return users;
    },

    getUser(id) {
        const user = users.find((u) => {
            return u.id === +id;
        })

        return user ? user : null;
    }
}

module.exports = userModel;