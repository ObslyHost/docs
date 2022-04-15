module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Games',
      collapsible: true,
      collapsed: false,
      items: [
        'console',
        {
          type: 'category',
          label: 'Guia consola',
          items: ['settings', 'network'],
        },
      ],
    },
  ],
};