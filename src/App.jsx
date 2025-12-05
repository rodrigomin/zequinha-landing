import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// aaa
function App() {

  function arrow(e) {
    const el = e.currentTarget;
    const container = el.closest('.container');
    const p1 = container.querySelector('.p1-text');

    el.classList.toggle('arrow-animation')
    p1.classList.toggle('visible')
  }
  
  
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          console.log('ta na tela')
          e.target.classList.add('subindo')
        } else {
          console.log('nao ta mais na tela')

        }
      });
    }, {
      root: null,      
      threshold: 0.001    
    });
    document.querySelectorAll(".interobs").forEach(el => observer.observe(el))

    return () => {
      observer.disconnect();
    };
  }, []) // sem dependencias, ou seja, ele só checa a montagem e desmontagem do react por isso o "[]" se eu quisesse checar uma mudança em um param especifico eu colocaria ele nesse "[]" //

  return (
    <>
      <div className='main'> 
        <nav className='nav'>
          <div className='nav-left'> 
          <svg fill="#000000" width="44px" height="44px" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" data-iconid="313528" data-svgname="Balance scale left solid"><path d="M 23.523438 5.109375 L 18.28125 7.0761719 C 17.730472 6.4241192 16.918214 6 16 6 C 14.346 6 13 7.346 13 9 C 13 9.021397 13.005411 9.0412083 13.005859 9.0625 L 8 11 L 3 19.75 L 3 20.015625 C 3 22.771625 5.243 25 8 25 C 10.757 25 13 22.771625 13 20.015625 L 13 19.75 L 9.0097656 12.765625 L 13.724609 10.931641 C 14.063182 11.329853 14.498316 11.637435 15 11.816406 L 15 24 L 15 26 L 17 26 L 21 26 L 21 24 L 17 24 L 17 11.816406 C 18.161251 11.402139 19 10.301609 19 9 C 19 8.9812527 18.994485 8.9639792 18.994141 8.9453125 L 23.210938 7.3632812 L 19 14.734375 L 19 15 C 19 17.757 21.243 20 24 20 C 26.757 20 29 17.757 29 15 L 29 14.734375 L 24.509766 6.8769531 L 23.523438 5.109375 z M 16 8 C 16.552 8 17 8.449 17 9 C 17 9.551 16.552 10 16 10 C 15.448 10 15 9.551 15 9 C 15 8.449 15.448 8 16 8 z M 24 10.015625 L 26.277344 14 L 21.722656 14 L 24 10.015625 z M 8 15.03125 L 10.267578 19 L 5.7324219 19 L 8 15.03125 z M 21.185547 16 L 26.814453 16 C 26.400209 17.161642 25.302172 18 24 18 C 22.697828 18 21.599791 17.161642 21.185547 16 z M 5.1796875 21 L 10.820312 21 C 10.41004 22.168969 9.3074181 23.015625 8 23.015625 C 6.6925819 23.015625 5.5899603 22.168969 5.1796875 21 z"></path></svg>
          </div>
          <div className='nav-right'>
            <a className='interactive' href='#contato'> Contato </a>
            <a className='interactive' href='#sobremim'> Sobre Mim </a>
            <a className='interactive' href='#atuacao'> Atuação </a>
          </div>
        </nav>

      <section className='sec1 flex'>
        <div className='left invisble'></div>
        <div className="right flex column">
          <div className='container-sec1 interobs'>
          <h1 class="white-text font-gg"> JUIZ ARBITRAL</h1>
          <h2 class="white-text font-g"> José Ítalo Bonini</h2>
          <div className='socialmedia'>
            <a href='https://wa.link/ann0zt'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg></a>

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>

            <a href="mailto:rodrigo.minotic@gmail.com?subject=Entrando%20em%20contato&body=Ol%C3%A1%20Jos%C3%A9%20%C3%8Dtalo"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg></a>

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </div>
          <p class='white-text font-m text-box'> Resolvendo suas disputas de maneira mais ágil possível</p>

          <a href='#saibamais'><button className='button white-text interactive'> Saiba mais </button></a>
          </div>
        </div>
      </section>

      <section className='sec2 flex center column' id='saibamais'>

        <div className='text-sec2-container'>
          <h1 className='white-text flex center'> O que é Justiça Arbitral?</h1>
          <p className='white-text center'> A justiça arbitral é um método extrajudicial para resolver disputas, alternativo ao sistema judiciário tradicional. Funciona por meio de árbitros, que são especialistas na área do conflito, escolhidos pelas partes para analisar a questão e emitir uma decisão chamada sentença arbitral. Essa decisão tem validade legal e é vinculante, sendo executável como uma sentença judicial. </p>
        </div>

        <div className='flex column center last-el interobs'>
          <div className='container flex column'> <div className='flex row'><p class='text-container'> Contato prévio </p> <div className='right-arrow center' onClick={(e) => arrow(e)}> <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 30.727 30.727" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path> </g> </g></svg></div></div> <p className='p1-text'>  O processo arbitral geralmente se inicia com base em uma cláusula contratual onde as partes concordam em usar a arbitragem para resolver eventuais conflitos. </p></div>
          <div className='container flex column'> <div className='flex row'><p class='text-container'> Escolha do árbitro </p> <div className='right-arrow center' onClick={(e) => arrow(e)}> <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 30.727 30.727" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path> </g> </g></svg></div> </div> <p className='p1-text'>  As partes escolhem um ou mais árbitros, que podem ser especialistas na área do conflito, como direito imobiliário ou de contratos.</p></div> 
          <div className='container flex column'> <div className='flex row'><p class='text-container'> Procedimento </p> <div className='right-arrow center' onClick={(e) => arrow(e)}> <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 30.727 30.727" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path> </g> </g></svg></div></div> <p className='p1-text'>  A câmara arbitral, que é uma instituição privada, administra o procedimento. As partes precisam respeitar o contraditório e a lei de arbitragem brasileira, conforme a Lei nº 9.307/1996.</p></div>
          <div className='container flex column'> <div className='flex row'><p class='text-container'> Sentença </p> <div className='right-arrow center' onClick={(e) => arrow(e)}> <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 30.727 30.727" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path> </g> </g></svg></div></div> <p className='p1-text'> O árbitro emite uma sentença fundamentada, que é a decisão final do processo. Essa sentença tem o mesmo efeito de uma decisão judicial e é um título executivo. </p></div>
        </div>
      </section>

      <section className='sec3 flex' id='sobremim'>
        <div className='left flex column sobre-mim'>
          <h1 className='text-gg interobs'> Sobre Mim </h1>
          <div className='flex center'>
            <div className='text-break-sobre'>
              <p className='interobs'> Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
          </div>
        </div>
        <div className='right flex center'>
        <div className='zeca' alt='nao carrega'></div>
        </div>
      </section>

      <section className='sec4 flex column' id='atuacao'>
        <h1 className='text-gg'> Área de Atuação </h1>
        <p> Eu trabalho atuando na resolução de conflitos por meio da justiça arbitral, oferecendo um procedimento rápido, seguro e sigiloso para empresas e pessoas físicas. Minha função é analisar os fatos de forma imparcial e garantir decisões juridicamente válidas, proporcionando eficiência e segurança a quem busca alternativas ao Judiciário tradicional.</p>
      
        <div className='flex cards'>
          <div className='card interobs interactive' index='1'>
            <h1 className='text-gg'> Mediação e Conciliação </h1>
            <p> Atuo conduzindo o diálogo entre as partes para facilitar acordos equilibrados, evitando disputas longas e desnecessárias.</p>
          </div>
          <div className='card interobs interactive' index='2'>
            <h1 className='text-gg'> Mediação e Conciliação </h1>
            <p> Atuo conduzindo o diálogo entre as partes para facilitar acordos equilibrados, evitando disputas longas e desnecessárias.</p>
          </div>
          <div className='card interobs interactive' index='3'>
            <h1 className='text-gg'> Mediação e Conciliação </h1>
            <p> Atuo conduzindo o diálogo entre as partes para facilitar acordos equilibrados, evitando disputas longas e desnecessárias.</p>
          </div>
        </div>
      </section>

      <footer className='flex' id='contato'>
        <div className='pt-1 white-text '>
          <h1 className='text-gg'> JOSÉ ÍTALO BONINI </h1>

          <div className='back-to-top flex column'>

          <div className='flex row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg> 
            <a href='#sobremim'><p className='white-text'> Quem sou eu? </p></a>
          </div>

          <div className='flex row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
            </svg>
            <a href='#saibamais' ><p className='white-text'>Saiba mais</p></a>
          </div>

          <div className='flex row'>
            <svg fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-39.26 -39.26 471.12 471.12" xml:space="preserve" stroke="#ffffff" stroke-width="0.003925980000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M390.943,214.238l-54.885-113.196c7.24,2.133,23.467,7.758,24.824,7.758c4.396,0,8.469-2.651,10.214-7.046 c2.133-5.624-0.646-11.895-6.271-14.093c-36.331-13.899-83.2-23.014-133.042-25.859c-3.297-11.96-12.606-21.527-24.436-25.212 V10.925C207.347,4.913,202.498,0,196.422,0c-6.077,0-10.99,4.848-10.99,10.925v25.729c-11.766,3.685-20.945,13.188-24.242,25.083 c-49.972,2.844-97.034,11.895-133.236,25.859c-5.624,2.133-8.404,8.469-6.271,14.093c1.681,4.331,5.818,6.982,10.214,6.982 c1.293,0,17.519-5.56,24.824-7.758L1.189,215.596c-0.065,0.129-1.099,5.301-1.099,5.43c1.939,40.016,34.78,71.37,74.861,71.37 c39.499,0,71.887-30.384,74.731-69.56c0.129-0.776-0.711-7.24-1.552-8.469L89.302,93.026c22.562-4.655,47.063-7.822,72.533-9.244 c3.814,10.925,12.541,19.459,23.596,22.949v216.954h-46.739c-3.297,0-6.465,1.552-8.598,4.073l-37.43,47.127 c-2.651,3.232-3.103,7.758-1.228,11.507c1.875,3.814,5.624,6.206,9.826,6.206h190.255c0.065,0,0.065,0,0.065,0 c6.012,0,10.925-4.849,10.925-10.925c0-3.038-1.228-5.818-3.232-7.822l-36.719-46.287c-2.069-2.65-5.236-4.073-8.598-4.073 h-46.675V106.602c11.119-3.491,19.911-12.024,23.725-23.014c25.341,1.487,49.842,4.655,72.404,9.244l-59.41,122.634 c-0.065,0.129-1.099,5.301-1.099,5.43c1.939,40.016,34.78,71.37,74.861,71.37c39.499,0,71.887-30.384,74.731-69.56 C392.624,221.996,391.783,215.467,390.943,214.238z M74.951,270.545c-24.501,0-45.188-16.549-51.329-39.305h102.594 C120.203,253.996,99.452,270.545,74.951,270.545z M121.561,209.39H28.406l46.61-96.065L121.561,209.39z M248.785,345.341 l20.17,25.471H123.824l20.17-25.471H248.785z M196.422,86.626c-8.275,0-14.998-6.723-14.998-14.998 c0-8.275,6.723-14.998,14.998-14.998c8.275,0,14.998,6.723,14.998,14.998C211.42,79.903,204.696,86.626,196.422,86.626z M317.763,113.325l46.61,96.065h-93.22L317.763,113.325z M317.763,270.545c-24.501,0-45.188-16.549-51.329-39.305h102.594 C362.951,253.996,342.264,270.545,317.763,270.545z"></path> </g> </g> </g></svg>
            <a href='#atuacao'><p className='white-text'> Atuação </p></a>
          </div>


          </div>

          <div className='socialmedia'>
            <a href='https://wa.link/ann0zt'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg></a>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </div>

        </div>
        <div className='pt-2'></div>
        <div className='pt-3'>
          <div className='pt-3-container'>
            <p className='white-text'>
                Copyright Ⓒ 2025 por José Ítalo Bonini
              Todos os direitos reservados. Nenhum conteúdo deste site — incluindo textos, imagens, gráficos, documentos, artigos, pareceres jurídicos ou qualquer outro material — pode ser reproduzido, distribuído, transmitido, exibido, publicado ou utilizado de qualquer forma sem autorização prévia e por escrito do detentor dos direitos autorais, exceto nos casos permitidos pela legislação aplicável.
              Para solicitações, permissões ou informações adicionais, entre em contato pelo e-mail: jitalobonini@gmail.com.
            </p>
          </div>
        </div>

      </footer>

      </div>
      
    </>
  )
}

export default App
