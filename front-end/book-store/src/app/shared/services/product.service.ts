import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {
    
    subject=new Subject();

    constructor(private httpClient:HttpClient) { }
    getAllProducts(q:string='a'): Observable<any> {
        let url: string = `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`;
        return this.httpClient.get(url);
    }

}