

  const menupdf = `"pages/Thermy Therm Cafe Menu.pdf"`;

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
                464 Rhode Island Av.<br/>
                Phoenix AZ, 85041
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