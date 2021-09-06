const homepage = {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Homepage title',
      type: 'string',
      description: "What's the title of the homepage hero?",
    },
    {
      name: 'content',
      title: 'Homepage content',
      type: 'blockContent',
    },
  ],
};

export default homepage;
