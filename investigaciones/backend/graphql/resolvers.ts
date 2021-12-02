import {resolversUsuarios} from '../models/usuario/resolvers';
import {resolversProyectos} from '../models/proyecto/resolvers';

export const resolversGlobal = [resolversUsuarios,resolversProyectos];