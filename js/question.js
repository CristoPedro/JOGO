

const quiz = [
    {
        q:'Quanto é 1804 / 2??',
        options:['902','703','802','500'],
        answer:0
    },
    {
        q:'Qual é a raiz quadrada de 100?',
        options:['78','40','10','11'],
        answer:2
    },
    {
        q:'Quanto é - 1254 + 1002 - 8?',
        options:['-100','-260','100','200'],
        answer:1
    },
    {
        q:'Qual desses valores é divisivel por 3? ',
        options:['147', 'nenhum', '11','100'],
        answer: 0
    },
    {
        q:' Quanto é 22 + 6?',
        options:['99', ' 56', '16','28'],
        answer:3
    },
    {
        q:'Quem é o Pai da Matemática?',
        options:['Pitágoras', ' Carlos Lineu', 'Edward','K.José'],
        answer:0
    },
    {
        q:'Qual é a definição de sucessão?',
        options:['São sequencias de numeros reais e sua ordem.', 'Sequenciais de fibonacci.', 'Simples mente sequencia.','Todos números onde consideramos uma determinada lei de formação.'],
        answer:3
    },
    {
        q:'Qual é a representação correta de uma sucessão abaixo?',
        options:['{a1-1, a2-2, a3-3 , .., an-n, an+1}', 'a1, a2, a3, .., an, an+1}', '{n, n, n, .., n, n+n}','{ba, ba+1, ba-a, .., ba, ba+1}'],
        answer:1
    },
    {
        q:'Em matemática o que significa P.A?',
        options:['Polinómio Antigo', 'Progressão Animétrica', 'Projecção Aritimétrica','Pedro e Armando'],
        answer:2
    },
    {
        q:'O que significa P.G?',
        options:['Progressão Geográfica', 'Pedro Garcia', 'Progressão Geológica','Progressão Geométrica'],
        answer:3
    },
    {
        q:'Como esta classificada uma P.A?',
        options:['crescente , decadente', 'razão , primeiro termo', 'crescente , decrescente, constante','classifica-se em 4'],
        answer:2
    },
    {
        q:'Quanto é 100 x 3000?',
        options:['800.200','700.800','300.000','600.000'],
        answer:2
    },
    {
        q:'Verifique a baixo o quatrublo de 40?',
        options:['2.560.500','2.560.600','2.560.700','2.560.000'],
        answer:3
    },
    {
        q:'Selecione o resultado entre 400 - 125?',
        options:['276','275','175','100'],
        answer:1
    },
    {
        q:'0 * 0 + 100 / 1 * 0?',
        options:['100','10','-10','0'],
        answer:3
    },
    {
        q:'Quanto é 170 - (123)?',
        options:['47','10','49','22'],
        answer:0
    },
    {
        q:'O que diz o 1º Axioma de K.J',
        options:['Se grau(an) < grau(bn) então Un é infinitamente grande','Se grau(an) = grau(bn) é nulo','Seja Un = an/bn, se grau(an) > grau(bn) então Un é infinitamente grande','Seja Un = an/bn, se grau(an) > grau(bn) então Un é infinitésimo'],
        answer:2
    },
    {
        q:'Soma dos n termos da seguinte P.A {10,15,20,25,...,95} é...',
        options:['900','745','525','945'],
        answer:3
    },
    {
        q:'Qual é o objectivo da Aproximação de K.J nos limites de sucessões?',
        options:['Ajudar com ezatidão a resolver os demais problemas de limites','Ajudar com ezatidão e precisão a resolver problemas de P.A','Ajudar a resolver sucessões','Melhorar os casos de Matemática'],
        answer:0
    },
    {
        q:'O que acontece quando temos divisão de duas raizes com o mesmo índice?',
        options:['Multiplicamos as raíz e somamos os radicandos','Mantém-se uma unica raíz e se divide os radicandos','Mantém-se uma unica raíz e subtrai os dividendos','Mantém-se uma unica raíz e se divide os denominadores'],
        answer:1
    },
    {
        q:'Como esta constituida uma potência?',
        options:['Com, a Base e o dividendo','Com, so com expoente','Com, a radical e o radicando','Com, a Base e o expoente'],
        answer:3
    },
    {
        q:'Para que serve o expoente em uma potência?',
        options:['Para elevar a base','Para dividir a base','Para somar a base','Para subtrair a base'],
        answer:0
    },
    {
        q:'Que propriedade é essa em Matemática? [1/2+(20 + 10)(1 + 13)]?',
        options:['Distributiva','Aditiva','nenhuma','Diminuitiva'],
        answer:2
    },
    {
        q:'Qual das definições abaixo esta correta, A Matemática é..',
        options:['A ciência que estuda os valores numericos e suas propriedades tendo em conta o espaço','A ciência que estuda números com a parte decimal','A ciência dos Sábios','A ciência dos números'],
        answer:3
    },
    {
        q:'Quanto é -2-2-1-8+13',
        options:['-26','0','-13','26'],
        answer:1
    },
    {
        q:'Quanto é 1+(-7+16)-15(-10+1)',
        options:['120','111','48','145'],
        answer:3
    },
    {
        q:'x+x é..',
        options:['2x','xx','x2','2'],
        answer:0
    },
    {
        q:'Em Polinómio usamos o famoso método de grelha. Qual é o verdadeiro nome?',
        options:['Método de Rufino','Método de Discarte','Método de Grelha','Método de Polinómio'],
        answer:1
    },
    {
        q:'Quem é K.J para a Matemática',
        options:['Cientísta matemático cujo seu objectivo é criar Métodos e Axiomas para resolução de problemas','Pai da Matemática','Físico e analista de casos','Pai da Fisica que ajudou no desenvolvimento da Matemática'],
        answer:0
    },
    {
        q:'O que são algarismos?',
        options:['São digitos de uma sequencia','São digitos de um número real','São digitos de uma sucessão','São digitos de uma duzia de números'],
        answer:1
    },
    {
        q:'Quanto é 0.5 + 4.3',
        options:['5.5','0.33','4.5','4.8'],
        answer:3
    }
    ,{
        q:'Quais dos números a baixo é um número primo:',
        options:['79','4','16','8'],
        answer:0 
    }
    ,{
        q:'Qual será a saída 1 - (-2) + (-1)',
        options:['2','0','1','-1'],
        answer:0 
    }
    ,{
        q:'Quanto é 25 - 11',
        options:['13','14','12','11'],
        answer:1 
    }
    ,{
        q:'Qual número dividindo por 2 da 30...',
        options:['16','25','30','60'],
        answer:3 
    }
    ,{
        q:'Qual número dividindo por 7 da 4',
        options:['20','39','28','7'],
        answer: 2
    }
    ,{
        q:'1^100',
        options:['1','0','100','111'],
        answer:0 
    }
    ,{
        q:'Qual é a raiz de 2601',
        options:['51','60','não tem raíz exata','120'],
        answer:0 
    }
    ,{
        q:'Qual é a raiz de 25',
        options:['0','5','15','não tem raíz exata'],
        answer: 1
    }
    ,{
        q:'Que desenvolveu este jogo de raciocíneo matemático',
        options:['Pedro Saça Garcia','Pedro Salvador Garcia','Pedrinho Sassa Garcia','Pedro Sassa Garcia'],
        answer: 3 
    }
    ,{
        q:'Quem é o melhor aluno do Águia Branca em Ciencia da computação',
        options:['Pedro','Armando','Calebe','Gervásio'],
        answer: 0
    }
]
