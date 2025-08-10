import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbkrService } from './ibkr.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accountsData: any = { message: 'Aún no se han solicitado datos.' };
  constructor(private ibkrService: IbkrService) {}
  getAccounts() {
    this.ibkrService.getAccounts().subscribe({
      next: (data) => this.accountsData = data,
      error: (err) => this.accountsData = { error: 'Falló la obtención de cuentas', details: err.message }
    });
  }
}
