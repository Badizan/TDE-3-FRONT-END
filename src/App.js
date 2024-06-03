import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <h1 className="logo">Site do DJOKOVIC</h1>
          <ul className="nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#career">Carreira</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <img src="https://cdn-magento2-media.head.com/magefan_blog/Novak_Blog_1920x600.jpg" alt="Djokovic Hero" className="hero-image" />
          <h2>Novak Djokovic</h2>
          <p>Seja bem vindo a pagina oficial da lenda Novak Djokovic</p>
          <button className="cta-button">Aprenda Mais</button>
        </section>
        <section id="about" className="section">
          <h2>Sobre</h2>
          <p>Novak Djokovic é um tenista profissional sérvio. É o atual número 1 do ranking mundial de simples da ATP, recordista em Grand Slams, recordista em mais semanas como número 1° do mundo, recordista em Masters 1000, recordista do torneio ATP Finals, recordista em The Year End Number 1°</p>
        </section>
        <section id="career" className="section">
          <h2>Carreira</h2>
          <p>É o único tenista a conquistar cada um dos quatro torneios Grand Slam ao menos 3 vezes, também é o único a vencer por 4 vezes ao menos 3 Grand Slams por temporada (2011, 2015, 2021 e 2023).</p>
        </section>
        <section id="gallery" className="section">
          <h2>Galeria</h2>
          <div className="gallery-images">
            <img src="https://conteudo.imguol.com.br/c/esporte/df/2023/01/29/novak-djokovic-com-o-trofeu-do-australian-open-de-2023-1674994483581_v2_4x3.jpg" alt="Djokovic 1" />
            <img src="https://s2-ge.glbimg.com/x2pObgaEicO53WmxU2ZDe9X-tn0=/0x0:3083x2133/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/B/d/cCBs0HQxaNeK2mgKjomA/2021-06-13t174216z-1966115447-up1eh6d1d6dg2-rtrmadp-3-tennis-frenchopen.jpg" alt="Djokovic 2" />
            <img src="https://s2-ge.glbimg.com/P8zHh64sj7FLviwfZsl2Wq_7KYE=/0x0:2000x1395/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/07/14/2019-07-14t182144z_117474635_rc17093730c0_rtrmadp_3_tennis-wimbledon_2VFYkGm.jpg" alt="Djokovic 3" />
            <img src="https://s2-ge.glbimg.com/7MbYgjz56t5ZtM3-L5UbYsY2qco=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/L/0/z1SQFeSUmwX6R6ybl3HA/2023-09-11t001337z-1626865809-up1ej9b00mn19-rtrmadp-3-tennis-usopen.jpg" alt="Djokovic 4"/>
          </div>
        </section>
        <section id="contact" className="section">
          <h2>Contato</h2>
          <p>Para mais informações, nos chame no email djokovic@gmai.com.</p>
        </section>
      </main>
      <footer>
        <p>&copy; Djokovic oficial Page</p>
      </footer>
    </div>
  );
}

export default App;

