const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: 'MultipleProducts' },
  products = []
) => {
  // Calcula o score de cada produto com base nas preferências e funcionalidades selecionadas pelo usuário
  const scoredProducts = products.map(product => {
    const prefScore = formData.selectedPreferences.filter(pref =>
      product.preferences.includes(pref)
    ).length;
    const featScore = formData.selectedFeatures.filter(feat =>
      product.features.includes(feat)
    ).length;
    return {
      ...product,
      score: prefScore + featScore
    };
  });

  // Filtra apenas os produtos que tenham pelo menos uma correspondência
  const matchingProducts = scoredProducts.filter(product => product.score > 0);

  if (formData.selectedRecommendationType === 'SingleProduct') {
    // Retorna o último produto com maior score (para casos de empate)
    if (matchingProducts.length === 0) {
      return [];
    }
    const maxScore = Math.max(...matchingProducts.map(p => p.score));
    const bestProducts = matchingProducts.filter(p => p.score === maxScore);
    return [bestProducts[bestProducts.length - 1]];
  }

  // Caso o usuário escolha multiple products, retorna todos os produos que atendem aos critérios
  return matchingProducts;
};

export default { getRecommendations };