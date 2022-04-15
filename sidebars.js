module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Games',
      collapsible: true,
      collapsed: false,
      items: [
        'intro',
        {
          type: 'category',
          label: 'Guia consola',
          items: ['tutorial-basics/congratulations', 'tutorial-basics/create-a-blog-post'],
        },
      ],
    },
  ],
};