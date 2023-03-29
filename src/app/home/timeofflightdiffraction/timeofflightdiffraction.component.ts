import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-timeofflightdiffraction',
  templateUrl: './timeofflightdiffraction.component.html',
  styleUrls: ['./timeofflightdiffraction.component.css']
})
export class TimeofflightdiffractionComponent implements OnInit {

  constructor(  
    private titleService: Title,  
    private metaTagService: Meta  
  ) { }  

  ngOnInit(): void {

    this.titleService.setTitle("VNDTS - TIME OF FLIGHT DIFFRACTION");  
    
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'VNDTS, Velocity NDT Solutions, ANDT Services, CNDT Services, Manufacturing Services, Training Services, Man Power Supply, Industries, Tube inspection, Eddy current testing, Iris inspection, Remote field testing, Near field testing, MFL tube testing, MFL tank floor inspection, API Services, Ultrasonic testing, Radiography testing, Mpi testing, Penetration testing, Heat exchanger inspection, Boiler inspection, Internal Rotary Inspection System, Magnetic Flux Leakage Testing, Surface profile with STARS technology, PHASED ARRAY, TIME OF FLIGHT DIFFRACTION, Borescope Inspections, Magnetic Particle Inspection, Wet Fluorescent Magnetic Test, Dye Penetrant Inspection, Industrial Radiography' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'VNDTS' },  
      { charset: 'UTF-8' }  
    ]);  
  }
}