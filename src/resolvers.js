// Example Database

const users = [
    { id: 1, name: 'Israel', email: 'a@lean.com.br'},
    { id: 2, name: 'Lucas', email: 'b@lean.com.br'},
    { id: 3, name: 'Leo', email: 'c@lean.com.br'},
    { id: 4, name: 'Michel', email: 'd@lean.com.br'},
]

module.exports = {

    // controllers
    Query:{
        users: () => users,
        user: (context,{ id }) => users.find((x) => x.id == id ),
    },
    Mutation:{
        createUser: (context, { name, email }) => {
            var newId = users.length + 1;
            var newUser = { id: newId, name: name, email: email };
            users.push(newUser);
            return newUser;
        }
    }
};