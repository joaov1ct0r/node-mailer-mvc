import User from '../models/userModel.js';

import nodemailer from 'nodemailer';

let user = {
    async register(req, res) {
        let checkUser = await User.findOne({ email: req.body.email });

        if (checkUser) {
            return res.status(400).send('Usuario ja cadastrado');
        }

        const newUser = new User({
            nome: req.body.nome,
            email: req.body.email
        });

        try {
            const saveUser = await newUser.save();

            res.send(saveUser);
        } catch (error) {
            res.status(400).send(error);
        }
    }
};

export default user;
