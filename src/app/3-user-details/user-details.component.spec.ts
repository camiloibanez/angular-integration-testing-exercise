import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
  navigate(params: any) {
    console.log(params);
  }
}

class ActivatedRouteStub {
  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }

  // params: Observable<any> = EMPTY;
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.save();
    
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate the user to the not found page when an invalid user id is passed', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    let route = TestBed.inject<ActivatedRouteStub>(ActivatedRoute as any);
    route.push({ id: 0 });
    
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
