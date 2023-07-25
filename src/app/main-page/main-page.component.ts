import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface job{
  jobTitle: string;
  jobSubtitle: string;
  jobBullets: string[];
}

interface project{
  projectUrl: string;
  projectName: string;
  projectImage: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  skillList: string[] = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Angular',
    'NodeJS',
    'LoopbackJS',
    'Python',
    'Flask',
    'C/C++',
    'Java',
    'C#',
    'Git',
    'Unity'
  ];

  jobList: job[] = [
    {
      jobTitle: 'Full Stack Engineer',
      jobSubtitle: 'GSE Solutions | Jan 2022 - Present',
      jobBullets: [
        'Developing a web-based application using MEAN Stack to display nuclear powerplant data to customers and internal engineers',
        'Creating backend methods using NodeJS and LoopBack to connect an Angular frontend to MongoDB database',
        'Utilizing Flask and Python to create a separate backend used to pull data from MongoDB and perform calculations'
      ]
    },
    {
      jobTitle: 'Research Intern',
      jobSubtitle: 'Urvin AI | Aug 2021 - Oct 2021',
      jobBullets: [
        'Investigated future technologies and studies involving AI music analysis and AI music generation',
        'Utilized various artificial intelligence libraries in Python, C++, and Javascript to extract musical data from audio files',
        'Compiled audio samples and documents to organize and present findings for senior software engineers '
      ]
    },
    {
      jobTitle: 'Game Development Intern',
      jobSubtitle: 'TechWorks | Jan 2021 - May 2021',
      jobBullets: [
        'Developed a 2D Space Survival Game using Unity and C# for the local Center for Technology and Innovation',
        'Worked Weekly with a team to coordinate gameplay and game progression elements',
        'Created working Item, Inventory, Crafting, Events, and Tutorial systems that interacted with each other through the game'
      ]
    },
  ];

  projectList: project[] = [
    {
      projectUrl: 'https://github.com/cquelle3/React-Django-TodoList',
      projectName: 'React-Django Todo List',
      projectImage: "url('./assets/TodoList.png')"
    },
    {
      projectUrl: 'http://cquelle3.github.io/recipe-app',
      projectName: 'Recipe Search App',
      projectImage: "url('./assets/RecipeSearchApp.png')"
    }
  ];

  ngOnInit(): void {
      AOS.init();
  }

  navigateToUrl(url: string){
    window.open(url);
  }

  openResume(){
    window.open('./assets/ColinQuelleResume.pdf')
  }

  scrollToTarget(ele: HTMLElement){
    ele.scrollIntoView({behavior: 'smooth'});
  }
}
