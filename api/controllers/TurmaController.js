const database = require('../../db/models')


class TurmaController{
        static async pegaTodasAsTurmas(req,res){
            try{
                const todasAsTurmas = await database.Turmas.findAll()
                return res.status(200).json(todasAsTurmas)
            }catch(err){
                console.log('Deu erro !' + err)
                return res.status(500).json(err.message)
            }
        }
    
        static async pegaUmaTurma(req,res){
            const { id } = req.params
            try{
                const umaTurma = await database.Turmas.findOne({ 
                    where: { 
                        id: Number(id)
                           }
                })
                return res.status(200).json(umaTurma)
            }catch(err){
                console.log('Deu erro !' + err)
                return res.status(500).json(err.message)
            }
    
        }
    
        static async criaTurma(req,res){
            const novaTurma = req.body
            try {
                const novaTurmaCriada = await database.Turmas.create(novaTurma)
                return res.status(200).json(novaTurmaCriada)
                
            } catch (err) {
                console.log('Deu erro ! '+ err)
                return res.status(500).json(err.message)
            }
        }
    
        static async atualizaTurma(req,res){
            const { id } = req.params
            const novasInfos = req.body
            try {
                await database.Turmas.update(novasInfos,{
                    where: {
                        id: Number(id)
                    }
                })
                const turmaAtualizada = await database.Turmas.findOne({ where: {
                    id: Number(id)
                }})
                return res.status(200).json(turmaAtualizada)
            } catch (err) {
                console.log('Deu erro !' + err)
                return res.status(500).json(err.message)
            }
        }
    
        static async apagaTurma(req,res){
            const { id } = req.params
            try {
                await database.Turmas.destroy( {where:{
                    id: Number(id)
                }})
                return res.status(200).send(`ID ${id} foi deletado !`)
            } catch (err) {
                console.log('Deu erro ! '+ err)
                return res.status(500).json(err.message)
            }
        }
    }

module.exports = TurmaController