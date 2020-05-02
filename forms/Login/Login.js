//User login process
currentUserID = ""

btnRegister.onclick=function(){
  ChangeForm(Register)
}





btnLogin.onclick=function(){
   let checkPassword = inptPassword.value
    let checkUsername = inptUsername.value
    let query = "SELECT username, pass FROM user WHERE username = " + "'" + checkUsername + "'" + "AND pass = " + "'" + checkPassword +  "'"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=asc86171&pass=BIA375&database=asc86171&query=" +  query)  
    if (req1.status == 200) { //everything worked.
        results = JSON.parse(req1.responseText)
        if (results.length == 0)  //there is no user or the password was entered incorrectly
            lblResult.value = "Incorrect username or password"
        else 
              //req6 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=asc86171&pass=BIA375&database=asc86171&query=" +  queryCurrentUser)
              //if (req6.status == 200) { //everything worked.
              //currentUserID = JSON.parse(req6.responseText)
              ChangeForm(orderPage)
      } else {
                  //Handle that. 
                  lblResult.style.display = "block"  // none to hide
                  lblResult.value = "Error Connection Not Made: " + req6.status + " readystate " + req6.readyState + " status text " + req6.statusText;
      }
      
   
}
