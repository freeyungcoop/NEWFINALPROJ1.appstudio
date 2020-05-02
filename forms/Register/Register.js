//User registration process
btnBack.onclick=function(){
  ChangeForm(Login)
}


btnSign.onclick=function(){
    let newUsername = inptSignUpUser.value
  let newPassword = inptSignUpPass.value
  let checkPass = inptVerify.value
  let queryUserCheck = "SELECT username FROM user WHERE username = " + '"' + newUsername + '"'
  let queryBest = "INSERT INTO user (username,pass) VALUES ('" + newUsername + "', '" + newPassword + "')"
       req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=asc86171&pass=" + "BIA375" + "&database=asc86171&query=" + queryUserCheck)   
          if (req2.status == 200) { //everything worked.
              results1 = JSON.parse(req2.responseText)
              if (results1.length > 0) {
                lblVerified.value = "Please choose another username"
              } else {
                    if (newPassword !== checkPass) {
                    lblVerified.value = "Verified password needs to match"
                                        } else {
                                              req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=asc86171&pass=" + "BIA375" + "&database=asc86171&query=" + queryBest)  
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
