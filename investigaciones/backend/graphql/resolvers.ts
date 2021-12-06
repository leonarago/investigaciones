import {resolversUsuarios} from '../models/usuario/resolvers';
import {resolversProyectos} from '../models/proyecto/resolvers';
import { resolversAvance } from '../models/avance/resolvers';
import { resolversInscripcion } from '../models/incripciones/resolvers';

export const resolversGlobal = [resolversUsuarios,resolversProyectos,resolversInscripcion,resolversAvance];