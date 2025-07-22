export interface Cliente
{
    id?: number
    nome: string
    cpfCnpj: string
    dataNascimento: string
    status: string
    estadoCivil: string
    profissao: string

    conCelular: string
    conTelefoneComercial: string
    conEmail: string

    endRua: string
    endNumero: string
    endCidade: string
    endBairro: string
    endCep: string
    endEstado: string
    endPais: string
    endComplemento: string
    endTipoResidencia: string
}