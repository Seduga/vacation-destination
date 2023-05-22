(function(){
    "use strict"
    const detailsForm = document.getElementById('destination-form')
    detailsForm.addEventListener('submit', handleFormSubmit)
    function handleFormSubmit(event){
        event.preventDefault()
        const destName = event.target.elements["name"].value
        const destLocation = event.target.elements["location"].value
        const desPhoto = event.target.elements["photo"].value
        const destDesc = event.target.elements["description"].value
        for(let i = 0;i<detailsForm.length;i++){
            detailsForm.elements[i].value = "";
        }
       //create card
        const destCard = createDestinationCard(destName , destLocation , desPhoto, destDesc)
         
    
    
        const wishListContainer = document.querySelector('#destination-container')
        if(wishListContainer.children.length === 0){
            document.querySelector('#title').innerHTML = "My Wish List"
        }
    
    
    
     // add the card to the page
     document.querySelector('#destination-container').appendChild(destCard)
    
    
    
         function createDestinationCard(name,location,photo,description){
            const card = document.createElement('div')
            card.className = "card"
    
            const img = document.createElement('img')
            img.setAttribute('alt', name)
            const constantPhotoURL = "images/signpost.jpg"
            //Если пользователь не ввел url фото,то загружает стандартное
            if(photo.length === 0 ){
                img.setAttribute('src', constantPhotoURL)
    // Если ввел,то берем значение photo и загружаем его
            }
            else{
                img.setAttribute('src', photo)
            }
            
            //Создаем блок для данных,которые ввел пользователь
            const cardBody = document.createElement('div')
            cardBody.className = "card-body"
            // Создаем название локации
            const cardTitle = document.createElement('h3')
            cardTitle.innerText = name
            //Добавляем название локации в блок
            cardBody.appendChild(cardTitle)
            //Создаем и добавляем блок с локацией
            const cardSubTitle = document.createElement('h4')
            cardSubTitle.innerText = location;
            cardBody.appendChild(cardSubTitle)
    
      // Проверка,написал ли пользователь  что-либо в описание
      if(description.length !== 0){
        const cardText = document.createElement('p')
        cardText.className = "card-text"
        cardText.innerText = description
        cardBody.appendChild(cardText)
      }
     
      //Добавление кнопки удаления карточки
      const cardDeleteBtn = document.createElement('button')
      cardDeleteBtn.innerText = "Remove"
       
    // Начинаем добавлять логику к этой кнопке
    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn)
    
    
    
    card.appendChild(img)
    card.appendChild(cardBody)
    return card
    
         }
        
    
    
    }
    //Удаление карточки. Мы пишем 2 раза parentElement потому что сначала идет card-body(parentElement1),а потом card(parentElement2)
    function removeDestination(event){
        const card = event.target.parentElement.parentElement
        card.remove()
    }  
})()


