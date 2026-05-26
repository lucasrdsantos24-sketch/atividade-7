class OrderRepository {
    save(order) {
        return {
            id: 1,
            ...order
        };
    }
}

module.exports = OrderRepository;
