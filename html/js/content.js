

  const menupdf = `"img/TTC_Website_MENU_2023.png"`;

  MenuinnerText = () => {
    return `<div class="menu">
    <h1>Menu</h1>
    <p><a href=${menupdf}>Download</a>.</p>
    <embed src=${menupdf} type="application/pdf" width="100%"  /> 
    
    </div>`;
  };
  
const hoursinnerText = `<div class="hours">
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
    
const locationscheduleText = `<div class="hours">
  <h2 class="location-title">
    Follow us on FB <a class="no-underline" href="https://www.facebook.com/ThermyThermsCafe">@ThermyThermsCafe</a>
  </h2>
  <div class="locations">
  <table class="info">
	<caption>JANUARY</caption>
    <tr>
    	<td>SAT</td>
        <td><span class="date">13</span></td>
        <td><img src="http://www.lemieux-design.net/img/clock.png" alt="Time" /></td>
        <td>9:30 AM</td>
        <td class="location-details">
          <h3>Together We Can" MLK Jr. Parade Freedom<br/> Peace, & Unity Celebration </h3>
          <a href="https://maps.app.goo.gl/MxhUWKKayknJMzpB7">
          MLK Jr. Elementary School<br/>
           4615 S. 22nd Street, Phoenix, AZ  85040</a>
       </td>
    </tr>
    <tr>
    	<td>SAT</td>
        <td><span class="date">27</span></td>
        <td><img src="http://www.lemieux-design.net/img/clock.png" alt="Time" /></td>
        <td>8:00PM - 12:00AM</td>
        <td class="location-details">
          <h3>Jewel N Gents "Sizzling 4th Saturday's"</h3>
          <a href="https://maps.app.goo.gl/ZfSykFK5jsmtZKAEA">
          Arizona Prince Hall<br/>
          6035 S. 24th Street, Phoenix, AZ  85042</a>
       </td>
    </tr
</table>
<table class="info">
    <caption>MARCH</caption>
    <tr>
    	<td>SAT</td>
        <td><span class="date">02</span></td>
        <td><img src="http://www.lemieux-design.net/img/clock.png" alt="Time" /></td>
        <td>12:00PM - 4:00PM</td>
        <td class="location-details">
          <h3>Minority Economic Empowerment & Business Expo </h3>
          <a href="https://maps.app.goo.gl/5hCGbksWAVYxXw8n6">
          Cesar Chavez Library<br/>
          3635 W. Baseline Rd, Phoenix, AZ  85339</a>
       </td>
    </tr
    <tr>
    	<td>SAT</td>
        <td><span class="date">23</span></td>
        <td><img src="http://www.lemieux-design.net/img/clock.png" alt="Time" /></td>
        <td>8:00PM - 12:00AM</td>
        <td class="location-details">
          <h3>Jewel N Gents "Sizzling 4th Saturday's"</h3>
          <a href="https://maps.app.goo.gl/ZfSykFK5jsmtZKAEA">
          Arizona Prince Hall<br/>
          6035 S. 24th Street, Phoenix, AZ  85042</a>
       </td>
    </tr
    </table>
    <table class="info">
    <caption>APRIL</caption>
    <tr>
    	<td>SAT</td>
        <td><span class="date">27</span></td>
        <td><img src="http://www.lemieux-design.net/img/clock.png" alt="Time" /></td>
        <td>11:00PM - 1:30AM</td>
        <td class="location-details">
          <h3>Jewel N Gents Event</h3>
          <a href="https://maps.app.goo.gl/ZKYgrAQ7NZgVmf2w6">
          Crown Plaza PHX Airport<br/>
          4300 E. Washington Street, Phoenix, AZ  85034</a>
       </td>
    </tr
    </table>
    </div>
    </div>`;

const contactus = `	
<div class="contact__content">
      <div class="contactbox email">
            <div class="detail--3">
              <span class="template-icon-feature-clock"></span>
              <h2>Email</h2>
              <p>
              kitchen@thermythermscafe.com<br/>
               
              </p>
            </div>
          </div>
            <div class="contactbox address">
            <div class="detail--2">
              <span class="template-icon-feature-location-map"></span>
              <h2>Visit</h2>
              <p>
                Follow us on FB for locations
              </p>
            </div>
          </div>
          <div class="contactbox phone">      
            <div class="detail--1">
              <span class="template-icon-feature-phone-circle"></span>
              <h2>Call</h2>
              <p>
                (602) 487-4885<br/>
                <br/>
              </p>
            </div>
          </div>
      <div class="contactbox contactform">
        <div class="form--entry">
          <div class="template-component-form-field template-state-block">
            <label for="contact-form-name">Your Name *</label>
            <input type="text" name="contact-form-name" id="contact-form-name"/>
          </div>
          <div class="template-component-form-field template-state-block">
            <label for="contact-form-email">Your E-mail *</label>
            <input type="text" name="contact-form-email" id="contact-form-email"/>
          </div>
          <div class="template-component-form-field template-state-block">
            <label for="contact-form-phone">Phone Number</label>
            <input type="text" name="contact-form-phone" id="contact-form-phone"/>
          </div>
        </div>
        <div class="form--message">
          <div class="template-component-form-field template-state-block">
            <label for="contact-form-message">Message *</label>
            <textarea rows="1" cols="10" name="contact-form-message" id="contact-form-message"></textarea>
          </div>
        </div>
      
    
        <div class="form--button">
          <span class="template-state-block">
            <input type="submit" value="Submit Message" class="template-component-button" name="contact-form-submit" id="contact-form-submit"/>
          </span>
        </div>
      </div>
    </div>
    

  
  <!-- Space -->
  <div class="template-component-space template-component-space-4"></div>
  


<!-- Google Maps -->
<div class="template-section template-section-padding-reset template-clear-fix">
        
  <!-- Google Map -->
  <div class="template-component-google-map">

    <!-- Content -->
    <div class="template-component-google-map-box">
      <div class="template-component-google-map-box-content"></div>
    </div>

    <!-- Button -->
    <a href="#" class="template-component-google-map-button">
      <span class="template-icon-meta-marker"></span>
      <span class="template-component-google-map-button-label-show"> </span>
      <span class="template-component-google-map-button-label-hide"> </span>
    </a>

  </div>

  				

</div>

</div>
`