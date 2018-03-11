import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ConfigService} from 'ejg-config-service';
import {ContactUsComponent, ContactUsService} from 'wineos-contactus';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [ContactUsService, FormBuilder],
})
export class ContactFormComponent extends ContactUsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.complaintForm = $('app-contact-form .complaint');
    this.generalForm = $('app-contact-form .general');
    this.followUpForm = $('app-contact-form .casefollowup');
    this.rebateForm = $('app-contact-form .rebatestatus');
  }
  countryCode(data) {
    /* Initialize Selectors */
    const /** @type {?} */ USA = $('app-contact-form .USA');
    const /** @type {?} */ CAN = $('app-contact-form .CAN');
    const /** @type {?} */ INT = $('app-contact-form .INT');
    switch (data) {
      case 'USA':
        CAN.add(INT).fadeOut('2000', function () {
          USA.fadeIn('2000');
        });
        break;
      case 'CAN':
        USA.add(INT).fadeOut('2000', function () {
          CAN.fadeIn('2000');
        });
        break;
      default:
        // Switch case wasn't respecting check on ''
        if (data !== '') {
          CAN.add(USA).fadeOut('2000', function () {
            INT.fadeIn('2000');
          });
        }
        else {
          INT.fadeOut('2000');
        }
        break;
    }
  }
  contactCheckbox(data) {
    /* Initialize Selectors */
    const /** @type {?} */ opinionWrapper = $('app-contact-form  #userOpinionWrapper');
    const /** @type {?} */ intcommunicationWrapper = $('app-contact-form  #moreInfoIntlWrapper');
    const /** @type {?} */ communicationWrapper = $('app-contact-form  #moreInfoWrapper');
    const /** @type {?} */ contactWrapper = $('app-contact-form  #userContactWrapper');
    const /** @type {?} */ opinion = this.contactForm.get('yes_opinion').value;
    const /** @type {?} */ communication = this.contactForm.get('yes_communication').value;
    const /** @type {?} */ noContact = this.contactForm.get('no_contact').value;
    const /** @type {?} */ country = this.contactForm.get('country').value;
    // Check if user wants communication
    if (opinion || communication) {
      contactWrapper.fadeOut('2000');
    }
    // Unhide button
    if (!opinion && !communication) {
      contactWrapper.fadeIn('2000');
    }
    if (noContact) {
      if (country !== 'USA' && country !== '') {
        intcommunicationWrapper.fadeOut('2000');
      } else {
        communicationWrapper.add(opinionWrapper).fadeOut('2000');
      }
    } else {
      if (country !== 'USA' && country !== '') {
        intcommunicationWrapper.fadeIn('2000');
      } else {
        communicationWrapper.add(opinionWrapper).fadeIn('2000');
      }
    }
  }
}
