import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold">{{profile()?.name}}</h1>
    <p class="text-lg text-gray-600">{{profile()?.title}}</p>
    <p class="mt-4">{{profile()?.summary}}</p>

    <h2 class="mt-6 font-semibold">Skills</h2>
    <ul class="flex flex-wrap gap-2 mt-2">
      <li *ngFor="let s of profile()?.skills" class="bg-gray-100 text-sm px-2 py-1 rounded">{{s}}</li>
    </ul>

    <h2 class="mt-6 font-semibold">Projects</h2>
    <ul class="mt-2 space-y-2">
      <li *ngFor="let p of profile()?.projects">
        <a [href]="p.link" target="_blank" class="text-blue-600 hover:underline">{{p.title}}</a>
        <div class="text-sm text-gray-700">{{p.description}}</div>
      </li>
    </ul>
  </div>
  `,
})
export class ProfileComponent implements OnInit {
  profile = signal<any>(null);
  constructor(private svc: ProfileService) {}

  ngOnInit(): void {
    this.svc.getProfile().subscribe((p) => this.profile.set(p));
  }
}
