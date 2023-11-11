import React, { useEffect } from 'react';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

const MyEditor = () => {
  let editorInitialized = false;
  useEffect(() => {
    if (!editorInitialized) {
      ClassicEditor.create(document.querySelector('#app'), {
        plugins: [Essentials, Autoformat, Bold, Italic, BlockQuote, Heading, Link, List, Paragraph],
        toolbar: ['heading', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo']
      })
        .then(editor => {
          console.log(editor);
          editor.model.document.on('change', () => {
            console.log('Editor content changed:', editor.getData());
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    editorInitialized = true;
  }, []);

  return <div id="app"></div>;
};

export default MyEditor;
