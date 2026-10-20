const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash-o fa-lg");


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const messageID = this.parentNode.parentNode.childNodes[1].dataset.messageId
        //const name = this.parentNode.parentNode.childNodes[1].innerText
        //const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        
        fetch('likes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            //'name': name,
            //'msg': msg,
            messageID,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const messageID = this.parentNode.parentNode.childNodes[1].dataset.messageId
        console.log(messageID);
        //const name = this.parentNode.parentNode.childNodes[1].innerText
        // msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('dislikes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            messageID,
            //'name': name,
            //'msg': msg,
            'thumbUp':thumbUp

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const messageID = this.parentNode.parentNode.childNodes[1].dataset.messageId
        //const name = this.parentNode.parentNode.childNodes[1].innerText
        //const msg = this.parentNode.parentNode.childNodes[3].innerText
       // const borrar = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messageID
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
