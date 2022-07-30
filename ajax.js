const xhr = new XMLHttpRequest();
let title = document.getElementById("title");
let url = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", url);
xhr.send();

xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    data.map((e) => {
      title.innerHTML += `${e.id}) ${e.title} <br> <p id ='para'>${e.body}</p><br>`;
    });
};

// const fetchData = (data) => {
//   for (let i = 0; i < data.length; i++) {
//     title.innerHTML += `${i + 1} ) ${data[i].title}<br >`;
//   }
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.response);
//     fetchData(data);
//   }
// };
