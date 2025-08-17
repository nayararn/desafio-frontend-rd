import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-start px-8">
      <h1 className="text-3xl font-bold mt-10 mb-4 text-blue-700 border border-blue-700 rounded-[10px] px-3 py-2">Recomendador de Produtos RD Station</h1>
      <p className="text-lg mb-8 text-gray-700">
        Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
      </p>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full grid grid-cols-1 md:grid-cols-2 gap-8 border mx-auto">
        <div className="md:pr-8 border-r">
          <Form setRecommendations={setRecommendations} />
        </div>
        <div className="md:pl-8">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
