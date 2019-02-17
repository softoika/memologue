import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * コンポーネントインスタンスのaddMessageメソッドで複数のメッセージの追加・取得ができることを確認する。
   */
  it('should add 2 messages', () => {
    const component = new AppComponent();
    const m1 = 'hogehoge';
    const m2 = 'fugafuga';
    component.addMessage(m1);
    component.addMessage(m2);
    expect(component.messages).toEqual([m1, m2]);
  });

});
