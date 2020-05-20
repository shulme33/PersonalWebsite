export function simpleQuery(axios, query) {
  //query - SQL text to be executed
  //Axios
  //e.preventDefault();
  console.log("Initial simple-query.js >> " + query);
  let formData = new FormData();
  formData.append("text", query);
  const url = "http://localhost:80/PersonalWebsiteServer/";
  axios
    .post(url, formData)
    .then((res) => console.log(res.data))
    .catch((err) => console.log("Error" + err));
  console.log("Following simple-query.js >> " + query);
}
