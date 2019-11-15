import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  allCakes: any = [];
  newCake = null;
  selectedCake = null;
  editCake = null;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newCake = { name: "", image: "" };
    this.showAllCakes();
  }

  createCake() {
    this._httpService.createCake(this.newCake)
      .subscribe((data: any) => {
        console.log("Successfully added new cake!", data);
        this.newCake = { name: "", image: "" };
      })
  }

  showAllCakes() {
    let observable = this._httpService.getCakes();
    observable.subscribe((data: any) => {
      data.cakes.forEach(cake => {
        cake.newRating = "1";
        cake.newComment = "Rate this cake.";
      });
      this.allCakes = data.cakes;
      console.log(this.allCakes)
    });
  }

  showWithClick() {
    let observable = this._httpService.getCakes();
    observable.subscribe((data: any) => {
      this.allCakes = data.cakes;
      console.log(this.allCakes)
    });
  }

  showDetails(cake) {
    this.selectedCake = cake;
    console.log(this.selectedCake)
  }

  rateCakeForm(cake) {
    this.editCake = cake;
    this._httpService.rateCake(cake._id, this.editCake)
      .subscribe((data: any) => {
        console.log("Successfully rated this cake!", data);
        cake.newRating = '1';
        cake.newComment = 'Rate this cake.';
      })

  }

}
