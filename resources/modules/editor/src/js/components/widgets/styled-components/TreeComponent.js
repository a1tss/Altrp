import {styledString} from "../../../../../../front-app/src/js/helpers/styles";
import styled from "styled-components";
import {getResponsiveSetting} from "../../../../../../front-app/src/js/helpers";
import AltrpImage from "../../altrp-image/AltrpImage";

export default function TreeComponent(settings, prefix) {
  const styles = [
    "bp3-tree-node svg",
      ["width", "icon_size", "slider"],
      ["height", "icon_size", "slider"],
    "}",

    "bp3-tree-node img",
    ["width", "icon_size", "slider"],
    ["height", "icon_size", "slider"],
    "}",

    "bp3-tree-node-caret-none",
      () => "position: absolute",
    "}",

    "bp3-tree-node-caret-none",
      ["width", "icon_size", "slider"],
      ["height", "icon_size", "slider"],
      () => "z-index: 99",
    "}",

    'bp3-tree',
      ['background-color', 'tree_menu_background', 'color'],
    '}',

    'bp3-tree-node-list',
      ['padding', 'tree_menu_padding', 'dimensions'],
    '}',

    'bp3-tree-node-content',
      ['padding', 'tree_item_padding', 'dimensions'],
    '}',

    "bp3-tree-node.bp3-tree-node-selected path",
      ["fill", "icon_fill", "color", ".active"],
      ["stroke", "icon_stroke", "color", ".active"],
    "}",

    "bp3-tree-node path",
      ["fill", "icon_fill", "color"],
      ["stroke", "icon_stroke", "color"],
    "}",

    "bp3-tree-node path",
      ["fill", "icon_fill", "color"],
      ["stroke", "icon_stroke", "color"],
    "}",

    "bp3-tree-node-label",
      ["", "typographic", "typographic"],
      ["color", "typographic_color", "color"],
    "}",

    "bp3-tree-node-selected .bp3-tree-node-label",
      ["", "typographic", "typographic", ".active"],
      ["color", "typographic_color", "color", ".active"],
    "}",

    "bp3-tree-node-content",
      ["height", "item_height", "slider"],
      ["background-color", "item_background", "color"],
      ["border-radius", "border_radius", "dimensions"],
      ["", "border_shadow", "shadow"],
      ["border-style", "border_type", ""],
      ["border-width", "border_width", "dimensions"],
      ["border-color", "border_color", "color"],
    "}",

    "bp3-tree-node-content:hover",
      ["background-color", "item_background", "color"],
    "}",

    "bp3-tree-node-content:hover.bp3-tree-node-content:hover",
      ["background-color", "item_background", "color", ":hover"],
      ["border-radius", "border_radius", "dimensions", ":hover"],
      ["border-style", "border_type", "", ":hover"],
      ["border-width", "border_width", "dimensions", ":hover"],
      ["border-color", "border_color", "color", ":hover"],
      ["", "border_shadow", "shadow", ":hover"],
    "}",

    ("bp3-tree-node-selected > .bp3-tree-node-content:nth-child(1).bp3-tree-node-content, " +
    ".bp3-tree-node-selected > .bp3-tree-node-content:nth-child(1):hover.bp3-tree-node-content:hover"),
      ["background-color", "item_background", "color", ".active"],
      ["border-radius", "border_radius", "dimensions", ".active"],
      ["border-style", "border_type", "", ".active"],
      ["border-width", "border_width", "dimensions", ".active"],
      ["border-color", "border_color", "color", ".active"],
      ["", "border_shadow", "shadow", ".active"],
    "}",

    //state disabled
    ".state-disabled .bp3-tree-node svg",
    ["width", "icon_size", "slider", ".state-disabled"],
    ["height", "icon_size", "slider", ".state-disabled"],
    "}",

    '.state-disabled .bp3-tree',
    ['background-color', 'tree_menu_background', 'color', ".state-disabled"],
    '}',

    '.state-disabled .bp3-tree-node-list',
    ['padding', 'tree_menu_padding', 'dimensions', ".state-disabled"],
    '}',

    '.state-disabled .bp3-tree-node-content',
    ['padding', 'tree_item_padding', 'dimensions', ".state-disabled"],
    '}',

    ".state-disabled .bp3-tree-node.bp3-tree-node-selected path",
    ["fill", "icon_fill", "color", ".state-disabled"],
    ["stroke", "icon_stroke", "color", ".state-disabled"],
    "}",

    ".state-disabled .bp3-tree-node path",
    ["fill", "icon_fill", "color", ".state-disabled"],
    ["stroke", "icon_stroke", "color", ".state-disabled"],
    "}",

    ".state-disabled .bp3-tree-node path",
    ["fill", "icon_fill", "color", ".state-disabled"],
    ["stroke", "icon_stroke", "color", ".state-disabled"],
    "}",

    ".state-disabled .bp3-tree-node-label",
    ["", "typographic", "typographic", ".state-disabled"],
    ["color", "typographic_color", "color", ".state-disabled"],
    "}",

    ".state-disabled .bp3-tree-node-selected .bp3-tree-node-label",
    ["", "typographic", "typographic", ".state-disabled"],
    ["color", "typographic_color", "color", ".state-disabled"],
    "}",

    ".state-disabled .bp3-tree-node-content",
    ["height", "item_height", "slider", ".state-disabled"],
    ["background-color", "item_background", "color", ".state-disabled"],
    ["border-radius", "border_radius", "dimensions", ".state-disabled"],
    ["", "border_shadow", "shadow", ".state-disabled"],
    ["border-style", "border_type", "", ".state-disabled"],
    ["border-width", "border_width", "dimensions", ".state-disabled"],
    ["border-color", "border_color", "color", ".state-disabled"],
    "}",

    (".state-disabled .bp3-tree-node-selected > .state-disabled .bp3-tree-node-content:nth-child(1).bp3-tree-node-content, " +
      ".state-disabled .bp3-tree-node-selected > .state-disabled .bp3-tree-node-content:nth-child(1):hover.bp3-tree-node-content:hover"),
    ["background-color", "item_background", "color", ".state-disabled"],
    ["border-radius", "border_radius", "dimensions", ".state-disabled"],
    ["border-style", "border_type", "", ".state-disabled"],
    ["border-width", "border_width", "dimensions", ".state-disabled"],
    ["border-color", "border_color", "color", ".state-disabled"],
    ["", "border_shadow", "shadow", ".state-disabled"],
    "}",

    //state active
    ".active .bp3-tree-node svg",
    ["width", "icon_size", "slider", ".active"],
    ["height", "icon_size", "slider", ".active"],
    "}",

    '.active .bp3-tree',
    ['background-color', 'tree_menu_background', 'color', ".active"],
    '}',

    '.active .bp3-tree-node-list',
    ['padding', 'tree_menu_padding', 'dimensions', ".active"],
    '}',

    '.active .bp3-tree-node-content',
    ['padding', 'tree_item_padding', 'dimensions', ".active"],
    '}',

    ".active .bp3-tree-node.bp3-tree-node-selected path",
    ["fill", "icon_fill", "color", ".active"],
    ["stroke", "icon_stroke", "color", ".active"],
    "}",

    ".active .bp3-tree-node path",
    ["fill", "icon_fill", "color", ".active"],
    ["stroke", "icon_stroke", "color", ".active"],
    "}",

    ".active .bp3-tree-node path",
    ["fill", "icon_fill", "color", ".active"],
    ["stroke", "icon_stroke", "color", ".active"],
    "}",

    ".active .bp3-tree-node-label",
    ["", "typographic", "typographic", ".active"],
    ["color", "typographic_color", "color", ".active"],
    "}",

    ".active .bp3-tree-node-selected .bp3-tree-node-label",
    ["", "typographic", "typographic", ".active"],
    ["color", "typographic_color", "color", ".active"],
    "}",

    ".active .bp3-tree-node-content",
    ["height", "item_height", "slider", ".active"],
    ["background-color", "item_background", "color", ".active"],
    ["border-radius", "border_radius", "dimensions", ".active"],
    ["", "border_shadow", "shadow", ".active"],
    ["border-style", "border_type", "", ".active"],
    ["border-width", "border_width", "dimensions", ".active"],
    ["border-color", "border_color", "color", ".active"],
    "}",

    (".active .bp3-tree-node-selected > .active .bp3-tree-node-content:nth-child(1).bp3-tree-node-content, " +
      ".active .bp3-tree-node-selected > .active .bp3-tree-node-content:nth-child(1):hover.bp3-tree-node-content:hover"),
    ["background-color", "item_background", "color", ".active"],
    ["border-radius", "border_radius", "dimensions", ".active"],
    ["border-style", "border_type", "", ".active"],
    ["border-width", "border_width", "dimensions", ".active"],
    ["border-color", "border_color", "color", ".active"],
    ["", "border_shadow", "shadow", ".active"],
    "}",

  ]

  return styledString(styles, settings, {
    settingsPrefix: prefix
  })
}

export const NullArray = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C4C4C4;
`
