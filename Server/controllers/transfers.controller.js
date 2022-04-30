const { Transfer } = require('../models/transfers.model');

const transfer = async (req, res) => {
    try {
        const transfers = await transfer.findOne({ where: { status: 'pending' } });
        res.status(201).json({
            transfers,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    transfer
};
