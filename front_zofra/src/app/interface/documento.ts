import { Usuarios } from "./usuarios";
export interface Documento {
    idDocumentos?:Number,
    areaD?: String,
    codeD?: String,
    nameD?: String,
    typeD?: String,
    estadoD?: Boolean,
    idUsuarios?: Usuarios
}
