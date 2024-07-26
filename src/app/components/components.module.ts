import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { InformationComponent } from './information/information.component';
import { MemoriesComponent } from './memories/memories.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { StoryComponent } from './story/story.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
       AboutUsComponent,
       InformationComponent,
       MemoriesComponent,
       RsvpComponent,
       StoryComponent,
       HomeComponent
    ],
    imports: [ 
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        AboutUsComponent,
        InformationComponent,
        MemoriesComponent,
        RsvpComponent,
        StoryComponent,
        HomeComponent
    ],
    entryComponents: [
        AboutUsComponent,
        InformationComponent,
        MemoriesComponent,
        RsvpComponent,
        StoryComponent,
        HomeComponent
    ],
    providers: [
    ]
})

export class ComponentsModule { }
