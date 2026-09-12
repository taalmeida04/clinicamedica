import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarEspecialidades, buscarEspecialidade } from './DAO/especialidade/buscar_especialidade.js'
import { buscarAgendamentos } from './DAO/agendamento/buscar_agendamento.js'
import { buscarMedico,buscarMedicos} from './DAO/medico/buscar_medico.js'
import { buscarConsulta,BuscarConsultas } from './DAO/consulta/buscar_consulta.js'
const app = express()
app.use(express.json())

// Rota Base
app.get('/ola', (req, res) => {
    res.json({ mensagem: 'Ola mundo ' })
})

app.get('/paciente', async (req, res) => {
  let paciente = await buscarPacientes()
 
  res.json(paciente)
})
//especialidades
app.get('/especialidade', async (req, res) => {

    const especialidades = await buscarEspecialidades()

    res.json(especialidades)

})
app.get('/agendamento', async (req, res) => {

    const agendamentos = await buscarAgendamentos()

    res.json(agendamentos)

})


app.get('/medico', async (req, res) => {

    const medicos = await buscarMedicos()

    res.json(medicos)

})
app.get('/consulta', async (req, res) => {

    const consultas = await buscarConsultas()

    res.json(consultas)

})


// Inicialização do Servidor
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
