import React, { useState } from 'react';
import data from './data.json'; 

const SelectForm = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  
  // Map available brands
  const brands = data.map(item => item.brand);
  
  // Map available models based on brand
  const models = data.find(item => item.brand === selectedBrand)?.models || [];
  
  // Map available generations based on model
  const generations = data
    .find(item => item.brand === selectedBrand)
    ?.models.find(model => model.name === selectedModel)?.generations || [];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(''); // Default
  };
  
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div>
      <label>
        Marka:
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Wybierz markę</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Model:
        <select value={selectedModel} onChange={handleModelChange}>
          <option value="">Wybierz model</option>
          {models.map((model, index) => (
            <option key={index} value={model.name}>{model.name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Generacja:
        <select>
          <option value="">Wybierz generację</option>
          {generations.map((generation, index) => (
            <option key={index} value={generation}>{generation}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectForm;