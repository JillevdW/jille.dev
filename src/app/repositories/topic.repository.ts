import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import * as moment from 'moment';

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
            image: 'assets/images/me_outside.jpg',
            text: this.aboutMeText,
            customUrl: null
          }, {
            title: 'HiLo',
            type: 'Project',
            shortDescription: 'I help the founders of this social media app with their technical decisions, and I maintain their iOS application.',
            image: 'https://thehiloapp.com/img/humans1.png',
            text: this.hiloText,
            customUrl: null
          }, {
            title: 'beeproger',
            type: 'Chapter',
            shortDescription: 'While I started working here as an iOS developer, along the way I picked up several other skills like Android and Backend development.',
            image: 'assets/images/beepteam.jpg',
            text: this.beeprogerText,
            customUrl: null
          }, {
            title: 'iOS',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/macbook.jpg',
            text: this.iosText,
            customUrl: null
          }, {
            title: 'Android',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/android.jpg',
            text: this.androidText,
            customUrl: null
          }, {
            title: 'App Analytics Library',
            type: 'Project',
            shortDescription: 'A suite of open source packages people can use to add self hosted analytics to their mobile applications.',
            image: 'assets/images/analytics/mobile_user.svg',
            text: '',
            customUrl: 'analytics'
          }, {
            title: 'Other programming skills',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/macbook_xcode.jpg',
            text: this.programmingSkillsText,
            customUrl: null
          }, {
            title: 'Miscellaneous Skills',
            type: 'Topic',
            shortDescription: '',
            image: 'assets/images/other_skills.jpg',
            text: this.miscellaneousText,
            customUrl: null
          }];
    }

    private get friendsCount(): string {
      function ordinal_suffix_of(i) {
        const j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return i + 'st';
        }
        if (j === 2 && k !== 12) {
            return i + 'nd';
        }
        if (j === 3 && k !== 13) {
            return i + 'rd';
        }
        return i + 'th';
      }
      return ordinal_suffix_of(3);
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

    private get aboutMeText() {
        const age = moment().diff('1997/06/13', 'years');
        return `
        I'm Jille van der Weerd, a ${age} year old mobile developer from the Netherlands. I decided to create this website because I was faced with a problem: there's only so much you can fit on a resume, and there's so many more things I'd like to share with you. And while I believe you can only _really_ get to know me by meeting face to face, maybe this is a nice way to become acquainted.

        <br/>

        # A little more about me
        
        This website is filled with a lot of formal things about who I am, what I've done and what I want to do, so I think it's a good idea to start with a less formal introduction to who I am. First of all, I consider myself a very creative person. I have always loved making music, drawing and writing. This eventually resulted in me studying journalism for a year, which I credit as being the reason I still write as much as I do. Growing up in a very musical family, I have played the guitar since I was eight and started singing when I was twelve, and about two years ago I started making a lot of music with some friends (mostly inspired by the Beatles, Oasis and Tom Petty).
        
        <br/>

        Some days I like to sit in Cofee stores with my laptop open, working on my next big app idea, hoping to meet new people to connect with. Other days I like to stay in and watch Friends for the ${this.friendsCount} time.
        
        <br/>
        
        # History
        
        I think I first got in touch with programming when I was about 8 years old. Together with a friend I'd make guide websites for several games we played. Not that long after that I started to dabble with some very simple scripts to make my day to day computer usage a bit easier.
        
        <br/>

        I dropped the programming hobby to pursue a more conventionally-creative (worded like this because I do believe programming to be a creative outlet) path in my early teens. After eventually studying journalism for a year, I decided I'd pick up that old hobby of mine to see where it would take me.
        
        <br/>

        The next year I would start an IT-related study (HBO-ICT at the Hanze University of Applied Sciences). The curriculum of this education (and many others through the Netherlands I later found out) wasn't really inspiring: we'd work with outdated technology to end up building things that were awfully similar to the things I was making as a kid. It wasn't until I started spending a lot of my free time developing iOS apps that I found out that I _really_ wanted to do this for a living. Coincidentally, that was also the moment I decided that I'd probably learn more in a shorter timeframe if I dropped out and instead spent all my time reading about Swift and building iOS apps. Not that long after that I landed my first job.
        
        <br/>
        
        # Future
        
        I've grown as a person and as a professional since the moment I landed that first job, and I have clear goals in mind for my future. At my current job I found out that I'm very interested in stuff like software architecture and other concepts that go a lot deeper than just writing code. This is one the reasons why I'd still like to pursue a master's degree at some point.
        
        <br/>

        And the final goal for me would be to make the move to Silicon Valley, to (hopefully) work on the iOS operating system.
        
        <br/>

        Of course that move is both literally and figuratively miles away, so I'm planning to take some leaps in between. If you've read this far and are looking for an enthusiastic addition to your team, or you just want to have a chat about some technical skills, please send me an email! 
        `;
    }

    private get hiloText() {
        return `
        I joined the Hilo team just before I started working, to try and build a portfolio. The (NYC based) non-tech founders were looking for somebody to take over development of their iOS application and we really hit it off in a Skype call so I decided I'd help them out.

        <br/>

        Let's dive into what it is: at its core, Hilo is a social media app that aims to bring the social back to media. By omitting images from the posts, which are set up in a way that encourages sharing of the highs and lows of the users' days, we hope the content provided is more "real" than the content you'll see on other social networks like Instagram, where people only post the good things.
        
        <br/>
        
        Working on Hilo has taught me a lot about maintaining existing software, even if it isn't written the way you're used to. I've worked with the founders on the first of many steps towards attracting more users (through a slight redesign of their app and their app store listing), retaining those users (through email campaigns), and building a backend platform they can use to get some insight into the data about the app.
        
        <br/>
        
        There's one more thing I'd like to highlight. While it's not foreign in this line of work to have to explain technical concepts to people that aren't technically inclined, I see my role at Hilo to be that of a consultant that can carefully weigh the needs of both founders, and tries to propose a solution that best fits their needs and expectations.
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

        - Relevant tooling (Xcode, Instruments, CocoaPods, App Store Connect)
        
        - Knowledge of commonly used design patterns (MVC, Delegation)
        
        - Knowledge of lower-level concepts (ARC, value/reference types)
        
        - Knowledge about the [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/) and the [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
        
        - Knowledge about the iOS and MacOS platforms        
        `;
    }

    private get androidText() {
        return `
        It turns out that when you build a native iOS app, chances are your client is going to need an Android app at some point too. After a few months of working at beeproger I got the opportunity to learn how to build Android apps, and it has been a great journey. It has taught me different ways to look at so many facets of my development cycle; using different architectures, supporting a very large range of devices (and operating systems) and breaking out of the comfort zone that is iOS to build apps that adhere to a whole new set of design guidelines.

        <br/>

        Relevant skills:
        
        - Kotlin
        - Java
        - Standard frameworks (Android APIs, Jetpack, Support Library)
        - Relevant tooling (Android Studio, Gradle, Google Play Store)
        - Knowledge of commonly used design patters (MVVM, LiveData, Dependency Injection)
        - Knowledge of commonly used libraries (OkHttp, Picasso, RetroFit)
        - Familiar with the [Material Design Guidelines](https://material.io/design/)
        `;
    }

    private get programmingSkillsText() {
        return `
        While working at beeproger I picked up some programming skills that aren't strictly related to mobile development, but they did help me better understand certain software development principles. This also sparked an interest in software development outside of the mobile world, to the point where I now spend a lot of my free time writing backend- and webapplications.

        <br/>

        Software related skills:
        
        - Laravel
        - Angular (as a matter of fact, this website was built with Angular!)
        - Nativescript (with Angular)
        - Ionic (with Capacitor + Angular)
        - Writing plugins for hybrid frameworks (React Native, Nativescript, Ionic with Capacitor)
        
        <br/>
        
        Other skills:
        
        - Git
        - Agile/scrum
        
        <br/>
        
        I consider myself a well-rounded software developer with knowledge about most facets that go into the process of building mobile applications, from the concept stage all the way to deployment and testing.
        
        <br/>
        
        Relevant interests:
        
        - Machine learning (basic Tensorflow and CoreML, mostly computer vision and text classification)
        - Augmented Reality (did a simple concept to look at the human body in AR)
        - Test Driven Development
        `;
    }

    private get miscellaneousText() {
      return `
      My interests are not just limited to programming: with an open mind and an attitude of curiosity I try to learn new things wherever I go. I've picked up some of the following skills around the office, and others just out of interest.

      <br/>

      Skills:
      
      - UI Design (Sketch/Photoshop)
      - Writing
      
      <br/>
      
      Languages:
      
      - Dutch (native)
      - English (full professional proficiency)
      `;
    }

}
