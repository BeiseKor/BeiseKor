let comments = []; // Это массив для хранения комментариев

exports.createComment = (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.status(201).send(newComment);
};

exports.getAllComments = (req, res) => {
    res.send(comments);
};

exports.getCommentById = (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('Comment not found');
    res.send(comment);
};

exports.updateCommentById = (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('Comment not found');
    
    Object.assign(comment, req.body);
    res.send(comment);
};

exports.deleteCommentById = (req, res) => {
    const index = comments.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Comment not found');
    
    const deletedComment = comments.splice(index, 1);
    res.send(deletedComment);
};
