
const api_url="https://api.github.com/users";


function getgithubdetails(){

    // Toggle Button

  var x = document.getElementById("gittable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }



async function getdata(url){
   await fetch(url).then((res)=>{
        console.log(res);
        return res.json();

    }).then((data)=>{
        console.log(data);
        if (data) {
            hideloader();     
        }
        show(data);
    })   
}

getdata(api_url);

function hideloader(){
    document.getElementById('loading').style.display='none';

    document.getElementById('loading1').style.display='none';

    document.getElementById('loading2').style.display='none';
}

function show(data){
    let table=
    `<tr>
    <th><h3>Id</h3></th>
    <th><h3>UserName</h3></th>
    <th><h3>Avatar</h3></th>
    <th><h3>Url</h3></th>
    <th><h3>Respo Url</h3></th>
    <th><h3>Type</h3></th>
    </tr>`;


    for(let tbl of data){
        table += 
        `<tr>
        <td>  ${tbl.id}.  </td>
        <td>  ${tbl.login}  </td>
        <td>  <img src="${tbl.avatar_url}" width="150px" height="150px" alt="img">     </td>
        <td>  ${tbl.url}  </td>
        <td>  ${tbl.repos_url}  </td>
        <td>  ${tbl.type}  </td>
        </tr>`;
    }

    document.getElementById("gittable").innerHTML=table;
}
}