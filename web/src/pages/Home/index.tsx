import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import './Home.css'
import logo from '../../assets/logo.svg';
import imgBannerHome from "../../assets/home_banner_peoples.svg";

const Home = () =>{
    return (
      <div id="page-home">
        <div className="content">
          <header>
            <img src={logo} alt="Ecoleta" />
          </header>
          <div className="content_description">
            <main>
              <h1>Seu marketplace de coleta de resíduos.</h1>
              <p>
                Ajudamos pessoas a encontrem pontos de coleta de forma
                eficiente.
              </p>
              <a href="/cadastro">
                <span>
                  <FiLogIn />
                </span>
                <strong>Cadastre um ponto de coleta</strong>
              </a>
            </main>
            <img
              src={imgBannerHome}
              alt="Imagem de duas pessoas coletando resíduos"
            />
          </div>
        </div>
      </div>
    );
}

export default Home;