var pop = {
    // (A) ATTACH POPUP HTML
    pWrap : null, // HTML POPUP WRAPPER
    pTitle : null, // HTML POPUP TITLE
    ptxt : null, // HTML POPUP TEXT
    init : function () {
      // (A1) POPUP WRAPPER
      pop.pWrap = document.createElement("div");
      pop.pWrap.id = "popwrap";
      document.body.appendChild(pop.pWrap);
  
      // (A2) POPUP BOX
      let pBox = document.createElement("div");
      pBox.id = "popbox";
      pop.pWrap.appendChild(pBox);
  
      // (A3) TITLE
      pop.pTitle = document.createElement("h1");
      pop.pTitle.id = "poptitle";
      pBox.appendChild(pop.pTitle);
  
      // (A4) TEXT
      pop.pText = document.createElement("p");
      pop.pText.id = "poptext";
      pBox.appendChild(pop.pText);
  
      // (A5) CLOSE BUTTON
      let pClose = document.createElement("div");
      pClose.id = "popclose";
      pClose.innerHTML = "x";
      pClose.onclick = pop.close;
      pBox.appendChild(pClose);
    },
  
    // (B) OPEN POPUP
    open : function (that,text = 'Coming Soon') {
      pop.pTitle.innerHTML = that.innerText;
      pop.pText.innerHTML = text;
      pop.pWrap.classList.add("open");
    },
  
    // (C) CLOSE POPUP
    close : function () {
      pop.pWrap.classList.remove("open");
    }
  };
  window.addEventListener("DOMContentLoaded", pop.init);

  hoursinnerText = `<div class="hours">
      <ul class="Days">
          <li class="day">Sunday</li>
          <li class="day">Monday</li>
          <li class="day">Tuesday</li>
          <li class="day">Wednsday</li>
          <li class="day">Thurday</li>
          <li class="day">Friday</li>
          <li class="day">Saturday</li>
      </ul>
    </div>`;

  menupdf = `"https://www.texasroadhouse.com/texas-roadhouse-master-menu.pdf"`;

  MenuinnerText = () => {
    return `<div class="menu">
    <h1>Menu</h1>
    <p><a href=${menupdf}>Download</a>.</p>
    <embed src=${menupdf} type="application/pdf" width="100%"  /> 
    
    </div>`;
  };
  
  