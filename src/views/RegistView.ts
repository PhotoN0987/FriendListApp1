import axios from 'axios'

export class RegistView {

  //#region Components
  userName: HTMLInputElement | null;
  favorite: HTMLInputElement | null;
  birthday: HTMLInputElement | null;
  registButton: HTMLElement | null;
  //#endregion

  constructor() {
    // HTMLElement取得
    this.userName = <HTMLInputElement>document.getElementById('user-name')
    this.favorite = <HTMLInputElement>document.getElementById('favorite')
    this.birthday = <HTMLInputElement>document.getElementById('birthday')
    this.registButton = document.getElementById('regist-button')

    // イベントの登録
    this.registButton?.addEventListener("click", () => {
      this.registButtonClick()
    });
  }

  // buttonがクリックされたとき
  public registButtonClick() {
    // 値表示
    alert(`user-name:${this.userName?.value}\nfavorite:${this.favorite?.value}\nbirthday:${this.birthday?.value}`)

    //データベースに追加
    axios.post('users', {
    fields: {
        name: {
          stringValue: this.userName?.value
        },
        favorite: {
          stringValue: this.favorite?.value
        }
      }
    })

    // 追加処理
    // axios.post('users', {
    //   fields: {
    //     name: {
    //       stringValue: 'Foo'
    //     },
    //     favorite: {
    //       stringValue: 'Bar'
    //     }
    //   }
    // })
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}