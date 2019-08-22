// Example Database

const users = [
    { id: 1, name: 'Israel', email: 'imoreira@leanwork.com.br'},
    { id: 2, name: 'Lucas', email: 'loliveira@leanwork.com.br'},
    { id: 3, name: 'Leo', email: 'leonardo@leanwork.com.br'},
    { id: 4, name: 'Michel', email: 'michel@leanwork.com.br'},
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