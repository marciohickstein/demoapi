const users = [
    {id: 1, name: 'marcio' },
    {id: 2, name: 'claudio' },
    {id: 3, name: 'leo' },
]

function getNextId() {
    let maxId = 0;

    for (let i = 0; i < users.length; i++) {
        const id = users[i].id;

        if (maxId < id) {
            maxId = id;
        }
    }

    return ++maxId;
}

const userModel = {
    getUsers() {
        return users;
    },

    getUser(id) {
        const user = users.find((u) => {
            return u.id === +id;
        })

        return user ? user : null;
    },

    addUser({ name}) {
        if (!name) {
            return null;
        }

        const id = getNextId();
        const newUser = {
            id,
            name
        };

        users.push(newUser);

        return newUser;
    }
}

module.exports = userModel;