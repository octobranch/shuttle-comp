import React from 'react';
import { Helmet } from 'react-helmet';
import TransportationComparison from '@/components/TransportationComparison';

function App() {
  return (
    <>
      <Helmet>
        <title>Transportation Brand Comparison Tool - Compare Prices & Reviews</title>
        <meta name="description" content="Compare private transportation brands side-by-side. Analyze prices, vehicle types, and customer reviews to make informed decisions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <TransportationComparison />
      </div>
    </>
  );
}

export default App;
