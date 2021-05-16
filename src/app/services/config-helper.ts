

export class ConfigHelper {

    constructor() { }
  
    getAdConfigHTML1(){
        return `<div class="adContainer">
        <div class="tabActionIcons">
          <img src="../assets/images/information.png" class="information" />
          <img id="close1" src="../assets/images/close.png" class="close" />
        </div>
        <div class="adContent">
           <div class="adImg">
             <img src="../assets/images/ad1.jpeg" />
           </div>
           <div class="adSection">
             <div class="adHeading">Hiring In Top ad agencies</div>
             <div class="adSubHeading">Find Latest Ad Agencies Job Vacancies in New York Area on Receptix</div>
           </div>
        </div>
     </div>`;
    }
  
    getAdConfigHTML2(){
      return `<div class="adContainer">
      <div class="tabActionIcons">
        <img src="../assets/images/information.png" class="information" />
        <img id="close2" src="../assets/images/close.png" class="close" />
      </div>
      <div class="adContent">
         <div class="adSection">
           <div class="adHeading">Image Rectoucing</div>
           <div class="adSubHeading">Find Latest Ad Agencies Job Vacancies in New York Area on Receptix</div>
         </div>
      </div>
   </div>`;
  }
  
  getAdConfigHTML3(){
    //   return `<div class="adContainerAnimate">
    //   <div class="scene">
    //   <div class="close">
    //       <img class="closeBtn" id="close3" src="../../assets/images/error.svg" alt="close">
    //   </div>
    //   <div class="cube">
    //     <div class="face front">
    //         <div class="frontContent">
    //             <div class="frontHeader">Upcoming</div>
    //             <div class="frontSubheading">IPL 2021</div>
    //         </div>
    //       </div>
    //     <div class="face right">
    //         <div>
    //             <img class="rightImg" src="../../assets/images/logo2.jpg" alt="logo">
    //         </div>
    //     </div>
    //     <div class="face left">
    //         <div class="leftContent">
    //             <div class="leftconfig">NULL</div>
    //             <div class="leftconfig">over</div>
    //             <div class="leftconfig">0</div>
    //             <div class="leftconfig">0</div>
    //         </div>
    //     </div>
    //     <div class="face back">
    //         <div>
    //             <div class="backContent">CSK</div>
    //             <div class="backContent">Bowler</div>
    //             <div class="backContent">-</div>
    //         </div>
    //     </div>
    //   </div>
    // </div>
    //   </div>`;

    return `
    <div class="adContainerAnimate">
       <app-flip-card></app-flip-card>
    </div>
    `
  }
  
  getAdConfigHTML4(){
      return `<div class="adContainer">
      <div class="tabActionIcons">
        <img src="../assets/images/information.png" class="information" />
        <img id="close4" src="../assets/images/close.png" class="close" />
      </div>
      <div class="adContent">
         <div class="adImg">
           <img src="../assets/images/ad1.jpeg" />
         </div>
         <div class="adSection">
           <div class="adHeading">Hiring In Top ad agencies</div>
           <div class="adSubHeading">Find Latest Ad Agencies Job Vacancies in New York Area on Receptix</div>
         </div>
      </div>
   </div>`;
  }
  
  
  }
  