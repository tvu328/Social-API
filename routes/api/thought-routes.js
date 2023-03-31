const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

  } = require('../../controllers/thought-controller');

router
    .route('/thoughts')
    .get(getAllThought)
    .post(createThought);

    router
    .route('/thoughts/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

    router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction)

    router
    .route('/thoughts/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = router;