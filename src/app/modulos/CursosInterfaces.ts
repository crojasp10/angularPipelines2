import {Integrante} from './IntegrantesInterface'


export interface Curso {
    id: number;
    nombre: string;
    integrantes: Integrante [];
}