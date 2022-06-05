const usersController=require('../controllers/users_controllers')

module.exports=(app)=>{
    app.get('/api/users',usersController.all);
      
    app.post('/api/users',usersController.createUser);
      
    app.put('/api/users/:id',usersController.edit)
    app.delete('/api/users/:id',usersController.delete)
    app.get('/api/users/:id',usersController.details)
}


