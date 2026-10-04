import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/assets/profile.json');
  }
}
