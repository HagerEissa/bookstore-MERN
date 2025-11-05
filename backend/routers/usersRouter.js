const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/authrtizationMiddelware');




//for users
//get all users
//http://localhost:3000/api/v1/users
router.get('/',authMiddleware,isAdmin,async(req,res)=>{
    const allUsers =await userService.getAllUsers();
    res.send(allUsers)
    // console.log(allUsers);
    
})

//profile
//get  /users/me
router.get('/me',authMiddleware,async(req,res)=>{
    const user =await userService.getUserById(req.user.id);
    // console.log('=====> ',user)
    if(!user){
        res.status(404).send('not found')
        return
    }
    res.json({userId:user._id,
        username:user.name,
        email:user.email,
    })
})


//get one user by id
router.get('/:id',authMiddleware,isAdmin,async(req,res)=>{
let id = req.params.id;
    // console.log(id);
    if(!id){
        res.status(404).send('not found')
        return
    }
    const myUser =await userService.getUserById(id);
    if(!myUser){
        res.status(404).send('not found')
        return
    }
    res.send(myUser)
})






router.post('/',async(req,res)=>{
    let newUser = req.body;
    const createdUser =await userService.addUser(newUser);
    res.send(createdUser)
})

router.put('/:id',authMiddleware,isAdmin,async(req,res)=>{
let id = req.params.id
    let updates = req.body;
    console.log(id);
    const updatedUser =await userService.updateUser(id,updates)
    res.send(updatedUser)
})
// `PATCH /users/:id/role` (update user role; admins only; body: `{ "role": "admin" }`)
router.patch('/:id/role',authMiddleware,isAdmin,async(req,res)=>{
let id = req.params.id
     const { role_id } = req.body;
    console.log(id);
    const updatedUser =await userService.updateUser(id,{ role_id })
    res.send(updatedUser)
})



//delete one user by id
router.delete('/:id',authMiddleware,isAdmin,async(req,res)=>{
let id = req.params.id;
    // console.log(id);
    if(!id){
        res.status(404).send('not found')
        return
    }
    const myUser =await userService.deleteUserById(id);
    if(!myUser){
        res.status(404).send('not found')
        return
    }
    res.send(myUser)
})

module.exports = router;