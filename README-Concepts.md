1. Two way property binding -  <input [(ngModel)]="selectedHero.name" placeholder="name"></label>
   This says that selectedHero.name in the ts file will be update if it changes in the template and vice versa. 
   This is how we acheive two way property binding.

2. One way binding is achieved through interpolation - {{}}

3. For a parent child component relationship of property binding we use this template in parent html:


#####Parent Template
``` 
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

#####Child Template
```
<div *ngIf="hero">

  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </label>
  </div>
</div>
```

--> So in parent I am calling child with this tag: <app-hero-detail [hero]="selectedHero"></app-hero-detail>
which says that 'selectedHero' property of the parent needs to be linked to [hero] property of child.
and in child's ts component we will use @Input decorator for the [hero] property to say that  child component is ready to 
receive the property via a @Input decorator.

<b>REFERENCE:</b> src/app/subu/subu.component.html for one-way, two-way binding and interpolation.
https://appdividend.com/2018/01/28/angular-input-output-tutorial-example-scratch/

## ROUTING

1. Add following in the app-routing.module.ts
    const routes: Routes = [
      { path: 'heroes', component: HeroesComponent }
    ];
    
2. In app.component.html, add
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    <app-messages></app-messages>  // If we want this component to be shown after the routing, then remove this
    
3. In app.component.html add
   <nav>
     <a routerLink="/heroes">Heroes</a>
   </nav>


## MODULES
Modules are collection of Components, Services etc to make a unit

## DIRECTIVES
Components are directives. 2 other types of directives are: Structural and Attributes Directives
1. Structural: They alter the layout by adding, removing and replacing elements in DOM eg: ngFor and ngIf.
2. Attribute : They alter the appeerance or behaviour of the existing elements. eg: ngModel.


