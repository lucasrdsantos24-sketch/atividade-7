class UserFactory {
    static create(name, email) {
        return {
            name,
            email
        };
    }
}

module.exports = UserFactory;
