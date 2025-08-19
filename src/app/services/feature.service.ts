import { Injectable } from '@angular/core';
import { Feature } from '../models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private features: Feature[] = [
    {
      title: 'Wide Selection',
      description: 'Explore a vast range of cars and real estate properties from trusted sellers.',
      icon: 'fa-solid fa-car'
    },
    {
      title: 'Easy Search',
      description: 'Our advanced search filters help you find exactly what you are looking for in no time.',
      icon: 'fa-solid fa-magnifying-glass'
    },
    {
      title: 'Secure Transactions',
      description: 'We ensure that all your transactions are safe and secure.',
      icon: 'fa-solid fa-shield-halved'
    }
  ];

  getFeatures(): Feature[] {
    return this.features;
  }
}
