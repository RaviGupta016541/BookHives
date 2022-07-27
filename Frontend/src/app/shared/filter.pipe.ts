import { Pipe, PipeTransform } from '@angular/core';
import { BookService } from '../book.service';

@Pipe({
  name: 'filterBooks'
})
export class FilterPipe implements PipeTransform {

  constructor(public shareData:BookService){}
  transform(value:any[],filterString:string,propName:string): any[] {
    const result:any=[];
    if(!value||filterString===''||propName===''){
      return value;
    }
    value.forEach((a:any)=>{

      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
      const filteredArrayLength=result?.length;
      this.shareData.filteredArrayLength=filteredArrayLength;
    });
    return result;
  }

}
