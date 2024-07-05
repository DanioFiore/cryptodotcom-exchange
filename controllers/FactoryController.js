import AppError from '../utils/AppError';
exports.deleteOne = (Model) => (async (req, res, next) => {
    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data) {
        return next(new AppError('No data found with that id', 404));
    }

    res.status(204).json({
        status: 'success',
    });
});

// TODO: have to implement updateOne, createOne, getOne, getAll