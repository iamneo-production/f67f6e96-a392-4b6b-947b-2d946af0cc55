import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    component = new AppComponent();
  });
  it('test_case1',()=>{
      component.animalPosition = 0;
      expect(component.animalSource[component.animalPosition]).toBe("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg");
  });
  it('test_case2',()=>{
    component.animalPosition = 1;
    expect(component.animalSource[component.animalPosition]).toBe("https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg");
});
it('test_case3',()=>{
  component.animalPosition = 2;
  expect(component.animalSource[component.animalPosition]).toBe("https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg");
});
it('test_case4',()=>{
  component.animalPosition = 3;
  expect(component.animalSource[component.animalPosition]).toBe("https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg");
});
it('test_case5',()=>{
  component.animalPosition = 4;
  expect(component.animalSource[component.animalPosition]).toBe("https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg");
});
});
