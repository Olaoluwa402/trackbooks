// Object Oriented programming
const {log} = console

// Book class : Handle Books
class Book{
    constructor(title, author, isbn){
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
    // methods
}

// UI class : Handles user interface related tasks
class UI{
    // methods
   static lightModeHandler (e){
       let isLightMode = Store.getMode()
       if(isLightMode !== 'enabled'){
         e.target.classList.add('light-mode-switch');
         document.body.classList.add('lightModeEnabled');
         Store.enableLightMode()
       }else{
        e.target.classList.remove('light-mode-switch');
        document.body.classList.remove('lightModeEnabled');
        Store.disableLightMode()
       }
    }

}

// Store class : Handles saving and retrieving data from storage
class Store{
    // methods

    static getMode(){
        const mode = localStorage.getItem('light-mode')
        return mode
    }

    static enableLightMode(){
        // update the localstorage to enabled
        localStorage.setItem('light-mode', 'enabled')
    }

    static disableLightMode(){
        localStorage.setItem('light-mode', null)
    }

}

// Events : Handles event related actions

// Event: on page loaded
document.addEventListener('DOMContentLoaded', (e) =>{
    // update the UI mode to what was the last mode for the user
    let isLightMode = Store.getMode()
    log(isLightMode)
   if(isLightMode === 'enabled'){
       const lightModeElement = document.getElementsByClassName('light-mode-container')[0]
    lightModeElement.classList.add('light-mode-switch');
    document.body.classList.add('lightModeEnabled');
   }
})

// Events : listening to light mode switcher
const darkModeSwicther = document.getElementsByClassName('light-mode-container')[0]
    darkModeSwicther.addEventListener('click', UI.lightModeHandler)