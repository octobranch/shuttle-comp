export const transportationBrands = [
  {
    id: 'uber',
    name: 'Uber',
    description: 'Global rideshare leader with extensive coverage',
    rating: 4.5,
    totalReviews: 2847563,
    pricing: {
      baseFare: 2.50,
      perMile: 1.75,
      perMinute: 0.35
    },
    vehicleTypes: [
      { name: 'UberX', capacity: 4 },
      { name: 'Comfort', capacity: 4 },
      { name: 'XL', capacity: 6 },
      { name: 'Black', capacity: 4 },
      { name: 'SUV', capacity: 6 }
    ],
    features: [
      'Real-time tracking',
      'Split fare option',
      'Safety features with emergency button',
      'Ride scheduling up to 30 days in advance',
      'In-app tipping',
      'Rewards program'
    ],
    availability: '10,000+ cities worldwide'
  },
  {
    id: 'lyft',
    name: 'Lyft',
    description: 'Customer-focused rideshare with competitive pricing',
    rating: 4.3,
    totalReviews: 1567892,
    pricing: {
      baseFare: 2.00,
      perMile: 1.65,
      perMinute: 0.30
    },
    vehicleTypes: [
      { name: 'Lyft', capacity: 4 },
      { name: 'Shared', capacity: 2 },
      { name: 'XL', capacity: 6 },
      { name: 'Lux', capacity: 4 },
      { name: 'Lux Black XL', capacity: 6 }
    ],
    features: [
      'Women+ Connect feature',
      'Round Up & Donate program',
      'Price lock guarantee',
      'Live ride tracking',
      'Priority pickup locations',
      'Carbon neutral rides'
    ],
    availability: '650+ cities in US and Canada'
  },
  {
    id: 'via',
    name: 'Via',
    description: 'Shared rides focused on efficiency and affordability',
    rating: 4.1,
    totalReviews: 456234,
    pricing: {
      baseFare: 1.50,
      perMile: 1.20,
      perMinute: 0.25
    },
    vehicleTypes: [
      { name: 'Shared Ride', capacity: 2 },
      { name: 'Private Ride', capacity: 4 }
    ],
    features: [
      'Lowest prices through ride sharing',
      'Smart routing algorithm',
      'Corporate partnerships',
      'Monthly pass options',
      'Eco-friendly fleet',
      'Fixed route options'
    ],
    availability: '20+ cities worldwide'
  },
  {
    id: 'gett',
    name: 'Gett',
    description: 'Professional black car and taxi service',
    rating: 4.4,
    totalReviews: 234567,
    pricing: {
      baseFare: 3.50,
      perMile: 2.25,
      perMinute: 0.45
    },
    vehicleTypes: [
      { name: 'Black Car', capacity: 4 },
      { name: 'SUV', capacity: 6 },
      { name: 'Executive', capacity: 4 }
    ],
    features: [
      'Professional licensed drivers',
      'Business account options',
      'No surge pricing',
      'Premium vehicle standards',
      'Corporate billing',
      'Airport specialists'
    ],
    availability: '100+ cities in Europe and US'
  },
  {
    id: 'curb',
    name: 'Curb',
    description: 'Licensed taxi service with app convenience',
    rating: 4.0,
    totalReviews: 567890,
    pricing: {
      baseFare: 3.00,
      perMile: 2.50,
      perMinute: 0.50
    },
    vehicleTypes: [
      { name: 'Taxi', capacity: 4 },
      { name: 'Wheelchair Accessible', capacity: 2 }
    ],
    features: [
      'Licensed taxi drivers',
      'Upfront pricing',
      'Pay with card or cash',
      'Airport queue access',
      'Wheelchair accessible vehicles',
      'Pair & Pay with taxi meter'
    ],
    availability: '65+ US cities'
  },
  {
    id: 'juno',
    name: 'Juno',
    description: 'Driver-friendly rideshare with lower commission',
    rating: 4.2,
    totalReviews: 123456,
    pricing: {
      baseFare: 2.25,
      perMile: 1.70,
      perMinute: 0.32
    },
    vehicleTypes: [
      { name: 'Juno', capacity: 4 },
      { name: 'Juno XL', capacity: 6 },
      { name: 'Juno Lux', capacity: 4 }
    ],
    features: [
      'Lower driver commission',
      'Stock options for drivers',
      'Transparent pricing',
      'Quality vehicle requirements',
      'Driver ratings matter',
      'Local focus'
    ],
    availability: 'New York City metro area'
  },
  {
    id: 'ola',
    name: 'Ola',
    description: 'International rideshare with diverse options',
    rating: 4.3,
    totalReviews: 3456789,
    pricing: {
      baseFare: 1.80,
      perMile: 1.40,
      perMinute: 0.28
    },
    vehicleTypes: [
      { name: 'Mini', capacity: 4 },
      { name: 'Prime Sedan', capacity: 4 },
      { name: 'Prime SUV', capacity: 6 },
      { name: 'Auto', capacity: 3 },
      { name: 'Bike', capacity: 1 }
    ],
    features: [
      'Multiple payment options',
      'Share ride option',
      'Corporate services',
      'Safety features with SOS',
      'Outstation rides',
      'Rental packages'
    ],
    availability: '250+ cities in India, Australia, UK'
  },
  {
    id: 'grab',
    name: 'Grab',
    description: 'Southeast Asian super app for rides and more',
    rating: 4.4,
    totalReviews: 5678901,
    pricing: {
      baseFare: 1.50,
      perMile: 1.30,
      perMinute: 0.22
    },
    vehicleTypes: [
      { name: 'GrabCar', capacity: 4 },
      { name: 'GrabCar Plus', capacity: 6 },
      { name: 'GrabShare', capacity: 2 },
      { name: 'GrabBike', capacity: 1 },
      { name: 'Premium', capacity: 4 }
    ],
    features: [
      'Super app with food delivery',
      'GrabPay wallet integration',
      'Rewards program',
      'Insurance coverage',
      'Scheduled rides',
      'Multiple service options'
    ],
    availability: '500+ cities across Southeast Asia'
  },
  {
    id: 'didi',
    name: 'DiDi',
    description: 'Leading mobility platform from China',
    rating: 4.2,
    totalReviews: 8901234,
    pricing: {
      baseFare: 2.00,
      perMile: 1.50,
      perMinute: 0.30
    },
    vehicleTypes: [
      { name: 'Express', capacity: 4 },
      { name: 'Premier', capacity: 4 },
      { name: 'Luxe', capacity: 4 },
      { name: 'DiDi Share', capacity: 2 }
    ],
    features: [
      'AI-powered matching',
      'Multi-language support',
      'In-trip recording for safety',
      'Emergency assistance',
      'Carbon offset program',
      'Loyalty rewards'
    ],
    availability: '4,000+ cities globally'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    description: 'European rideshare with competitive rates',
    rating: 4.3,
    totalReviews: 2345678,
    pricing: {
      baseFare: 2.00,
      perMile: 1.55,
      perMinute: 0.28
    },
    vehicleTypes: [
      { name: 'Bolt', capacity: 4 },
      { name: 'Comfort', capacity: 4 },
      { name: 'XL', capacity: 6 },
      { name: 'Green', capacity: 4 }
    ],
    features: [
      'Low-cost rides',
      'Electric vehicle options',
      'Women safety features',
      'Business accounts',
      'Scheduled rides',
      'No hidden fees'
    ],
    availability: '500+ cities in 45+ countries'
  },
  {
    id: 'wingz',
    name: 'Wingz',
    description: 'Scheduled airport rides with professional drivers',
    rating: 4.6,
    totalReviews: 89012,
    pricing: {
      baseFare: 5.00,
      perMile: 2.00,
      perMinute: 0.40
    },
    vehicleTypes: [
      { name: 'Sedan', capacity: 4 },
      { name: 'SUV', capacity: 6 }
    ],
    features: [
      'Scheduled rides only',
      'Airport specialists',
      'Professional drivers',
      'Flight tracking',
      'Fixed pricing',
      'Meet and greet service'
    ],
    availability: '30+ US airports'
  },
  {
    id: 'blacklane',
    name: 'Blacklane',
    description: 'Premium chauffeur service worldwide',
    rating: 4.7,
    totalReviews: 156789,
    pricing: {
      baseFare: 10.00,
      perMile: 3.50,
      perMinute: 0.60
    },
    vehicleTypes: [
      { name: 'Business Class', capacity: 3 },
      { name: 'Business Van', capacity: 5 },
      { name: 'First Class', capacity: 3 }
    ],
    features: [
      'Professional chauffeurs',
      'Premium vehicles',
      'Carbon neutral',
      'Flight tracking',
      'Business travel focused',
      '1-hour free wait time'
    ],
    availability: '300+ cities in 50+ countries'
  }
];
