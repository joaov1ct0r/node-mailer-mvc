import User from '../models/userModel.js';

import nodemailer from 'nodemailer';

const register = async (req, res) => {
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

        if (!saveUser) return res.status(400).send('Falha no cadastramento!');

        res.status(200).send(saveUser);
    } catch (error) {
        throw error;
    }
};

const sendEmail = async (req, res) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        const emailResponse = await transport.sendMail({
            from: process.env.EMAIL_USER,
            to: req.body.email,
            replyTo: process.env.EMAIL_USER,
            subject: 'Cadastro realizado com sucesso!',
            html: '<h1>Parabens!!! seu cadastro foi concluido com sucesso</h1>'
        });

        if (!emailResponse)
            return res.status(400).send('Falha ao enviar o email!');

        res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
        throw error;
    }
};

export { register, sendEmail };
