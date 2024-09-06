import { request, response } from "express";
import Postagem from "../Models/postagemModel.js";
import Postagens from "../Models/postagemModel.js";

export const criarPostagem = async (request, response) => {
    const { id,titulo, conteudo, autor, dataPublicao, image } = request.body;
  
    const novoPostagem = {
      id,
      titulo,
      conteudo,
      autor,
      dataPublicao,
      image,
    };
    try {
      await Postagens.create(novoPostagem);
      response.status(201).json({ message: "Postagem Postado" });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Erro ao cadastrar Postagem" });
    }
  };

  export const buscarPostagemPorId = async (request, response) =>{
    const {id}= request.params 
  
    try {
      const PostagemId = await Postagem.findOne({ where: { id } });
      if (Postagem === null) {
        response.status(404).json({ message: "Postagem não encontrada" });
        return;
      }
      response.status(200).json(PostagemId);
    } catch (error) {
      response.status(500).json({ err: "Erro ao buscar postagem por id" });
      return;
    }
  }
  