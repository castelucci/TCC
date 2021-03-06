const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')
const { campos } = require("../auxiliar/funcoes")

const UserSchema = new Schema({
  status: { type: Boolean, default: true, enum: { values: [true, false], message: 'O valor deve ser boolean' } },
  adm: { type: Boolean, default: false, enum: { values: [true, false], message: 'O valor deve ser boolean' } },
  nome: {
    type: String,
    required: [true, "O Nome é uma informação obrigatoria"],
    match: [/^[A-zÀ-ú0-9 ]+$/, 'O nome só pode conter letras e números']
  },
  email: {
    type: String,
    required: [true, "O email é uma informação obrigatoria"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'email com formado incompleto. Um email deve' +
      'contar com o apelido seguido do @, o provedor de hospedagem e a ' +
      'finalidade(com,edu,org,gov). Exemplo apelido@provedor.org']
  },
  senha: {
    type: String,
    required: [true, "A senha é uma informação obrigatoria"],
    select: false,
  },
}, /*{ versionKey: false },*/, { timestamps: true });

UserSchema.methods = { async compareSenha(senha) { return await bcrypt.compare(senha, this.senha) } }

UserSchema.pre('save', async function (next) {
  this.senha = await bcrypt.hash(this.senha, 6)
  next();
})
UserSchema.pre('findOneAndUpdate', function (next) {
  this.options.runValidators = true;
  campos(Object.keys(this._update), Object.keys(this.schema.obj), next)
  if (this._update.email) { next(new Error('O email não pode ser alterado!')) }
  next();
});

module.exports = model("User", UserSchema);
