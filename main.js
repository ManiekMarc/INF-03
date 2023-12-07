function oblicz() {
    let check = document.getElementById("check").checked;
    let km = document.getElementById("km").value;
    let result = document.getElementById("wynik");
    let koszt = 0;
    if (check == true) {
      result.innerHTML = "Dowieziemy Twoją pizzę za darmo";
    } else{
      koszt = km * 2;
      result.innerHTML = "Dowóz bedzie Cię kosztował " + koszt + " złotych";
    }
  }