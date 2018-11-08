import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Country } from "../global/models";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private endpoint = "https://restcountries.eu/rest/v2/all?fields=nativeName;alpha2Code";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint);
  }

}