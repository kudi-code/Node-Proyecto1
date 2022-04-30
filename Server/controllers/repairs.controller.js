const { Repair } = require('../models/repairs.model');

const transfer = async (req, res) => {
    try {
        const repairs = await Repair.findOne({ where: { status: 'pending' } });
        res.status(201).json({
            repairs,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    transfer
};
