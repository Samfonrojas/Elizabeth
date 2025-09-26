import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      if (name && email && message) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Contáctenos</h2>
          <p className="text-gray-600 mt-2">Inicie su consulta y un especialista se pondrá en contacto con usted.</p>
          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea 
                id="message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-black text-white font-bold py-3 px-8 rounded-sm hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
          {status === 'success' && <p className="text-center mt-4 text-green-600">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>}
          {status === 'error' && <p className="text-center mt-4 text-red-600">Por favor, complete todos los campos.</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;