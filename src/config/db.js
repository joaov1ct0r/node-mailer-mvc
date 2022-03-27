import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const response = await mongoose.connect(process.env.DB_ROUTE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (!response) return console.log('Falha ao se conectar ao mongoose!');

        console.log('Mongoose conectado com sucesso!');
    } catch (error) {
        throw error;
    }
};

export default dbConnection;
