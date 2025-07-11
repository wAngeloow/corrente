// Canoas
const pontosDeColeta = [
    //Canoas - Roupas
    {
        id: 1,
        nome: 'PAÇO MUNICIPAL (PREFEITURA)',
        causa: 'Roupas',
        cidade: 'Canoas',
        endereco: 'R. Quinze de Janeiro, 11, Centro',
        telefone: '0800 510 1234',
        descricao: 'Atua como central de arrecadação e distribuição, aceitando especialmente agasalhos e cobertores em bom estado durante o inverno.',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.25007739912445!2d-51.17985154631557!3d-29.921884361331866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197aa0ae0eaead%3A0xb277bebe7871e8ab!2sR.%20Quinze%20de%20Janeiro%2C%2011%20-%20Centro%2C%20Canoas%20-%20RS%2C%2092010-300!5e0!3m2!1spt-BR!2sbr!4v1752191349869!5m2!1spt-BR!2sbr',
        imagem: './assets/loading.png',
    },
    {
        id: 2,
        nome: 'SECRETARIA DA ASSISTÊNCIA SOCIAL',
        causa: 'Roupas',
        cidade: 'Canoas',
        endereco: 'Rua Pedro Weingartner, 238, Centro',
        telefone: '(51) 3236-2702',
        descricao: 'Funciona como balcão de recebimento das doações da Campanha do Agasalho e coordena a logística de destinação, triagem e distribuição para famílias vulneráveis.',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.051174226688!2d-51.18409479999998!3d-29.9204289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197aa687ebf05d%3A0xafaca9c1c5f245a0!2sR.%20Pedro%20Weingartner%2C%20238%20-%20Centro%2C%20Canoas%20-%20RS%2C%2092310-100!5e0!3m2!1spt-BR!2sbr!4v1752191435052!5m2!1spt-BR!2sbr',
        imagem: './assets/loading.png',
    },
    {
        id: 3,
        nome: 'DEFESA CIVIL DE CANOAS',
        causa: 'Roupas',
        cidade: 'Canoas',
        endereco: 'Rua Bandeirantes, 450 – Nossa Senhora das Graças',
        telefone: '51 3236.1072',
        descricao: 'Recebe donativos — roupas, cobertores, calçados, alimentos não perecíveis, colchões e itens de higiene — de segunda a sexta, em horários típicos de expediente (geralmente das 8h30 às 17h).',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.8974279822705!2d-51.16992629999998!3d-29.924854999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10bc5a687a83fd5%3A0x5ef940299e541b60!2sDefesa%20Civil!5e0!3m2!1spt-BR!2sbr!4v1752193011684!5m2!1spt-BR!2sbr',
        imagem: './assets/loading.png',
    },

    //Canoas - Alimentos
    {
        id: 4,
        nome: 'EMEF Paulo VI',
        causa: 'Alimentos',
        cidade: 'Canoas',
        endereco: 'Av. Eng. Irineu Carvalho Braga, 2781 - Fátima',
        telefone: '(51) 3060-2577',
        descricao: 'O local participa da coleta de alimentos e itens de apoio em crises, além de distribuir de cestas e marmitas, aberta à comunidade em horários definido',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.277356732211!2d-51.19220999999998!3d-29.94269979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197a8e275067b5%3A0x6fa1204825056c0f!2sEMEF%20Paulo%20VI!5e0!3m2!1spt-BR!2sbr!4v1752192194151!5m2!1spt-BR!2sbr',
        imagem: './assets/loading.png',
    },
    {
        id: 5,
        nome: 'EMEF Max Adolfo Oderich',
        causa: 'Alimentos',
        cidade: 'Canoas',
        endereco: 'R. Profa. Dona Sara, 100 - Harmonia',
        telefone: '(51) 3236-2520',
        descricao: 'Funciona como central de entrega de cestas básicas, alimentos e itens de higiene para pessoas em vulnerabilidade.',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.407600200046!2d-51.22722240000002!3d-29.9101657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519653cac042bf5%3A0x4e82dbd499b28817!2sEMEF%20Max%20Adolfo%20Oderich!5e0!3m2!1spt-BR!2sbr!4v1752191834359!5m2!1spt-BR!2sbr',
        imagem: './assets/loading.png',
    },
    {
        id: 6,
        nome: 'EMEF Rio Grande do Sul',
        causa: 'Alimentos',
        cidade: 'Canoas',
        endereco: 'R. Wenceslau Braz, 35 - Mato Grande',
        telefone: '(51) 3466-1803',
        descricao: 'Atende a comunidade com distribuição de cestas de alimentos, produtos de higiene, água, roupas e cobertores, especialmente durante enchentes.',
        link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.78005062814!2d-51.19309210000001!3d-29.92823369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197abc525ee97f%3A0xc6f3cb5e74ec145c!2sEMEF%20Rio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1752192120619!5m2!1spt-BR!2sbr',
        imagem: './assets/loading.png',
    },

    //Porto Alegre - Roupas
];

// Disponibiliza globalmente
window.pontosDeColeta = pontosDeColeta;
