import axios from 'axios'

export class RegistView {

  //#region Components
  name: HTMLInputElement | null;
  mail: HTMLInputElement | null;
  birthday: HTMLInputElement | null;
  favorite: HTMLInputElement | null;
  remarks: HTMLInputElement | null;
  registButton: HTMLElement | null;
  //#endregion

  constructor() {
    // HTMLElement取得
    this.name = <HTMLInputElement>document.getElementById('user-name')
    this.mail = <HTMLInputElement>document.getElementById('user-mail')
    this.birthday = <HTMLInputElement>document.getElementById('birthday')
    this.favorite = <HTMLInputElement>document.getElementById('favorite')
    this.remarks = <HTMLInputElement>document.getElementById('remarks')
    this.registButton = document.getElementById('regist-button')

    // イベントの登録
    this.registButton?.addEventListener("click", () => {
      this.registButtonClick()
    });
  }

  // buttonがクリックされたとき
  public registButtonClick() {
    
    document.location.href='index.html'

    // データベースに追加
    axios.post('users', {
    fields: {
        name: {
          stringValue: this.name?.value
        },
        mail: {
          stringValue: this.mail?.value
        },
        birthday: {
          stringValue: this.birthday?.value
        },
        favorite: {
          stringValue: this.favorite?.value
        },
        remarks: {
          stringValue: this.remarks?.value
        },
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
}