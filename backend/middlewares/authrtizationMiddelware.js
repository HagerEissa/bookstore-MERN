// const usersRepo = require('../repository/usersRepo')
const usersRepo = require('../repository/mongoUsersRepo')


exports.isAdmin = async (req, res, next) => {
    try {
        // console.log('==>',req.user); //authMiddleWareاللي جايه من ال 
        if (req.user) {  
            // console.log('hereeeeeeeeeeee= ')
            // const u = req.user.role_id;
            const user =await  usersRepo.getById(req.user.id);
            if (user && user.role_id === 'admin') {
                next();
            } else {
                res.status(403).json({ error: 'Access denied, admin only' });
            }
        } else {
            res.status(401).json({ error: 'Access denied, not authenticated' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};