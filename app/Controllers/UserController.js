/* Métodos padrão para cada tipo de verbo do http.*/

/* CRUD */

/* CREATE */
exports.post = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const contato = req.body.contato
    return res.json([name, email,contato]);
    /* Status de retorno com sucesso. */
    /* res.status(201).send('Rota POST!'); */
};

/* READ */
exports.get = (req, res, next) => {
    const result = { name: 'emerson', instagram: 'emersonbrogadev' };
    return res.json(result);
    /* res.status(200).send('Rota GET!'); */
};

/* READ BY ID */
exports.getbyId = (req, res, next) => {
    let id = req.params.id;
    return res.json(id);
    /* res.status(200).send('Rota GET com ID! ${id}'); */
};

/* UPDATE */
exports.put = (req, res, next) => {
    let id = req.params.id;
    return res.json([id]);
    /* res.status(201).send('Rota PUT com ID!" --> ${id}'); */
};

/* DELETE */
exports.delete = (req, res, next) => {
    let id = req.params.id;
    return res.json([id]);
    res.status(200).send('Rota DELETE com ID! --> ${id}');
};