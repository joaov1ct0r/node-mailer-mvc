import User from '../models/userModel';

let user = {
    async register(req, res) {
        let checkUser = await User.findOne({ email: req.body.email });

        if (checkUser) {
            return res.status(400).send('Usuario ja cadastrado');
        }
    }
};
