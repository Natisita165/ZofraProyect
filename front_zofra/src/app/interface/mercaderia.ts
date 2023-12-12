import { PuntosControl } from "./puntos-control";
import { Usuarios } from "./usuarios";
export interface Mercaderia {
    idMercaderia?: Number,
    dateIn?: String,
    importer?: String,
    nameMerc?: String,
    price?: Number,
    quantity?: Number,
    type?: String,
    idPuntosControl?: PuntosControl,
    idUsuarios?: Usuarios
}
