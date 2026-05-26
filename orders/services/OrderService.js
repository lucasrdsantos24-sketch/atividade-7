class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    createOrder(data) {
        return this.orderRepository.save(data);
    }
}

module.exports = OrderService;
