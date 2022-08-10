let books = [
  {
    id: 1,
    title: "book1",
    author: "John Doe",
    edition: 12,
    image: "./img/images.jpg",
  },
  {
    id: 2,
    title: "book2",
    author: "ali",
    edition: 18,
    image: "./img/9781640095113.jpg",
  },
  {
    id: 3,
    title: "book3",
    author: "mohammed",
    edition: 19,
    image: "./img/9781493044917.jpg",
  },
];
let books2 = [

];

let like1 = document.createElement("a");
like1.href = "index2.html";
like1.className="btn btn-primary";
like1.textContent= "Favourites";
like1.role="button";
let like2 = document.createElement("a");
like2.href = "index.html";
like2.className="btn btn-primary ms-3";
like2.textContent= "Home";
like2.role="button";
let container = document.createElement("container");
container.className="row row-cols-1 row-cols-md-3 g-4";
books.forEach((el) => {
  
  let card = document.createElement("div");
  card.className = "card";
  let img = document.createElement("img");
  img.className="card-img-top"
  img.src = el.image;
  img.alt = "...";
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = el.title;
  let p = document.createElement("p");
  p.className = "card-text";
  p.innerText = el.author;
  let cardBody2 = document.createElement("div");
  cardBody2.className = "card-body";
  let h6 = document.createElement("h6");
  h6.innerText = el.edition;
  let button = document.createElement("button");
  button.className="btn btn-success";
  button.innerText = "like";
  button.addEventListener('click',()=>{ 
    books2.push(el)
    const str = localStorage.setItem("books", JSON.stringify(books2));
    
    })
  card.appendChild(img);
  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  cardBody.appendChild(h6);
  card.appendChild(cardBody);
  card.appendChild(cardBody2);
  cardBody2.appendChild(button);
  container.appendChild(card);
  container.appendChild(like1);
  container.appendChild(like2);
  document.body.appendChild(container);
 

});














  
  
 









// let form = document.createElement("form");
// form.className = "form-control";
// let label1 = document.createElement("label");
// label1.className = "col-sm-2 col-form-label";
// label1.innerText = "title"
// label1.for="for1"
// let input1 = document.createElement("input");
// input1.className=  "form-control";
// input1.id= "for1";
// let label2 = document.createElement("label");
// label2.className = "col-sm-2 col-form-label";
// label2.innerText = "author"
// label2.for="for2"
// let input2 = document.createElement("input");
// input2.className=  "form-control";
// input2.id= "for2";
// let label3 = document.createElement("label");
// label3.className = "col-sm-2 col-form-label";
// label3.id= "for3";
// label3.innerText = "edition"
// let input3 = document.createElement("input");
// input3.className=  "form-control";
// input3.id = "for3"
// let label4 = document.createElement("label");
// label4.innerText = "image" 
// label4.className = "col-sm-2 col-form-label";
// label4.for="formFile"
// let input4 = document.createElement("input");
// input4.className=  "form-control";
// input4.id="formFile";
// input4.type="file"
// let button1 = document.createElement("button");
// button1.innerText = "add";
// button1.className ="btn btn-primary";
// button1.type = "submit";
// let container = document.createElement("div");
// container.className="input-group";
// container.appendChild(form);
// form.appendChild(label1);
// form.appendChild(input1);
// form.appendChild(label2);
// form.appendChild(input2);
// form.appendChild(label3);
// form.appendChild(input3);
// form.appendChild(label4);
// form.appendChild(input4);
// form.appendChild(button1);
// document.body.appendChild(container);