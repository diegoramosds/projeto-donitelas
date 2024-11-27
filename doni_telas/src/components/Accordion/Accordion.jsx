import Accordion from 'react-bootstrap/Accordion';

function AccordionAbout() {
  return (
    <Accordion bg="dark" data-bs-theme="dark" className='accordion'>
      <h3>Dúvidas frequentes</h3>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Qual valor cobrado nos serviços?</Accordion.Header>
        <Accordion.Body>
        Os valores variam de
         acordo com o tipo de <span className='important-words'>serviço</span> e as 
         <span className='important-words'> necessidades</span>  específicas de cada cliente.
         Cada projeto é único, e por isso, é importante solicitar um <span className='important-words'> orçamento </span> 
          personalizado. Dessa forma, conseguimos
         avaliar todas as exigências e oferecer um preço justo e competitivo que atenda ao seu orçamento.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quanto é cobrado no orçamento?</Accordion.Header>
        <Accordion.Body>
          O orçamento é totalmente <span className='important-words'> gratuito </span>  e sem compromisso. Meu objetivo é que você 
          tenha clareza sobre o que será feito e 
          quanto vai investir, permitindo que tome uma decisão <span className='important-words'> informada </span>  e
          <span className='important-words'> segura</span>.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quanto tempo é levado para finalizar os serviços?</Accordion.Header>
        <Accordion.Body>
          O tempo necessário para concluir o serviço depende da <span className='important-words'> complexidade </span> 
          e das <span className='important-words'> especificidades </span>
          de cada projeto, além da <span className='important-words'> localidade</span>. Em geral, oferecemos uma estimativa durante o orçamento 
          inicial para que você saiba o que esperar e possa se planejar melhor.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Como funciona a parte do pagamento?</Accordion.Header>
        <Accordion.Body>
        Normalmente, o pagamento é dividido em duas etapas: uma parte é recebida no
        <span className='important-words'> início do projeto </span>
          para cobrir materiais e preparação, e o restante é pago 
         ao final, após a <span className='important-words'> conclusão do serviço</span>. 
        Essa divisão garante transparência e segurança para ambas as partes.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Quais locais você trabalha?</Accordion.Header>
        <Accordion.Body>
        Atendo em diversas localidades na <span className='important-words'> região de São Paulo </span> , 
        incluindo cidades próximas como Sorocaba, Cotia, Mairinque, entre várias outras. 
        Se sua cidade não está na lista, <span className='important-words'> entre em contato </span>  para verificar a 
        possibilidade de atendimento e esclarecer dúvidas sobre nossa cobertura.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Porque escolher você?</Accordion.Header>
        <Accordion.Body>
        Com <span className='important-words'> anos de experiência </span>  no mercado, ofereço serviços com 
        <span className='important-words'> alta qualidade </span>  e 
        um <span className='important-words'> padrão de excelência</span>,  
        sempre focado em atender às necessidades de segurança
         e estética dos nossos clientes. Meu compromisso é entregar 
         <span className='important-words'> resultados confiáveis </span> 
         e duradouros, garantindo a satisfação de quem confia em nosso trabalho.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionAbout;