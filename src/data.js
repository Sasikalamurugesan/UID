// import hero slider images
import { Link } from 'react-router-dom';
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';

import DogCateg1 from './assets/img/dogs/dog-categ-1.png';
import DogCateg2 from './assets/img/dogs/dog-categ-2.png';
import DogCateg3 from './assets/img/dogs/dog-categ-3.png';
import DogCateg4 from './assets/img/dogs/dog-categ-4.png';

import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Services',
    to: '/services',
  },
  {
    name: 'Blog',
    to: '/events',
    
  },
  {
    name: 'PetInsurance',
    to: '/inform',
  },
  {
    name: 'Training',
    to: '/training',
  },
  {
    name: 'Shop',
    to: '/shop',
    
  },
  {
    name: 'Login',
    to: '/login',
    
  },
];

  

export const heroSlider = [
  {
    id: 1,
    title: 'We take care of your pet.',
    image: <HeroSlideImage1 />,
    subtitle:
      'Top-notch Pet Services at Competitive Prices',
    buttonText: 'Get an appointment',
  },
  {
    id: 2,
    title: 'Bath and Brush',
    image: <HeroSlideImage2 />,
    subtitle:
      'Keep your pet clean and healthy with our bath and brush service.',
    buttonText: 'Get an appointment',
  },
  {
    id: 3,
    title: 'Nail Trimming.',
    image: <HeroSlideImage3 />,
    subtitle:
      'Ensure your pets comfort with regular nail trimming.',
    buttonText: 'Get an appointment',
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: 'small',
    dogCategory: '1 - 9 kg',
    services: [
      {
        name: 'smart',
        price: 20,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 40,
        list: [
          'all smart services',
          'Spa Day Package:',
          'Full Grooming Makeover',
          'Pawdicure Package',
          'Fancy Fur Coloring',
        ],
      },
      {
        name: 'royal',
        price: 60,
        list: [
          'all premium services',
          'VIP Concierge Service',
          'Luxury Accessories',
          'Coat Treatment',
          'Manicure',
          'Breed-Specific Styling',
          'Photography Session',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <DogCateg2 />,
    dogCategory: '10 - 19 kg',
    services: [
      {
        name: 'smart',
        price: 80,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 100,
        list: [
          'all smart services',
          'Spa Day Package:',
          'Full Grooming Makeover',
          'Pawdicure Package',
          'Fancy Fur Coloring',
        ],
      },
      {
        name: 'royal',
        price: 120,
        list: [
          'all premium services',
          'VIP Concierge Service',
          'Luxury Accessories',
          'Coat Treatment',
          'Manicure',
          'Breed-Specific Styling',
          'Photography Session',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'big',
    image: <DogCateg3 />,
    dogCategory: '20 - 29 kg',
    services: [
      {
        name: 'smart',
        price: 140,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 160,
        list: [
          'all smart services',
          'Spa Day Package:',
          'Full Grooming Makeover',
          'Pawdicure Package',
          'Fancy Fur Coloring',
        ],
      },
      {
        name: 'royal',
        price: 180,
        list: [
          'all premium services',
          'VIP Concierge Service',
          'Luxury Accessories',
          'Coat Treatment',
          'Manicure',
          'Breed-Specific Styling',
          'Photography Session',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'super',
    image: <DogCateg4 />,
    dogCategory: '30 - 39 kg',
    services: [
      {
        name: 'smart',
        price: 200,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 210,
        list: [
          'all smart services',
          'Spa Day Package:',
          'Full Grooming Makeover',
          'Pawdicure Package',
          'Fancy Fur Coloring',
        ],
      },
      {
        name: 'royal',
        price: 220,
        list: [
          'all premium services',
          'VIP Concierge Service',
          'Luxury Accessories',
          'Coat Treatment',
          'Manicure',
          'Breed-Specific Styling',
          'Photography Session',
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillGithub />,
    href: '#',
  },
];
