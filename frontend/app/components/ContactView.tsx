'use client';

import React, { useState } from 'react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-view">
      <section className="contact-hero">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para cuidar de você. Entre em contato e agende sua consulta.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Como podemos ajudá-lo?"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h3>Endereço</h3>
                  <p>Rua Example, 123<br />Bairro, Cidade - Estado<br />CEP 00000-000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h3>Telefone</h3>
                  <p>(00) 0000-0000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📱</div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>(00) 00000-0000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h3>E-mail</h3>
                  <p>contato@marianaromao.com.br</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
