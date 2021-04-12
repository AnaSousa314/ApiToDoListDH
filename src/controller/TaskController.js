const {Task} = require('../models')
module.exports = {
  async create(req,res,next){

    try {
    
      let task = await Task.create({...req.body});
  
      return res.status(201).json(task);//201 é para post

    } catch (error) {
      next(error);

      //outra forma
     // throw new Error(error);
    }

  },

  async index(req,res,next){

    try {
      let tasks = await Task.findAll({where:{
        deleted: 0,
        done: 0
      }});
  
      res.status(200).json(tasks);//sempre coloque o status, isso é cobrado em todas as vagas, obrigatório
      
    } catch (error) {
      next(error);
    }

  },

  async getById(req,res,next){

    try {
      let task = await Task.findByPk(req.params.id);
  
      res.send(task);
      
    } catch (error) {
      next(error)
    }
  },

  async updated(req,res,next){
    
    try {
      let id = await Task.findByPk(req.params.id);
  
      let {
        title,
        description,
        done,
        deleted,} = req.body;
  
      let task = await Task.findByPk(id);
  
      task.title = title;
      task.description = description;
      task.done = done;
      task.deleted = deleted;
  
      await task.save();
  
      res.send(task); 
      
    } catch (error) {
      next(error)
    }
    
  },

  async deleted(req,res,next){

    try {
      let id = req.params.id;
  
      let task = await Task.findByPk(id);
  
      task.destroy();
      res.send({message: 'Task excluida!'});
      
    } catch (error) {
      next(error)
    }
  },

  async error(error,req,res,next) {
    //console.log(err);
    res.status(400).json({message: 'Error:'+ error.message})
  }
}