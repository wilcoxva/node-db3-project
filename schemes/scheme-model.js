const db = require("../data/config")

function find() {
    return db("schemes")
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db("schemes")
        .leftJoin("steps", "steps.scheme_id", "schemes.id")
        .where("scheme_id", id)
        .select("steps.id", "steps.instructions")
}

function add(scheme) {
    return db("schemes")
        .where("scheme_name")
        .insert(scheme)
}

function update(changes, id) {
    return db("schemes")
        .select(id)
        .where("scheme_name")
        .update(changes)

        
}

function remove(id) {
    return db("schemes")
        .where(id)
        .delete()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}