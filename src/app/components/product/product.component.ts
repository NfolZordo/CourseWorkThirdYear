import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { IProduct} from "src/app/models/product";
import { ITour } from "src/app/models/tour";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']

})
export class ProductComponent {
    @Input() tour: ITour

    details = false
}