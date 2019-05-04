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
            text: this.mockText()
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
            text: this.beeprogerText
          }, {
            title: 'iOS',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/macbook.jpg',
            text: this.iosText
          }, {
            title: 'Android',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/android.jpg',
            text: this.mockText()
          }, {
            title: 'Other Skills',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/other_skills.jpg',
            text: this.mockMarkdown
          }];
    }

    // MARK: Full markdown text for the topics.

    private mockText(): string {
        return `
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. 

You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.

Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. 

You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        `;
    }

    private get mockMarkdown() {
        return `
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

        Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
        
        
        
        - Do this.
        - Do that.
        - Clean up when you're done.
        
        
        
        Do you like that? Simply put: _I don't_. I prefer working **alone**.
        `;
    }

    private get beeprogerText() {
        return `
        I work at beeproger as native iOS and Android developer. The company specializes in business to business (web)applications for medium-sized companies.

        <br/>

        My key responsibilities include:
        
        - Native iOS and Android application development.
        - Deploying applications to the App Store and the Google Play Store.
        - Writing plugins for hybrid frameworks like React Native, Ionic + Capacitor and Nativescript.
        - Building backend applications with Laravel.
        
        <br/>
        
        I started working at the company as iOS developer, but since we can't just leave out the other half of the mobile market, I got the opportunity to learn Android development while working here.
        
        <br/>
        
        In the time I've worked at this company I quickly became the point person for any questions related to the iOS/MacOS platform, and anything regarding the deployment of mobile apps.
        
        <br/>
        
        Beeproger makes heavy use of a PHP framework called _Laravel_. For the first project I worked on here I had to build two native mobile applications and the API they would interface with. Learning the Laravel framework was an eye-opener for me: from this moment I could build complete applications, without being dependent on any cloud service to store my data. This sparked quite some interest in other technologies that supplement my work in mobile development.
        
        <br/>
        
        Most of my colleagues build mobile apps in hybrid frameworks (React Native, Ionic + Capacitor, Nativescript and more recently, Flutter). I used my knowledge about the native APIs and code (Swift/Objective-C and Kotlin/Java) to build plugins for aforementioned hybrid frameworks to tap into some of the native capabilities of the mobile device, like setting up background geolocation or displaying mobile ads.
        
        <br/>
        
        While working here I also worked on some apps that were written with these hybrid frameworks and I helped develop a strategy for us to determine which technology best fits the client's case. I see myself as pretty knowledgeable regarding the pros and cons of these hybrid technologies.
        `;
    }

    private get iosText() {
        return `
        As a long time Apple enthusiast, I have looked at developing MacOS applications multiple times throughout my life, however Objective-C always looked very daunting. With the release of Swift I felt the step to get into MacOS/iOS development became a lot smaller, so I decided to teach myself how to build apps. After some time learning the ins and outs of the language and the UIKit framework and building a lot of practice apps, I got a job at beeproger where I continued my story as iOS developer.

        <br/>

        Relevant skills:
        
        - Swift

        - Objective-C
        
        - Standard frameworks (Foundation, UIKit)

        - Xcode
        
        - Knowledge of commonly used design patterns (MVC, Delegation)
        
        - Knowledge of lower-level concepts (ARC, value/reference types)
        
        - Knowledge about the [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/) and how to deliver an optimal user experience
        
        - Knowledge about the iOS and MacOS platforms        
        `;
    }

}
