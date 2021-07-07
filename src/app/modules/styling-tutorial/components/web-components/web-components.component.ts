import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-components',
  templateUrl: './web-components.component.html',
  styleUrls: ['./web-components.component.scss']
})
export class WebComponentsComponent implements OnInit {
  code = {
    customElements: `
      <my-custom-element>
        Put content and markup here
      </my-custom-element>
    `,
    htmlTemplates: `
      <template id="template">
        Put content and markup here
      </template>
    `,
    shadowDOM: `
      <html>
        <my-custom-element>

          #shadow-root (user-agent)
          Content and markup ends here

        </my-custom-element>
      </html>
    `
  };

  constructor() {}

  ngOnInit(): void {}
}
