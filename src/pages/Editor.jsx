import React from 'react';
import {
  HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { toolbarSettings, EditorSetting } from '../data/core';
import { Header } from '../components';

const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
    rounded-3xl"
  >
    <Header category="App" title="Editor" />
    <RichTextEditorComponent
      height={450}
      toolbarSettings={toolbarSettings}
      EditorSetting={EditorSetting}
    >
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);

export default Editor;
