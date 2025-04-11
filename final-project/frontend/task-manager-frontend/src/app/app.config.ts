import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // ✅ Add this line

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};