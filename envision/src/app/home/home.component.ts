import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   

  constructor() { }
  studSignedIn=JSON.parse(localStorage.getItem("studSignedIn")||"{}")


  ngOnInit(): void {
    if(this.studSignedIn==true)
    {
      document.getElementById("loginButtons")!.style.visibility="hidden";
      document.getElementById("loginButtons")!.style.marginTop="0";
      document.getElementById("logoutButton")!.style.visibility="visible";
      document.getElementById("StudentExam")!.style.visibility="visible";
    }
    else{
      document.getElementById("loginButtons")!.style.visibility="visible";
      document.getElementById("logoutButton")!.style.visibility="hidden";
      document.getElementById("loginButtons")!.style.marginTop="20vh";
      document.getElementById("StudentExam")!.style.visibility="hidden";
    }

    
    window.addEventListener("scroll", this.checkBoxes);
    this.checkBoxes() 

  }
  logOut(){
    localStorage.clear()
    window.location.reload();
    localStorage.setItem("signedIn","false")
  }




  checkBoxes():any{
    const triggerBottom = ( window.innerHeight / 5) * 4;
    document.querySelectorAll(".box").forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerBottom) box.classList.add("show");
        else box.classList.remove("show");
    });
  };
  


  
  
}
 