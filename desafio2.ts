
enum Trabalho {
    Analista,
    Jornalista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Paula',
    idade: 49,
    profissao: Trabalho.Analista
};

let pessoa2: Humano = {
    nome: 'Pamela',
    idade: 24,
    profissao: Trabalho.Jornalista
};

let pessoa3: Humano = {
    nome: 'Vanessa',
    idade: 22,
    profissao: Trabalho.Analista
};
