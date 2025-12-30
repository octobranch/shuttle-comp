import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Users, DollarSign, Star, X, Plus, Check } from 'lucide-react';
import BrandSelector from '@/components/BrandSelector';
import ComparisonCard from '@/components/ComparisonCard';
import { transportationBrands } from '@/data/transportationData';

const TransportationComparison = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showSelector, setShowSelector] = useState(false);

  const addBrand = (brandId) => {
    if (selectedBrands.length < 4 && !selectedBrands.includes(brandId)) {
      setSelectedBrands([...selectedBrands, brandId]);
    }
  };

  const removeBrand = (brandId) => {
    setSelectedBrands(selectedBrands.filter(id => id !== brandId));
  };

  const selectedBrandData = selectedBrands.map(id => 
    transportationBrands.find(brand => brand.id === id)
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Transportation Comparison
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compare private transportation brands side-by-side to find the perfect fit for your needs
          </p>
        </motion.div>

        {/* Add Brand Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={() => setShowSelector(true)}
            disabled={selectedBrands.length >= 4}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Add Brand to Compare
            {selectedBrands.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {selectedBrands.length}/4
              </span>
            )}
          </button>
        </motion.div>

        {/* Comparison Grid */}
        {selectedBrands.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-20"
          >
            <Car className="w-24 h-24 mx-auto mb-6 text-slate-300" />
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">
              No Brands Selected
            </h2>
            <p className="text-slate-500 mb-6">
              Click "Add Brand to Compare" to start comparing transportation options
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`grid gap-6 ${
              selectedBrands.length === 1 
                ? 'grid-cols-1 max-w-md mx-auto' 
                : selectedBrands.length === 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : selectedBrands.length === 3
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {selectedBrandData.map((brand) => (
                <ComparisonCard
                  key={brand.id}
                  brand={brand}
                  onRemove={removeBrand}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Brand Selector Modal */}
        <BrandSelector
          isOpen={showSelector}
          onClose={() => setShowSelector(false)}
          onSelect={addBrand}
          selectedBrands={selectedBrands}
          maxSelections={4}
        />
      </div>
    </div>
  );
};

export default TransportationComparison;
