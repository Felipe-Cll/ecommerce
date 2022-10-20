import { Injectable } from '@angular/core';

import { MatSnackBar } from "@angular/material/snack-bar";
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notify(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
}
