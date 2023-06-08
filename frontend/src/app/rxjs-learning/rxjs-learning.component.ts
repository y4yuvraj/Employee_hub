import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  // agents!: Observable<String>;

  studentList=['yuv','ash','king'];
  students: Observable<string[]>=of(this.studentList);
  constructor() { }

  ngOnInit(): void {


    //   creating observable
    /* 
    const agents = new Observable(
      observer => {
        let count = 0;
        try {
          observer.next('first');
          observer.next('second');
          observer.next('third');

          setInterval(() => {
            observer.next(count);
            count++;
            if (count == 2) { observer.complete() }
            if (count > 3) {
              observer.error(new Error('count greater than 3'));
            }
          }, 1000)

        } catch (e) {
          observer.error(e);
        }
      }
    );
    agents.subscribe(data => {
      console.log(data);
    }, e => { console.log(e) }, () => { console.log("completed") })*/

  // of Operator
    this.students.subscribe(data=>{
      console.log(data);
    })

    // console 

  }

}
