import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PaginatedTable } from '../components/paginated/table';

export default {
    title: 'Example/Table',
    component: PaginatedTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<any> = (args) => <PaginatedTable {...args} />;

export const Table = Template.bind({});
