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
    },

    async sendEmail(req, res) {
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        try {
            transport
                .sendMail({
                    from: process.env.EMAIL_USER,
                    to: req.body.email,
                    replyTo: process.env.EMAIL_USER,
                    subject: 'Cadastro realizado com sucesso!',
                    html: '<h1>Parabens!!! seu cadastro foi concluido com sucesso</h1>'
                })
                .then(res => {
                    res.send(res);
                });
        } catch (error) {
            res.status(400).send(error);
        }
    }
};

export default user;
