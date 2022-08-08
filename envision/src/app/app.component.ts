import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  studSignedIn=JSON.parse(localStorage.getItem("studSignedIn")||'{}')

  ngOnInit(): void {
    console.log(this.studSignedIn)
    if(this.studSignedIn==true){
      document.getElementById('profile')!.style.visibility="visible" 
      document.getElementById('profile2')!.style.visibility="visible" 
    }
    else{
      document.getElementById('profile')!.style.visibility="hidden" 
      document.getElementById('profile2')!.style.visibility="hidden" 

    }
  }

  toggleNav(){
    const navSize=document.getElementById("item2")?.style.height
    if(navSize=="25vh")
    {
      document.getElementById("navButton")!.innerHTML=" &#9776;"
      return this.closeItem2()
    }
    document.getElementById("navButton")!.innerHTML="&#x2715;"
    return this.openItem2()
  }



  openItem2(){
    document.getElementById("item2")!.style.height="25vh";
    document.getElementById("item2")!.style.fontSize="1rem";
    
  }
  closeItem2(){
    document.getElementById("item2")!.style.fontSize="0";
    document.getElementById("item2")!.style.height="0";
   
  }
  title = 'envision';
}
 