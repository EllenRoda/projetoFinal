export interface Fornecedor
{
    forId?: number
    forNomeFantasia: string
    forRazaoSocial: string
    forCpf: string
    forStatus: string
    forDataCadastro: string | null
    forResponsavel: string

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