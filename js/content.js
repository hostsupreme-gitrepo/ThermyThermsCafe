

  const menupdf = `"https://www.texasroadhouse.com/texas-roadhouse-master-menu.pdf"`;

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

const contactus = `	<div class="contact__content">
					
<!-- Section -->
<div class="conctact__details">
      

      
      <div class="detail--1">
        <span class="template-icon-feature-phone-circle"></span>
        <h2>Call</h2>
        <p>
          (602) 487-4885<br/>
          <br/>
        </p>
      </div>

      <div class="detail--2">
        <span class="template-icon-feature-location-map"></span>
        <h2>Visit</h2>
        <p>
          464 Rhode Island Av.<br/>
          Phoenix AZ, 85041
        </p>
      </div>
      
      <!-- Right column -->
      <div class="detail--e">
        <span class="template-icon-feature-clock"></span>
        <h2>Email</h2>
        <p>
        kitchen@thermythermscafe.com<br/>
         
        </p>
      </div>
      
   

  


<!-- Section -->

  
  <!-- Contact form -->
  <form name="contact-form" id="contact-form" method="POST" action="#" class="contact-form">
         
      <!-- Left column -->
      <div class="form--1">
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
      
      <!-- Right column -->
      <div class="form--2">
        <div class="template-component-form-field template-state-block">
          <label for="contact-form-message">Message *</label>
          <textarea rows="1" cols="10" name="contact-form-message" id="contact-form-message"></textarea>
        </div>
      </div>
      
  </form>  
  </div> 
     <!-- Button -->
    <div class="template-align-center template-clear-fix template-margin-top-1">
      <span class="template-state-block">
        <input type="submit" value="Submit Message" class="template-component-button" name="contact-form-submit" id="contact-form-submit"/>
      </span>
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
      <span class="template-component-google-map-button-label-show">Show Map</span>
      <span class="template-component-google-map-button-label-hide">Hide Map</span>
    </a>

  </div>

  <script type="text/javascript">

    jQuery(document).ready(function()
    {
      jQuery('.template-component-google-map').templateGoogleMap(
      {
        coordinate		:
        {
          lat			:	'-37.823952',
          lng			:	'144.958766'
        },
        dimension		:
        {
          width		:	'100%',
          height		:	'400px'
        },
        marker			:	'media/image/map_pointer.png'
      });
    });

  </script>					

</div>

</div>
`