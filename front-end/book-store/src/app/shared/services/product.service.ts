import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, Global } from '../../imports';
@Injectable()
export class ProductService {

    subject = new Subject();
    constructor(private httpClient: HttpClient) { }
    getAllProducts(term?: string): Observable<any> {
        if (!term || term == '')
            term = 'a';
        let url: string = `http://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`;
        return this.httpClient.get(url);
        // let products = [
        //     new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, ''),
        //     new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, ''),
        //     new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, ''),
        //     new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, ''),
        //     new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, ''),
        //     new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, '')
        // ];
        // return of(products);
    }
    getProductById(productId: number): Observable<any> {
        return of(new Product(0, 'aaa', 'bbb', ['ccc'], 'ddd', new Date(), 'eee', 10, ''));
    }


}