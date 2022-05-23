import { ComponentFixture, tick, TestBed, fakeAsync } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should load todos from the server', () => {
    let service = TestBed.inject(TodoService);
    // fixture.debugElement.injector.get(TodoService)
    spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  it('should load todos from the server asynchronously with async', async () => {
    let service = TestBed.inject(TodoService);
    // fixture.debugElement.injector.get(TodoService)
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });
  });

  it('should load todos from the server asynchronously with fakeAsync', fakeAsync(() => {
    let service = TestBed.inject(TodoService);
    // fixture.debugElement.injector.get(TodoService)
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();
    
    tick();
    expect(component.todos.length).toBe(3);
  }));

});
