// Any plugins you want to setting has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/
// colorpicker/contextmenu/textcolor plugin is now built in to the core editor, please remove it from your editor configuration

export const plugins = [
  'advlist autolink autosave code codesample  directionality  fullscreen hr insertdatetime link lists nonbreaking noneditable paste preview print save searchreplace spellchecker tabfocus textpattern visualblocks visualchars wordcount',
];

export const toolbar = [
  'fontsizeselect lineheight searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample',
  'hr bullist numlist link  preview insertdatetime forecolor backcolor fullscreen',
];
export const menu = {
  file: { title: '文件', items: 'newdocument preview' },
  edit: { title: '编辑', items: 'undo redo | cut copy paste pastetext | selectall' },
  insert: { title: '插入', items: 'link code codesample hr' },
  view: { title: '查看', items: 'visualaid preview' },
  format: {
    title: '格式',
    items: 'bold italic underline strikethrough superscript subscript | formats | removeformat',
  },
};
