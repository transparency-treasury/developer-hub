import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <aside>
      <!-- <h1 class="page-title"><a href="/developer-hub/index.html">Transparency.Treasury.Gov <br>API docs</a></h1> -->
      <p class="intro">The U.S. Department of the Treasury (Treasury) is committed to creating openness and transparency in the federal government. </p>
      <nav>
          <ul>
            <li><a class="overview" [routerLink]="['/']">Overview</a></li>
      <!--      <li><a href="/developer-hub/explore.html" class="explore">API Documentation</a></li> -->
            <li><a class="api-reference" [routerLink]="['/apiReference']">API Documentation RAML</a></li>
            <li><a class="api-standard" [routerLink]="['/apiStandard']">API Standard</a></li>
            <li><a class="contribute" [routerLink]="['/contribute']">Community</a></li>
          </ul>
      </nav>

    </aside>
  `
})
export class navBarComponent {
  title = 'app works!';
}
