import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fixedNestedItemAdded } from '../../../dataflow/reducers';
import {  IModuloInput, IModuloItemsFormated } from '../interfaces/IModuloItems';
import { ModuloClassService } from '../services/ModuloClassServices';


const dispatch = useDispatch();
const moduloService = new ModuloClassService('Modulo');


export const getAllModulos = async (isAscending?: boolean) => {  
  try {
    const result = await moduloService.getAllModulo(isAscending);
    result.map((item)=> {
      dispatch(fixedNestedItemAdded(item));
    })
  } catch (error) {
    console.log(error)
  }
};

export const createModulos = async (moduloInput: IModuloInput) => {
  const response = await moduloService.addModulo(moduloInput);

  const modulo: IModuloItemsFormated = {
    Id: response.Id,
    Nome: response.Nome,
    Created: response.Created,
    Modified: response.Modified,
    FkCorredorId: response.FkCorredorId,
    Author: response.Author,
    Icone: response.Icone,
    Corredor: response.Corredor,
    ConteudoTema: response.ConteudoTema,
  }
  dispatch(fixedNestedItemAdded(modulo));
}

