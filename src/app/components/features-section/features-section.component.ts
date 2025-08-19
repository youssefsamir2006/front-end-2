import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../../models/feature.model';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css'
})
export class FeaturesSectionComponent implements OnInit {
  features: Feature[] = [];

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.features = this.featureService.getFeatures();
  }

  learnMore(feature: Feature) {
    alert(`Learn more about ${feature.title}`);
  }
}
