export const TestSection = ({cms, ...props}: any) => {
  console.log(cms, props);

  return (
    <div>
      <p>Hola: {cms.howdy}</p>
      <span>Saras</span>
    </div>
  );
};

TestSection.Schema = {
  label: 'Test Section',
  key: 'testSection',
  fields: [
    {
      name: 'howdy',
      component: 'text',
      label: 'Howdy Label',
    },
    {
      name: 'howdy2',
      component: 'text',
      label: 'Howdy Label 2',
    },
  ],
};
