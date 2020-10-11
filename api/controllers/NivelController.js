const database = require('../../db/models')



class NivelController{
    static async pegaTodosOsNiveis(req,res){
        try{
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        }catch(err){
            console.log('Deu erro !' + err)
            return res.status(500).json(err.message)
        }
    }

    static async pegaUmNivel(req,res){
        const { id } = req.params
        try{
            const umNivel = await database.Nivel.findOne({ 
                where: { 
                    id: Number(id)
                       }
            })
            return res.status(200).json(umNivel)
        }catch(err){
            console.log('Deu erro !' + err)
            return res.status(500).json(err.message)
        }

    }

    static async criaNivel(req,res){
        const novoNivel = req.body
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
            
        } catch (err) {
            console.log('Deu erro ! '+ err)
            return res.status(500).json(err.message)
        }
    }

    static async atualizaNivel(req,res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Niveis.update(novasInfos,{
                where: {
                    id: Number(id)
                }
            })
            const nivelAtualizado = await database.Niveis.findOne({ where: {
                id: Number(id)
            }})
            return res.status(200).json(nivelAtualizado)
        } catch (err) {
            console.log('Deu erro !' + err)
            return res.status(500).json(err.message)
        }
    }

    static async apagaNivel(req,res){
        const { id } = req.params
        try {
            await database.Niveis.destroy( {where:{
                id: Number(id)
            }})
            return res.status(200).send(`ID ${id} foi deletado !`)
        } catch (err) {
            console.log('Deu erro ! '+ err)
            return res.status(500).json(err.message)
        }
    }
}

module.exports = NivelController