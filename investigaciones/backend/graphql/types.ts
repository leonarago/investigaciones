import { gql } from 'apollo-server-express';
import {tiposUsuario} from '../models/usuario/tipos';

const tiposGlobales = gql`
scalar Date
`;
export const tipos= [tiposGlobales,tiposUsuario];