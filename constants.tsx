
import React from 'react';
import { Shield, Hammer, Home, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Service, Review } from './types';

export const BUSINESS_INFO = {
  name: "Macke Roofers Co.",
  rating: 5.0,
  reviewsCount: 5,
  category: "Roofing contractor",
  address: "212 E San Augustine St, Deer Park, TX 77536",
  phone: "(281) 918-7715",
  locationContext: "Located in United States Postal Service",
  mapsCode: "MVQH+J6 Deer Park, Texas"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Roof Replacement',
    description: 'Complete removal of old roofing materials and installation of a brand-new, high-quality roof system.',
    icon: 'Home'
  },
  {
    id: '2',
    title: 'Emergency Repairs',
    description: '24/7 emergency response for leaks, storm damage, and structural roofing issues.',
    icon: 'Shield'
  },
  {
    id: '3',
    title: 'Commercial Roofing',
    description: 'Expert roofing solutions for businesses, warehouses, and industrial complexes.',
    icon: 'Hammer'
  },
  {
    id: '4',
    title: 'Gutter Systems',
    description: 'Seamless gutter installation and repair to protect your foundation and landscaping.',
    icon: 'CheckCircle'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'John Davis',
    rating: 5,
    content: 'Incredible service! Macke Roofers replaced my roof after a major storm. They were fast, professional, and the roof looks amazing.',
    date: '2 months ago'
  },
  {
    id: 'r2',
    author: 'Sarah Thompson',
    rating: 5,
    content: 'Best contractor I have worked with in Deer Park. Honest pricing and they cleaned up everything when they were done.',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Michael Rodriguez',
    rating: 5,
    content: 'Reliable and communicative. They found a leak that three other companies missed.',
    date: '3 weeks ago'
  }
];
