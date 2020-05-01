//User registration process
btnBack.onclick=function(){
  ChangeForm(Login)
}


btnSign.onclick=function(){
    let newUser = inptSignUpUser.value
  let newPass = inptSignUpPass.value
  let verifyPass = inptVerify.value
  let queryUserExist = "SELECT username FROM user WHERE username = " + '"' + newUser + '"'
  let queryNew = "INSERT INTO user (username,pass) VALUES ('" + newUser + "', '" + newPass + "')"
       req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=asc86171&pass=" + "BIA375" + "&database=asc86171&query=" + queryUserExist)   
          if (req2.status == 200) { //everything worked.
              results1 = JSON.parse(req2.responseText)
              if (results1.length > 0) {
                lblVerified.value = "Please choose another username"
              } else {
                    if (newPass !== verifyPass) {
                    lblVerified.value = "Verified password needs to match"
                                        } else {
                                              req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=asc86171&pass=" + "BIA375" + "&database=asc86171&query=" + queryNew)  
                                                 if (req4.status == 200) { //everything worked.
                                                  lblResult.value = "Registration successful! Please login."
                                                  ChangeForm(Home)
                                                          } else {
                                                            lblVerified.style.display = "block"  // none to hide
                                                            lblVerified.value = "Error Connection Not Made: " + req4.status + " readystate " + req4.readyState + " status text " + req4.statusText;
                                                            }
                                                }
                                            
                              }
                       
                          } else {
                            lblVerified.style.display = "block"  // none to hide
                            lblVerified.value = "Error Connection Not Made: " + req2.status + " readystate " + req2.readyState + " status text " + req2.statusText;
                            }
}
