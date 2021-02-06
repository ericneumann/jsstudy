
function emailParts(string) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  if (string.trim().match(emailRegex)) {
    let emailParts = string.trim().toLowerCase().split("@");
    return [emailParts];
  } else {
    return -1;
    console.log("Please supply a valid email address.");
  }
}