import { gql } from 'apollo-server-express';
import {tiposUsuario} from '../models/usuario/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';
import {tiposAvance}  from '../models/avance/tipos';
import {tiposInscripcion} from '../models/incripciones/tipos';

const tiposGlobales = gql`
scalar Date
`;
export const tipos= [tiposGlobales,tiposUsuario,tiposProyecto,tiposAvance,tiposInscripcion];