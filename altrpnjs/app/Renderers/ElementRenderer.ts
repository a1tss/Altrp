import app_path from "../../helpers/app_path";
import fs from "fs";
import * as mustache from 'mustache'
import * as _ from 'lodash'
import altrpRandomId from "../../helpers/altrpRandomId";
import DEFAULT_REACT_ELEMENTS from "../../helpers/const/DEFAULT_REACT_ELEMENTS";

export default class ElementRenderer {
  public static wrapperStub = app_path('altrp-templates/views/element-wrapper.stub')
  private elementStub: string
  private idForAction: string;
  constructor(private element: {
    children: [],
    settingsLock: {},
    settings: {
      layout_html_tag?: string;
      react_element?:boolean
    },
    name: string,
    type: string,
    id: string,
  }) {

    this.elementStub = app_path(`altrp-templates/views/elements${
      this.element.type === 'widget'? '/widgets' : ''
    }/${this.element.name}.stub`)
  }
  async render(): Promise<string>{
    const reactElement =  this.element.settings?.react_element || (DEFAULT_REACT_ELEMENTS.indexOf(this.getName()) !== -1)
    const layout_html_tag = this.element.settings?.layout_html_tag || 'div'
    let children_content = ''
    for (const child of this.element.children){
      let renderer = new ElementRenderer(child)
      children_content += await renderer.render()
    }
    let element_content = '';
    const columns_count = this.element.children.length;

    if(fs.existsSync(this.elementStub)){
      element_content = fs.readFileSync(this.elementStub, {encoding: 'utf8'})
      element_content = mustache.render(element_content, {
        settings: JSON.stringify(this.element.settings),
        id: this.element.id,
        children_content,
        layout_html_tag,
        link_class: this.isLink() ? 'altrp-pointer' : '',
        columns_count,
      })
      // if(this.getName() === 'heading'){
      //   console.log(element_content);
      // }
    } else {
      console.error(`Template for ${this.element.name} not found!`);
    }

    let content = fs.readFileSync(ElementRenderer.wrapperStub, {encoding: 'utf8'});
    let classes = `altrp-element altrp-element${this.getId()} altrp-element_${this.getType()} {{{getAddingClasses(element${this.getId()}_settings)}}} `;
    if (this.getType() === "widget") {
      classes += ` altrp-widget_${this.getName()}`;
    }
    let wrapper_attributes = `class="${classes}"
    {{{getResponsiveSetting(element${this.getId()}_settings, 'en_an', screen)
      ? \`data-enter-animation-type="\${getResponsiveSetting(element${this.getId()}_settings, 'en_an', device)}"
      data-enter-animation-delay="\${getResponsiveSetting(element${this.getId()}_settings, 'en_a_delay', device, 0)}"
      \`
      : ''}}}
      ${reactElement ? `data-react-element="${this.getId()}"` : ''}
    {{{isEmpty(getResponsiveSetting(element${this.getId()}_settings, 'wrapper_click_actions', device)) ? '' : 'data-altrp-wrapper-click-actions="${this.getIdForAction()}"' }}}
    {{{isEmpty(getResponsiveSetting(element${this.getId()}_settings, 'wrapper_appearB_actions', device)) ? '' : 'data-altrp-wrapper-appear-bottom-actions="${this.getIdForAction()}"' }}}
    {{{isEmpty(getResponsiveSetting(element${this.getId()}_settings, 'wrapper_appearT_actions', device)) ? '' : 'data-altrp-wrapper-appear-top-actions="${this.getIdForAction()}"' }}}
    {{{isEmpty(getResponsiveSetting(element${this.getId()}_settings, 'sticky', device)) ?
    '' :
    \`data-altrp-sticky="\${getResponsiveSetting(element${this.getId()}_settings, 'sticky', device)}"
    data-altrp-sticky-spacing="\${getResponsiveSetting(element${this.getId()}_settings, 'st_spacing', device)}"
    data-margin-top="\${getResponsiveSetting(element${this.getId()}_settings, 'st_spacing', device, 0)}"\` }}}
    data-altrp-id="${this.getId()}"
    `
    wrapper_attributes = wrapper_attributes.replace(/\s+/g, ' ');
    content = mustache.render(content, {
      settings: JSON.stringify(this.element.settings),
      id: this.getId(),
      element_content,
      type: this.getType(),
      wrapper_attributes
    })
    return content
  }

  private getId() {
    return this.element.id
  }

  private getType() {
    return this.element.type
  }
  private getName() {
    return this.element.name
  }
  private getIdForAction(){
    if(! this.idForAction){
      this.idForAction = altrpRandomId()
    }
    return this.idForAction
  }
  private isLink(){
    return ! !_.get(this, 'element.settings.link_link.url');
  }
}