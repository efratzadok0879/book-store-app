import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, Global } from '../../imports';
@Injectable()
export class ProductService {

    subject = new Subject();
    products: Product[] = [];
    constructor(private httpClient: HttpClient) {
        this.subject.subscribe({
            next: (products: Product[]) => this.products = products
        });
    }
    getAllProducts(term?: string): Observable<any> {
        // if (!term || term == '')
        //     term = 'a';
        // let url: string = `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`;
        // return this.httpClient.get(url);
        let products = [
            new Product(0, 'cdgfhjk,fmhvjksth  ', 'bbbhfhfghjgf', ['cccfgbvtry', 'fhdhdfthf'], 'dddhydfjutydjdrjn', new Date(), 'eee', 10, 'http://localhost:4200/assets/tmp.JPG'),
            new Product(1, 'cdgfhjk,  ', 'bbbhfhfghjgf', [], 'dddhydfjutydjdrjn', new Date(), 'eee', 10, 'http://localhost:4200/assets/tmp.JPG'),
            new Product(2, 'cdgfhjk, fmhvjksth  ', 'bbbhfiiiiiii iiiiiiiiii iiiihfghjgf', ['fhdhdfthf'], 'dddhydfjutydjdrjn', new Date(), 'eee', 10, 'http://localhost:4200/assets/tmp.JPG')

        ];
        return of(products);
    }
    getProductById(productId: number): Product {
        
        return this.products.find(product => product.id == productId);
    }


}