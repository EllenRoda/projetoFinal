export interface Cliente
{
    cliId?: number
    cliNome: string
    cliCpf: string
    cliStatus: string
    dataNascimento: string
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