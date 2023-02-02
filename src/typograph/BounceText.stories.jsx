/* eslint-disable import/no-anonymous-default-export */
import BounceText from "./BounceText";

export default {
  title: "Component/Typograph",
  component: BounceText,
};

const Template = (args) => <BounceText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "BounceText",
};
