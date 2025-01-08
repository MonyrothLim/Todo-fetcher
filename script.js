const inputbox = document.querySelector(".inputbox");
function search() {
  if (inputbox.value === '') {
    alert("You must enter User ID");
  } else if (isNaN(inputbox.value)) {
    alert("You must enter a number");
  } else {
    fetch(`https://jsonplaceholder.typicode.com/todos/${inputbox.value}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const userId = document.querySelector(".userid");
        const title = document.querySelector(".title");
        const status = document.querySelector(".status");
        const line = document.querySelector(".line");
        line.textContent = "|"
        userId.textContent = json.userId;
        title.textContent = json.title;
        if (json.completed){
          status.textContent = "Completed"
        title.style.backgroundColor = 'rgba(0,255,0,0.25';
        title.style.textDecoration = 'line-through'
      }
          else{
            status.textContent = "Not Completed"
          title.style.backgroundColor = 'rgba(255,0,0,0.25';
          title.style.textDecoration = 'none';
          } 
      })
      .catch(err => {
        alert('Error fetching the data');
        console.error(err);
      });
  }
}
inputbox.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){search();}
});
