const isListForShowJsonDocuments = document.getElementById("list-group");

fetch("../database.json")
  .then((response) => response.json())
  .then((data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        
        const item = data[key]; 

        isListForShowJsonDocuments.innerHTML += `<li class="list-group-item">
                                                    <span>${item.title}</span> 
                                                    <a class="btn btn-dark btn-open-doc" href="#">Open</a>
                                                </li> `
      }
    }

    document.body.appendChild(lista);
  });


