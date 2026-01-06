'use client';

import React from 'react';
import Image from 'next/image';

export default function HomeView() {
  return (
    <div className="home-view">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Dra. Mariana Romão</h1>
            <p className="hero-subtitle">Cuidando da sua saúde com dedicação e profissionalismo</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="profile-placeholder">
                <span>Foto da Dra. Mariana</span>
              </div>
            </div>
            <div className="about-content">
              <h2>Sobre a Dra. Mariana Romão</h2>
              <p>
                Com anos de experiência e dedicação à medicina, a Dra. Mariana Romão 
                oferece atendimento humanizado e de excelência para todos os seus pacientes.
              </p>
              <p>
                Formada pelas melhores instituições e em constante atualização, 
                sua missão é proporcionar cuidados médicos de qualidade, sempre 
                priorizando o bem-estar e a saúde integral de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🩺</div>
              <h3>Consultas Médicas</h3>
              <p>Atendimento personalizado e completo para diagnóstico e tratamento.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💊</div>
              <h3>Acompanhamento</h3>
              <p>Monitoramento contínuo da sua saúde e bem-estar.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Exames Preventivos</h3>
              <p>Prevenção e detecção precoce de doenças.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">❤️</div>
              <h3>Cuidado Integral</h3>
              <p>Abordagem holística da sua saúde física e mental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Agende sua consulta</h2>
          <p>Entre em contato e cuide da sua saúde com quem entende do assunto.</p>
        </div>
      </section>
    </div>
  );
}
