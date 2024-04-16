const transaction_dataModel = require('../model/transaction_data.model')
const userModel = require('../model/user.model');
const { compare } = require('bcrypt');
const { Op, Sequelize } = require('sequelize');

async function createUser(request, response){
  try {
    const user = await userModel.create(request.body)
    return response.status(200).send({
      error: false,
      message: 'User created',
      data: user
    })
  } catch (error) {
    return response.status(500).send({
      error: true,
      message: 'Error creating user',
      data: error
    })
  }
}

async function createTransaction(request, response) {
  try {
    const new_data = await transaction_dataModel.create(request.body)
    return response.status(202).send({
      error: false,
      message: 'Criado',
      data: new_data
    })
  } catch (error) {
    return response.status(500).send({
      error: true,
      message: 'Erro adicionando data',
      data: error
    })
  }
}

async function readTransaction(request, response) {
  const username = request.params.user;
  const password = request.params.password;

  let falha = false;

  if (!username) {
    falha = true;
  }

  if (!password) {
    falha = true;
  }

  if (falha)
    return response.status(400).json({
      error: true,
      message: 'Invalid request',
      data: null
    })

  let existe = await userModel.findOne({ where: { username: username } });
  if (!existe)
    return response.status(404).send({
      error: true,
      message: "Access denied",
      data: null
    })

  const compared = await compare(password, existe.password)
  if (!compared)
    return response.status(404).send({
      error: true,
      message: "Access denied",
      data: null
    })

  try {
    const transaction_data_info = await transaction_dataModel.findAll({})
    if (transaction_data_info.length == 0)
      return response.status(404).send({
        error: true,
        message: "No data",
        data: null
      })
    return response.status(200).send({
      error: false,
      message: 'Transactions data',
      data: transaction_data_info
    })
  } catch (error) {
    return response.status(500).send({
      error: true,
      message: 'Error retriving data',
      data: error
    })
  }
}

async function deleteTransaction(request, response) {
  const { trans_stamp } = request.body;

  if (!trans_stamp)
    return response.status(400).send({
      error: true,
      message: 'Sem stamp',
      data: null
    })

  try {
    await transaction_dataModel.destroy({ where: { trans_stamp: trans_stamp } })
    return response.status(200).send({
      error: false,
      message: 'Data deleted',
      data: null
    })
  } catch (error) {
    return response.status(400).send({
      error: true,
      message: 'Falha ao deletar data',
      data: error
    })
  }
}

async function deletePastTransaction(request, response){
  try {
    const diaAtual = new Date();
    const diasPassados = new Date(diaAtual);
    diasPassados.setDate(diaAtual.getDate() - 97)
    
    console.log(diasPassados)

    await transaction_dataModel.destroy({
      where: {
        date: {
          [Op.lt]: diasPassados,
        },
      },
    })

    return response.status(200).json({
      error: false,
      message: 'Informação apagada',
      data: null
    })
  } catch (error) {
    return response.status(400).json({
      error: true,
      message: error.message,
      data: error
    })
  }
}

module.exports = {
  createTransaction,
  readTransaction,
  deleteTransaction,
  createUser,
  deletePastTransaction
}
