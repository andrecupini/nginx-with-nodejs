const { geradorNome } = require('gerador-nome');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.get = async (req, res, next) => {
    const newPeople = await prisma.people.create({
        data: {
            name: geradorNome()
        },
    })
    const people = await prisma.people.findMany()
    res.render('home', { people: people });
    //res.status(200).send('Requisição recebida com sucesso!');
};
