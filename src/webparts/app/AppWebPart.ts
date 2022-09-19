import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
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
  private lists: IPropertyPaneDropdownOption[];
  private listsDropdownDisabled: boolean = true;

  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      sp.setup({
        spfxContext: this.context,
      });
    });
  }

  private async loadLists(): Promise<IPropertyPaneDropdownOption[]> {
    const listOptions = await sp.web.lists.orderBy('Title').select('Title').get();
    const propertyPaneDropdownOptions = listOptions.map((item) => {
      return {
        key: item.Title,
        text: item.Title,
      };
    });

    return propertyPaneDropdownOptions;
  }

  protected onPropertyPaneConfigurationStart(): void {
    this.listsDropdownDisabled = !this.lists;

    if (this.lists) {
      return;
    }

    this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'lists');

    this.loadLists().then(
      (listOptions: IPropertyPaneDropdownOption[]): void => {
        this.lists = listOptions;
        this.listsDropdownDisabled = false;
        this.context.propertyPane.refresh();
        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        this.render();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public render(): void {
    const element: React.ReactElement<IAppProps> = React.createElement(App, {
      description: this.properties.description,
      moduloList: this.properties.moduloList,
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
                PropertyPaneDropdown('transactionsList', {
                  label: strings.ModuloListFieldLabel,
                  options: this.lists,
                  disabled: this.listsDropdownDisabled,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
