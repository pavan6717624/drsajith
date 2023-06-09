import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

    menuItems = [{ label: 'Home', icon: 'pi pi-home', routerLink: 'home' }, {
      label: 'Services', icon: 'pi pi-flag',
  
      items: [{
        label: 'ANDT Services',
        icon: 'pi pi-slack', routerLink: 'andts',
  
        items: [{
          label: 'Tube Inspection Services',
          icon: 'pi pi-angle-right', routerLink: 'tubeinspectionservices'
        },
        {
          label: '3D MFL Tank Floor Scanning',
          icon: 'pi pi-angle-right', routerLink: 'mfltankfloorscanning'
        },
        {
          label: 'PHASED ARRAY',
          icon: 'pi pi-angle-right', routerLink: 'phasedarray'
        },
        {
          label: 'TIME OF FLIGHT DIFFRACTION (TOFD)',
          icon: 'pi pi-angle-right', routerLink: 'timeofflightdiffraction'
        },
        {
          label: 'Borescope Inspections',
          icon: 'pi pi-angle-right', routerLink: 'borescopeinspections'
        }]
  
  
      },
      {
        label: 'CNDT Services',
        icon: 'pi pi-hourglass', routerLink: 'cndts',
  
        items: [{
          label: 'Magnetic Particle Inspection',
          icon: 'pi pi-angle-right', routerLink: 'magneticparticleinspection'
        },
        {
          label: 'Dye Penetrant Inspection',
          icon: 'pi pi-angle-right', routerLink: 'dyepenetrantinspection'
        },
        {
          label: 'Industrial Radiography',
          icon: 'pi pi-angle-right', routerLink: 'industrialradiography'
        },
        {
          label: 'Ultrasonic Inspection',
          icon: 'pi pi-angle-right', routerLink: 'ultrasonicinspection'
        },
        ]
  
      },
      {
        label: 'Manufacturing Services',
        icon: 'pi pi-shield', routerLink: 'manufacturingservices'
      },
      {
        label: 'Training Services',
        icon: 'pi pi-key', routerLink: 'trainingservices'
      },
      {
        label: 'Manpower Supply',
        icon: 'pi pi-users', routerLink: 'manpowersupply'
  
      },
      {
        label: 'Industries',
        icon: 'pi pi-bolt', routerLink: 'industries'
      }],
  
    }, { label: 'About us', icon: 'pi pi-book', routerLink: 'about' }, { label: 'Contact Us', icon: 'pi pi-phone', routerLink: 'contact' }];
    
  

  ngOnInit(): void {
  }

}
