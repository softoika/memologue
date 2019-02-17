import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let htmlElement: HTMLElement;
  let postButton: HTMLButtonElement;
  let textarea: HTMLTextAreaElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    htmlElement = fixture.debugElement.nativeElement;
    postButton = htmlElement.querySelector('button#postMessage');
    textarea = htmlElement.querySelector('textarea');
  });

  it('should create the app', () => {
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

  /**
   * テキストエリアにメッセージを入力し、投稿ボタンを押すことでメッセージを追加できることを確認する
   */
  it('should post messages with submit button', () => {
    // 1回目の投稿
    postMessage('hoge');
    // 2回目の投稿
    postMessage('fuga');
    const messages = htmlElement.querySelectorAll('div.message');
    expect(messages.length).toBe(2);
    expect(messages[0].textContent).toContain('hoge');
    expect(messages[1].textContent).toContain('fuga');
  });

  /**
   * メッセージ投稿後にテキストエリアがクリアされていることを確認する
   */
  it('should clear textarea after post message', () => {
    const component = fixture.componentInstance;
    postMessage('1234');
    expect(component.messageInput).toBe('');
  });

  function postMessage(message: string): void {
    textarea.value = message;
    textarea.dispatchEvent(new Event('input'));
    postButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
  }
});
