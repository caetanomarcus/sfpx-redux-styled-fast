import * as React from 'react';
import * as ReactDom from 'react-dom';
import { IPropertyPaneConfiguration, IPropertyPaneDropdownOption, PropertyPaneDropdown, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AppWebPartStrings';
import App from '../app/App';
import { IAppProps } from '../app/interfaces/IAppProps';
import { sp } from '@pnp/sp';

export interface IAppWebPartProps {
  description: string;
  moduloList: any;
}

export default class AppWebPart extends BaseClientSideWebPart<IAppWebPartProps> {
  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      sp.setup({
        spfxContext: this.context,
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<IAppProps> = React.createElement(App, {
      description: this.properties.description,
      context: this.context,
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
