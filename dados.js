let dados = [
    {
        profissao: "Desenvolvedor de Software",
        anosExtincao: 20,
        descricao: "A profissão de desenvolvedor continua em alta, mas com a automação, algumas áreas podem ser afetadas.",
        dicasCursos: [
            "Escola Inteligência Artificial da Alura: Cursos sobre IA para Programação são ideais para se manter atualizado com as últimas tecnologias e tendências.",
            "Escola Programação da Alura: Aprender Python, Java e outras linguagens é essencial para se adaptar às mudanças e novas demandas no desenvolvimento de software.",
            "Escola DevOps da Alura: Conhecimentos em AWS e Docker ajudam a gerenciar e automatizar processos, mantendo-se competitivo no mercado."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Operador de Caixa",
        anosExtincao: 10,
        descricao: "Com o avanço das tecnologias de autoatendimento, a profissão de operador de caixa pode ser extinta em até 10 anos.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Ideal para aprender sobre Atendimento ao Cliente e adaptar-se a novas funções e tecnologias no setor de serviços.",
            "Escola Data Science da Alura: Conhecimentos em BI e Excel podem ajudar a gerenciar e analisar dados de vendas, abrindo novas oportunidades.",
            "Escola Front-end da Alura: Aprender HTML, CSS e JavaScript pode permitir que operadores de caixa transitem para funções relacionadas à tecnologia e e-commerce."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Operador de Caixa",
        anosExtincao: 10,
        descricao: "Com o avanço das tecnologias de autoatendimento, a profissão de operador de caixa pode ser extinta em até 10 anos.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Uma ótima escolha para aprender métodos ágeis, softskills e liderança, essenciais para se destacar no setor de serviços e vendas.",
            "Escola Data Science da Alura: Ciências de dados e BI podem abrir novas oportunidades no comércio, auxiliando na automação e na análise de vendas.",
            "Escola Front-end da Alura: Conhecimentos em HTML, CSS e JavaScript podem ajudar operadores de caixa a se adaptarem a novas funções digitais no comércio."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Motorista de Táxi/Caminhão",
        anosExtincao: 15,
        descricao: "O desenvolvimento de veículos autônomos pode impactar fortemente essa profissão, eliminando a necessidade de motoristas humanos.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Perfeito para quem quer se reinventar e aplicar métodos ágeis e softskills em áreas como logística e transporte.",
            "Escola DevOps da Alura: Aprender sobre AWS, Azure e infraestrutura como código pode ser o diferencial para atuar na manutenção e gestão de frotas automatizadas.",
            "Escola Mobile da Alura: Conhecimentos em Flutter e Android podem te preparar para o futuro da tecnologia automotiva."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Atendente de Telemarketing",
        anosExtincao: 5,
        descricao: "A evolução dos chatbots e assistentes virtuais tem reduzido a necessidade de atendentes humanos para tarefas repetitivas.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Para desenvolver softskills e se destacar em funções mais qualificadas e de liderança no atendimento ao cliente.",
            "Escola Programação da Alura: Saber programar em Python e Java pode ser útil para trabalhar com automação de processos e atendimento virtual.",
            "Escola Data Science da Alura: Aprender sobre BI e análise de dados pode transformar a maneira de entender o comportamento dos clientes."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Trabalhador de Fábrica (Montagem)",
        anosExtincao: 12,
        descricao: "A robótica e a automação industrial estão substituindo trabalhadores em processos de produção e montagem.",
        dicasCursos: [
            "Escola DevOps da Alura: Cursos em Docker e AWS são essenciais para quem deseja aprender sobre a automação de infraestruturas industriais.",
            "Escola Programação da Alura: Aprender a programar pode te preparar para operar e configurar máquinas automatizadas na indústria.",
            "Escola Data Science da Alura: Analisar dados de produção e otimizar processos industriais pode garantir seu espaço na era da automação."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Carteiro",
        anosExtincao: 15,
        descricao: "O aumento das comunicações digitais e o desenvolvimento de sistemas de entregas automatizadas, como drones, podem reduzir a demanda por carteiros.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Excelente para aprimorar suas habilidades em liderança e gestão e atuar em novas áreas de logística.",
            "Escola DevOps da Alura: Ideal para aprender sobre tecnologias como AWS e automação, que impactarão o setor de logística e entregas.",
            "Escola Data Science da Alura: Compreender dados e otimizar rotas de entrega pode ser um diferencial competitivo na logística moderna."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Agente de Viagens",
        anosExtincao: 7,
        descricao: "As plataformas de reservas online e a automação nas operações de viagens têm substituído a função de agentes de viagem tradicionais.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Um curso ideal para quem quer se adaptar ao novo cenário de turismo e continuar relevante.",
            "Escola UX & Design da Alura: Aprender sobre usabilidade e design pode te ajudar a criar experiências online mais atraentes para os clientes.",
            "Escola Data Science da Alura: A análise de dados pode ajudar a otimizar pacotes de viagem e entender melhor as tendências de mercado."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Contador",
        anosExtincao: 18,
        descricao: "A inteligência artificial e o software de contabilidade automatizado estão transformando a profissão, especialmente em áreas que envolvem tarefas repetitivas.",
        dicasCursos: [
            "Escola Inteligência Artificial da Alura: Cursos sobre IA aplicados à contabilidade podem te preparar para liderar essa transformação.",
            "Escola Programação da Alura: Aprender a programar pode te ajudar a criar automações e se adaptar à nova realidade contábil.",
            "Escola Data Science da Alura: Ciência de dados aplicada ao mundo financeiro pode abrir novas oportunidades em auditorias e consultorias."
        ],
        link: "https://www.alura.com.br"
    },
    {
        profissao: "Jornalista (Cobertura de Notícias Básica)",
        anosExtincao: 12,
        descricao: "Sistemas de inteligência artificial estão começando a gerar notícias automáticas para eventos simples, como esportes ou resultados financeiros.",
        dicasCursos: [
            "Escola UX & Design da Alura: Aprender sobre design e experiência do usuário é essencial para criar conteúdos mais atrativos na era digital.",
            "Escola Data Science da Alura: A capacidade de analisar dados pode ser um grande diferencial no jornalismo investigativo e na criação de reportagens.",
            "Escola Inteligência Artificial da Alura: IA aplicada ao jornalismo pode ser uma oportunidade de liderar a próxima revolução da mídia."
        ],
        link: "https://www.alura.com.br/"
    },
    {
        profissao: "Caixa Bancário",
        anosExtincao: 12,
        descricao: "Com o crescimento dos bancos digitais e serviços bancários automatizados, o papel dos caixas bancários está diminuindo rapidamente.",
        dicasCursos: [
            "Escola DevOps da Alura: Perfeito para aprender sobre segurança digital e infraestrutura em nuvem, essenciais nos bancos do futuro.",
            "Escola Programação da Alura: Aprender a programar é uma ótima maneira de se adaptar à digitalização do setor bancário.",
            "Escola Data Science da Alura: A análise de dados aplicada ao setor financeiro pode te ajudar a transitar para áreas mais analíticas."
        ],
        link: "https://www.alura.com.br/"
    },
    {
        profissao: "Assistente Administrativo",
        anosExtincao: 15,
        descricao: "Ferramentas de automação de tarefas e software de gestão estão reduzindo a necessidade de assistentes para tarefas como agendamento e organização de documentos.",
        dicasCursos: [
            "Escola Inovação & Gestão da Alura: Excelente para desenvolver habilidades de liderança e se destacar em funções mais estratégicas.",
            "Escola DevOps da Alura: Ideal para aprender a operar ferramentas de automação e melhorar processos administrativos.",
            "Escola Data Science da Alura: Aplicar ciência de dados para otimizar rotinas administrativas pode garantir seu lugar no mercado."
        ],
        link: "https://www.alura.com.br"
    }
];

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let campoAnos = parseInt(document.getElementById("campo-anos").value);

    if (!campoPesquisa || isNaN(campoAnos)) {
        section.innerHTML = "Por favor, insira uma profissão e um número válido de anos.";
        return;
    }

    let resultados = "";
    
    for (let dado of dados) {
        let profissao = dado.profissao.toLowerCase();
        
        if (profissao.includes(campoPesquisa)) {
            if (campoAnos >= dado.anosExtincao) {
                resultados += `
                    <div class="item-resultado">
                        <h2>${dado.profissao} - Pode ser extinta em ${dado.anosExtincao} anos</h2>
                        <p>${dado.descricao}</p>
                        <h3>Cursos recomendados:</h3>
                        <ul>
                            ${dado.dicasCursos.map(curso => `<li>${curso}</li>`).join('')}
                        </ul>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                `;
            } else {
                resultados += `<p>A profissão de ${dado.profissao} não está em risco de extinção nos próximos ${campoAnos} anos.</p>`;
            }
        }
    }

    if (!resultados) {
        resultados = "<p>Profissão não encontrada ou sem previsão de extinção.</p>";
    }
    
    section.innerHTML = resultados;
}