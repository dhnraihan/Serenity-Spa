import swedishMassage from '../assets/images/swedish-massage.jpg';
import deepTissueMassage from '../assets/images/deep-tissue-massage.jpg';
import aromatherapyMassage from '../assets/images/aromatherapy-massage.jpg';
import hotStoneMassage from '../assets/images/hot-stone-massage.jpg';
import classicFacial from '../assets/images/classic-facial.jpg';
import antiAgingFacial from '../assets/images/anti-aging-facial.jpg';
import hydratingFacial from '../assets/images/hydrating-facial.jpg';
import bodyScrub from '../assets/images/body-scrub.jpg';
import detoxBodyWrap from '../assets/images/detox-body-wrap.jpg';
import milkHoneyWrap from '../assets/images/milk-honey-wrap.jpg';
import signaturePackage from '../assets/images/signature-package.jpg';
import couplesRetreat from '../assets/images/couples-retreat.jpg';
import relaxationDay from '../assets/images/relaxation-day.jpg';
import heroBg from '../assets/images/hero-bg.jpg';

// Export hero image for homepage
export const heroImage = heroBg;

// Define types
export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

// Sample service categories and services data
export const serviceCategories: Category[] = [
  {
    id: 'massages',
    name: 'Massages',
    description: 'Our therapeutic massages are designed to relax, rejuvenate, and restore your body and mind.',
    services: [
      {
        id: 1,
        name: 'Swedish Massage',
        description: 'A gentle full-body massage designed to relax muscles, improve circulation, and reduce tension.',
        duration: '60 min',
        price: '$75',
        image: swedishMassage
      },
      {
        id: 2,
        name: 'Deep Tissue Massage',
        description: 'Targets the deeper layers of muscle and connective tissue to alleviate chronic muscle tension.',
        duration: '60 min',
        price: '$95',
        image: deepTissueMassage
      },
      {
        id: 3,
        name: 'Aromatherapy Massage',
        description: 'Combines therapeutic massage with essential oils to enhance relaxation and wellbeing.',
        duration: '75 min',
        price: '$85',
        image: aromatherapyMassage
      },
      {
        id: 4,
        name: 'Hot Stone Massage',
        description: 'Uses heated stones to loosen tight muscles and improve circulation.',
        duration: '90 min',
        price: '$110',
        image: hotStoneMassage
      }
    ]
  },
  {
    id: 'facials',
    name: 'Facials',
    description: 'Our facial treatments use premium products to cleanse, exfoliate, and nourish your skin.',
    services: [
      {
        id: 5,
        name: 'Classic Facial',
        description: 'A thorough cleansing and moisturizing treatment customized for your skin type.',
        duration: '45 min',
        price: '$65',
        image: classicFacial
      },
      {
        id: 6,
        name: 'Anti-Aging Facial',
        description: 'Targets fine lines and wrinkles using powerful antioxidants and peptides.',
        duration: '60 min',
        price: '$85',
        image: antiAgingFacial
      },
      {
        id: 7,
        name: 'Hydrating Facial',
        description: 'Replenishes moisture to dry and dehydrated skin for a radiant complexion.',
        duration: '60 min',
        price: '$75',
        image: hydratingFacial
      }
    ]
  },
  {
    id: 'body',
    name: 'Body Treatments',
    description: 'Pamper your body with our luxurious scrubs, wraps, and specialized treatments.',
    services: [
      {
        id: 8,
        name: 'Body Scrub',
        description: 'Exfoliates dead skin cells for smoother, softer skin.',
        duration: '45 min',
        price: '$70',
        image: bodyScrub
      },
      {
        id: 9,
        name: 'Detox Body Wrap',
        description: 'Helps eliminate toxins and reduce water retention using natural ingredients.',
        duration: '60 min',
        price: '$90',
        image: detoxBodyWrap
      },
      {
        id: 10,
        name: 'Milk and Honey Body Wrap',
        description: 'Nourishes and hydrates skin with the healing properties of milk and honey.',
        duration: '75 min',
        price: '$95',
        image: milkHoneyWrap
      }
    ]
  },
  {
    id: 'packages',
    name: 'Spa Packages',
    description: 'Experience the ultimate in relaxation with our comprehensive spa packages.',
    services: [
      {
        id: 11,
        name: 'Serenity Signature Package',
        description: 'Includes a full-body massage, facial, and reflexology treatment.',
        duration: '3 hours',
        price: '$220',
        image: signaturePackage
      },
      {
        id: 12,
        name: 'Couples Retreat',
        description: 'Side-by-side massages followed by a private spa bath for two.',
        duration: '2 hours',
        price: '$250',
        image: couplesRetreat
      },
      {
        id: 13,
        name: 'Ultimate Relaxation Day',
        description: 'A full day of pampering including massage, facial, body wrap, manicure, pedicure, and lunch.',
        duration: '6 hours',
        price: '$400',
        image: relaxationDay
      }
    ]
  }
];