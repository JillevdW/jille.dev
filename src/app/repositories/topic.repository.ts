import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';

// tslint:disable:max-line-length
// tslint:disable:no-trailing-whitespace

@Injectable({
    providedIn: 'root'
})
export class TopicRepository {

    constructor() {}

    public topics(): Array<Topic> {
        return this.mockData();
    }

    private mockData(): Array<Topic> {
        return [{
            title: 'About me',
            type: 'Topic',
            shortDescription: 'Some information about me, like why I do the things that I do!',
            image: 'assets/images/me.jpg',
            text: this.aboutMeText()
          }, {
            title: 'HiLo',
            type: 'Project',
            shortDescription: 'I help the founders of this social media app with their technical decisions, and I maintain their iOS application.',
            image: 'https://thehiloapp.com/img/humans1.png',
            text: this.mockText()
          }, {
            title: 'beeproger',
            type: 'Chapter',
            shortDescription: 'While I started working here as an iOS developer, along the way I picked up several other skills like Android and Backend development.',
            image: 'assets/images/beepteam.jpg',
            text: this.mockText()
          }];
    }

    // MARK: Full markdown text for the topics.

    private mockText(): string {
        return '';
    }

    private aboutMeText(): string {
        return `
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. 

You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        `;
    }

}
