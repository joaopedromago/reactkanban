import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CardSchema = new Schema({
    titulo: {
        type: String
    },
    descricao: {
        type: String
    }
});