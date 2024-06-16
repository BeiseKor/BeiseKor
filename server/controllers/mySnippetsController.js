let snippets = []; // Это массив для хранения сниппетов

exports.getAllUserSnippets = (req, res) => {
    res.send(snippets);
};

exports.getSnippetById = (req, res) => {
    const snippet = snippets.find(s => s.id === parseInt(req.params.id));
    if (!snippet) return res.status(404).send('Snippet not found');
    res.send(snippet);
};

exports.createSnippet = (req, res) => {
    const newSnippet = req.body;
    snippets.push(newSnippet);
    res.status(201).send(newSnippet);
};

exports.updateSnippet = (req, res) => {
    const snippet = snippets.find(s => s.id === parseInt(req.params.id));
    if (!snippet) return res.status(404).send('Snippet not found');
    
    Object.assign(snippet, req.body);
    res.send(snippet);
};

exports.deleteSnippet = (req, res) => {
    const index = snippets.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Snippet not found');
    
    const deletedSnippet = snippets.splice(index, 1);
    res.send(deletedSnippet);
};
